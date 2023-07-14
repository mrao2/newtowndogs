const express = require("express");
const path = require('path');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../frontend')));

app.get("/api", (req, res) => {
    res.send("Hello!");
});

app.get('/api/data', (req, res) => {
    const jsonData = require('./data/db.json');
    res.send(jsonData);
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});