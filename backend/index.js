const read = require("./SqlFunctions/Read.js");
const create = require("./SqlFunctions/Create.js");
const deleteRow = require("./SqlFunctions/Delete.js");
const update = require("./SqlFunctions/Update.js");
const express = require("express");
const path = require("path");
require("dotenv").config();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database,
});

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../frontend")));
app.use(express.json());

// Blog Functions!
app.get("/api/data", async (req, res) => {
  await read(req, res, "SELECT * FROM blogs");
});

app.get("/api/data/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
    await read(req, res, "SELECT * FROM blogs LEFT JOIN comments ON blogs.BlogId = comments.BlogId WHERE blogs.BlogId = ?", BlogId)
});

app.post("/api/data", async (req, res) => {
  await create(req, res, "INSERT INTO blogs SET ?");
});

app.delete("/api/data/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
  await deleteRow(req, res, "DELETE FROM blogs WHERE BlogId = ?", BlogId);
});

app.put("/api/data/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
  const Title = req.body.title;
  const Body = req.body.body;
  const Author = req.body.author;
  await update(
    req,
    res,
    "UPDATE blogs SET Title = ?, Body = ?, Author = ? WHERE BlogId = ?",
    BlogId,
    Title,
    Body,
    Author
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
