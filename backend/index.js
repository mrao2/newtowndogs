const read = require("./SqlFunctions/Read.js");
const express = require("express");
const path = require("path");
require("dotenv").config();

const { writeFileSync } = require("fs");
const crypto = require("crypto");
const { stringify } = require("querystring");

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

app.get("/api/data", async (req, res) => {
     let sql = `SELECT * FROM blogs`;``
    connection.query(sql, function(err, data, fields) {
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

app.get('/api/data', (req, res) => {
    
    res.send(JSON.stringify(jsonData));
  });

// app.post('/api/data',(req, res) =>{
//     req.body.id = crypto.randomUUID();
//     jsonData.blogs.push(req.body);
//     writeFileSync('./data/db.json', JSON.stringify(jsonData, undefined, 2));
//     res.send(jsonData);
// })

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
