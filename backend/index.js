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
    await read(req,res,'SELECT * FROM blogs')
    
});

// API endpoint to fetch a specific blog by BlogId
app.get("/api/data/:BlogId", async (req, res) => {
  const { BlogId } = req.params;

    await read(req,res, 'SELECT * FROM blogs WHERE BlogId = ?', BlogId)

});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
