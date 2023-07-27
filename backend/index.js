const read = require("./SqlFunctions/Read.js");
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

app.get("/api/data", async (req, res) => {
     let sql = `SELECT * FROM blogs`;
    connection.query(sql, function(err, data, fields) {
      if (err) throw err;
      res.json({
        status: 200,
        data,
        message: "User lists retrieved successfully"
      })
    })
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


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
