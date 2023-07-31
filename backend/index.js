const read = require("./SqlFunctions/Read.js");
const create = require("./SqlFunctions/Create.js");
const deleteRow = require('./SqlFunctions/Delete.js')
const update = require("./SqlFunctions/Update.js")
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
    await read(req,res,'SELECT * FROM blogs')
    
});

// API endpoint to fetch a specific blog by BlogId
app.get("/api/data/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
  try {
    const singleBlog = await read(BlogId);
    res.send(singleBlog);
  } catch (err) {
    if (err === "Blog Not Found") {
      res.status(404).json({ error: "Blog not found" });
    } else {
      console.error("Error retrieving data:", err);
      res.status(500).send("Error retrieving data");
    }
  }

});

app.post('/api/data', async(req, res) =>{
   await create(req,res, 'INSERT INTO blogs SET ?')
})

app.delete('/api/data/:BlogId', async(req, res) =>{
    const { BlogId } = req.params;
    await deleteRow(req,res, 'DELETE FROM blogs WHERE BlogId = ?', BlogId)
 })

 app.put('/api/data/:BlogId', async(req, res) =>{
    console.log(req.body);
    const { BlogId } = req.params;
    const Title = req.body.title;
    console.log(Title);
    const Body = req.body.body;
    const Author = req.body.author;
    await update(req, res, 'UPDATE blogs SET Title = ?, Body = ?, Author = ? WHERE BlogId = ?', BlogId, Title, Body, Author)
 })
 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
