const read = require("./SqlFunctions/Read.js");
const express = require("express");
const path = require("path");
require("dotenv").config();

const { writeFileSync } = require("fs");
const crypto = require("crypto");
const { stringify } = require("querystring");

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database,
});

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../frontend")));
app.use(express.json());

app.get("/api/data", async (req, res) => {
  let sql = `SELECT * FROM blogs`;
  connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully"
    })
  })
  //   try {
  //     const sq = "SELECT * FROM blogs";
  //     const allBlogs = await read(req, res, sq);
  //     res.send(allBlogs);
  //   } catch (err) {
  //     // Handle errors here, if necessary
  //     console.error("Error retrieving data:", err);
  //     res.status(500).send("Error retrieving data");
  //   }
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

// app.post('/api/data',(req, res) =>{
//     req.body.id = crypto.randomUUID();
//     jsonData.blogs.push(req.body);
//     writeFileSync('./data/db.json', JSON.stringify(jsonData, undefined, 2));
//     res.send(jsonData);
// })


app.post("/api/test_data", (req, res) => {
  let sql = `INSERT INTO test_table (test_text) VALUES ('?')`;
  connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "appointment submitted"
    })
  });
});




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
