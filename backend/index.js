const express = require("express");
const path = require('path');
const jsonData = require('./data/db.json');
const { writeFileSync } = require("fs");
const crypto = require('crypto');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../frontend')));
app.use(express.json());

app.get("/api", (req, res) => {
    res.send("Hello!");
});

app.get('/api/data', (req, res) => {
    
    res.send(JSON.stringify(jsonData));
  });

app.post('/api/data',(req, res) =>{
    req.body.id = crypto.randomUUID();
    jsonData.blogs.push(req.body);
    writeFileSync('./data/db.json', JSON.stringify(jsonData, undefined, 2));
    res.send(jsonData);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});