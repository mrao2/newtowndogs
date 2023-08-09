const read = require("./SqlFunctions/Read.js");
const create = require("./SqlFunctions/Create.js");
const deleteRow = require("./SqlFunctions/Delete.js");
const update = require("./SqlFunctions/Update.js");
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bcrypt = require('bcrypt');
dotenv.config();

var mysql = require("mysql");
const e = require("express");
const { connect } = require("http2");

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

// Blog Functions!
app.get("/api/data", async (req, res) => {
  await read(req, res, "SELECT * FROM blogs");
});

app.get("/api/data/:BlogId", async (req, res) => {
  const { BlogId } = req.params;

  await read(req, res, "SELECT * FROM blogs WHERE BlogId = ?", BlogId);
});

app.post("/api/data", async (req, res) => {
  await create(req, res, "INSERT INTO blogs SET ?");
});

app.delete("/api/data/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
  await deleteRow(req, res, "DELETE FROM blogs WHERE BlogId = ?", BlogId);
});

app.put("/api/data/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
  const Title = req.body.title;
  const Body = req.body.body;
  const Author = req.body.author;
  await update(
    req,
    res,
    "UPDATE blogs SET Title = ?, Body = ?, Author = ? WHERE BlogId = ?",
    BlogId,
    Title,
    Body,
    Author
  );
});

//login functions!!
console.log("hello");
app.post('/login', (req, res)=> {
  const email = req.body.email;
  const password = req.body.password;
  console.log("Received email:", email);
  console.log("Received password:", password);

  const connection = mysql.createConnection({
    host: process.env.Host,
    user: process.env.User,
    password: process.env.Password,
    database: process.env.Database,
  });

  connection.connect((err) => {
    if(err) {
      console.error('Database connection error:', err);
      res.status(500).send({err: err});
      return;
    }
    console.log('Connected to the database');
  })
//finds user w this email in db
  connection.query(
    "SELECT * FROM login_app WHERE email = ?",
    [email],
    (err, result) => {
      console.log(result);
//if err in query, status code & err message returned
      if(err) {
        console.error("Database error:", err);
        res.status(500).send({err: err});
      } else {
//otherwise, checks result length, makes sure theres one matching user. then retrieves stored HASHED pwd. uses compare to make sure theyre the same 
        if (result.length === 1) {
          const storedEmail = result[0].email;
          //change to storedHashedPassword^^
          if(email === storedEmail) {
            res.send({message: "Login successful!"});
        } else {
          res.send({message: "Wrong email/password!"});
        }
      } else {
        res.send({message: "Wrong email/password."});
        }
      } 
      connection.end();
    }
  );
}); 


// bcrypt.compare(password, storedHashedPassword, (bcryptErr, bcryptResult) => {
//   if (bcryptErr || !bcryptResult) {
//     res.send({message: "Wrong email/password."});
// } else {
//   res.send({message: "Login successful."});
// }
// connection.end();
// });
// } else {
// res.send({message: "Wrong email/password."});
// connection.end();

//registration functions!

app.post('/Profile', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
    //hashes the password, 10 salt rounds 
  bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
    //if there's an error, its console logged
    if(hashErr) {
      console.error(hashErr);
      //error status code
      res.status(500).json({message: "Error hashing password."});
    } else {
      //store pwd and em in db
      db.query(
        "INSERT INTO login_app (email, password) VALUES (?,?)",
        [email, hashedPassword],
        (dbErr, dbResult) => {
          //db errors
          if(dbErr) {
            console.error(dbErr);
            res.status(500).json({message: "Error storing user data."});
          } else {
            //yay!! success code
            res.status(201).json({message: "Registration successful."});
          }
        }
      )
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

