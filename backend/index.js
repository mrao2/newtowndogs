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
app.get("/blogs", async (req, res) => {
  await read(req, res, "SELECT * FROM blogs");
});

app.get("/blogs/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
    await read(req, res, "SELECT * FROM blogs LEFT JOIN comments ON blogs.BlogId = comments.BlogId WHERE blogs.BlogId = ?", BlogId)
});

app.post("/blogs", async (req, res) => {
  await create(req, res, "INSERT INTO blogs SET ?");
});

app.delete("/blogs/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
  await deleteRow(req, res, "DELETE FROM blogs WHERE BlogId = ?", BlogId);
});

app.put("/blogs/:BlogId", async (req, res) => {
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


// Comment Function
app.get("/comments", async (req, res) => {
  await read(req, res, "SELECT * FROM comments");
});

app.get("/comments/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
    await read(req, res, "SELECT * FROM comments WHERE comments.BlogId = ?", BlogId)
});

app.post("/comments", async (req, res) => {
  await create(req, res, "INSERT INTO comments SET ?");
});

app.delete("/comments/:CommentId", async (req, res) => {
  const { CommentId } = req.params;
  await deleteRow(req, res, "DELETE FROM comments WHERE CommentId = ?", CommentId);
});

app.put("/comments/:CommentId", async (req, res) => {
  const { CommentId } = req.params;
  const Body = req.body.Comment_Body;
  const Author = req.body.Comment_Author;
  await update(
    req,
    res,
    "UPDATE comments SET Comment_Body = ?, Comment_Author = ? WHERE CommentId = ?",
    CommentId,
    Body,
    Author
  );
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
