const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../frontend')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});