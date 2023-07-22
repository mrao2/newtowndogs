const read = require("./SqlFunctions/Read.js");
const express = require("express");
const path = require("path");
const { writeFileSync } = require("fs");
const crypto = require("crypto");
const { stringify } = require("querystring");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "Dalton-Laptop",
  user: "dogtownuser",
  password: "admin",
  database: "blogs",
});

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../frontend")));
app.use(express.json());

app.get("/api/data", async (req, res) => {
  try {
    const allBlogs = await read();
    res.send(allBlogs);
  } catch (err) {
    // Handle errors here, if necessary
    console.error("Error retrieving data:", err);
    res.status(500).send("Error retrieving data");
  }
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

  // const selectQuery = 'SELECT * FROM blogs WHERE BlogId = ?';
  // connection.query(selectQuery, [BlogId], (err, results) => {
  //   if (err) {
  //     console.error('Error fetching data:', err);
  //     res.status(500).json({ error: 'Error fetching data' });
  //   } else {
  //     if (results.length === 0) {
  //       res.status(404).json({ error: 'Blog not found' });
  //     } else {
  //       res.json(results[0]);
  //     }
  //   }
  // });
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
