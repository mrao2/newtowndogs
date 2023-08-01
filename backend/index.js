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
  await read(req, res, 'SELECT * FROM blogs')
});

app.get("/api/data/:BlogId", async (req, res) => {
  const { BlogId } = req.params;

  await read(req, res, 'SELECT * FROM blogs WHERE BlogId = ?', BlogId)

});

app.post('/api/data', async (req, res) => {
  await create(req, res, 'INSERT INTO blogs SET ?')
})

app.delete('/api/data/:BlogId', async (req, res) => {
  const { BlogId } = req.params;
  await deleteRow(req, res, 'DELETE FROM blogs WHERE BlogId = ?', BlogId)
})

app.put('/api/data/:BlogId', async (req, res) => {
  console.log(req.body);
  const { BlogId } = req.params;
  const Title = req.body.title;
  console.log(Title);
  const Body = req.body.body;
  const Author = req.body.author;
  await update(req, res, 'UPDATE blogs SET Title = ?, Body = ?, Author = ? WHERE BlogId = ?', BlogId, Title, Body, Author)
})

//appointment functions
app.post('/api/appointments', async (req, res) => {
  await create(req, res, 'INSERT INTO appointments SET ?')
})

// app.delete('/api/appointments', async (req, res) => {
//   const { appointment_id } = req.params;
//   await deleteRow(req, res, 'DELETE FROM appointments WHERE appointment_id = ?', appointment_id);
// })



// app.post("/api/test_data", (req, res) => {
//   let sql = `INSERT INTO test_table (test_text) VALUES ('?')`;
//   connection.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.json({
//       status: 200,
//       data,
//       message: "appointment submitted"
//     })
//   });
// });

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL:", err);
    return;
  }

  // Execute a query against the database
  connection.query("SELECT * FROM appointments", (err, results) => {
    if (err) {
      console.log("Error querying MySQL:", err);
      return;
    }

    // Check the results of the query
    if (results.length > 0) {
      console.log("Connection to MySQL successful!");
    } else {
      console.log("Connection to MySQL failed!");
    }
  });
});

app.put('/api/data/:BlogId', async (req, res) => {
  const { BlogId } = req.params;
  const Title = req.body.title;
  const Body = req.body.body;
  const Author = req.body.author;
  await update(req, res, 'UPDATE blogs SET Title = ?, Body = ?, Author = ? WHERE BlogId = ?', BlogId, Title, Body, Author)
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
