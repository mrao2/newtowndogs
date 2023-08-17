const read = require("./SqlFunctions/Read.js");
const create = require("./SqlFunctions/Create.js");
const deleteRow = require("./SqlFunctions/Delete.js");
const update = require("./SqlFunctions/Update.js");
const express = require("express");
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
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
try{
 connection.connect(function(err){
  if (err) throw err;
  console.log("connected to mysql server!");
 });
} catch (error) {
  console.error("error connecting to mysql:", error);
}

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../frontend")));
app.use(express.json());

//Home functions
app.get("/api/home", async (req, res) => {
  await read(req, res, "SELECT * FROM homepage");
});

app.get("/api/home/:id", async (req, res) => {
  const { id } = req.params;

  await read(req, res, "SELECT * FROM homepage WHERE id = ?", id);
});

app.post("/api/home", async (req, res) => {
  await create(req, res, "INSERT INTO homepage set ?");
});

app.delete("/api/home/:id", async (req, res) => {
  const { id } = req.params;
  await deleteRow(req, res, "DELETE FROM homepage WHERE id = ?", id);
});

//appointment functions
app.post('/api/appointments', async (req, res) => {
  await create(req, res, 'INSERT INTO appointments SET ?')
});
app.get("/api/appointments", async (req, res) => {
  await read(req, res, "SELECT * FROM appointments");
});
app.delete("/api/appointments/:appointment_id", async (req, res) => {
  const { appointment_id } = req.params;
  await deleteRow(req, res, "DELETE FROM appointments WHERE appointment_id = ?", appointment_id);
});
// app.get("/api/appointments/:appointment_id", async (req, res) => {
//   const { appointment_id } = req.params;  
//   await read(req, res, 'SELECT * FROM appointments WHERE appointment_id = ?', appointment_id);});
//   app.put('/api/appointments/:appointment_id', async (req, res) => {
//   const { appointment_id } = req.params;
//   const description = req.body.description;
//   const email = req.body.email;
//   const end_date = req.body.end_date;
//   const end_time = req.body.end_time;
//   const first_name = req.body.first_name;
//   const id = req.body.id;
//   const is_confirmed = req.body.is_confirmed;
//   const is_consultation = req.body.is_consultation;
//   const is_rejected = req.body.is_rejected;
//   const last_name = req.body.last_name;
//   const start_date = req.body.start_date;
//   const start_time = req.body.start_time;
//   const username = req.body.username;
//   await update(req, res, 'UPDATE appointments SET description = ?, email = ?, end_date = ?, end_time = ?, first_name = ?, id = ?, is_confirmed = ?, is_consultation = ?, is_rejected = ?, last_name = ?, start_date = ?, start_date = ?, username = ? WHERE appointment_id = ?', appointment_id, description, email, end_date, end_time, first_name, id, is_confirmed, is_consultation, is_rejected, last_name, start_date, start_time, username)
// })

//end appointment functions

// Blog Functions!
app.get("/blogs", async (req, res) => {
  await read(req, res, "SELECT * FROM blogs");
});

app.get("/blogs/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
    await read(req, res, "SELECT * FROM blogs LEFT JOIN comments ON blogs.BlogId = comments.BlogId WHERE blogs.BlogId = ?", BlogId)
});

app.post("/blogs", async (req, res) => {
  await create(req, res, "INSERT INTO blogs SET ?");
});

app.delete("/blogs/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
  await deleteRow(req, res, "DELETE FROM blogs WHERE BlogId = ?", BlogId);
});

app.put("/blogs/:BlogId", async (req, res) => {
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

console.log("hello");
const testPassword = 'hashed_password';
const hashedPassword = bcrypt.hashSync(testPassword, 10);

console.log(hashedPassword);
app.post('/login', (req, res)=> {
  const email = req.body.email;
  const password = req.body.hashed_password;
  console.log("Received email:", email);
  console.log("Received password:", password);


//finds user w this email in db
  connection.query(
    "SELECT * FROM login_app WHERE email = ?",
    [email],
    (err, result) => {
//if err in query, status code & err message returned
      if(err) {
        console.error("Database error:", err);
        res.status(500).send({err: err});
      } else {
//otherwise, checks result length, makes sure theres one matching user. then retrieves stored HASHED pwd. uses compare to make sure theyre the same 
        if (result.length === 1) {
          const storedHashedPassword = result[0].hashed_password;
          bcrypt.compare(password, storedHashedPassword, (bcryptErr, bcryptResult) => {
            console.log("Stored hashed password:", storedHashedPassword);
            console.log("Bcrypt result:", bcryptResult);
            if (bcryptErr || !bcryptResult) {
              res.send({message: "Wrong email/password."});
          } else {
            res.send({message: "Login successful."});
          }
          // connection.end();
        });
        } else {
          res.send({message: "Wrong email/password."});
          // connection.end();
        }
      }
    }
  );
}); 




//registration functions!

app.post("/Profile", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //hashes the password, 10 salt rounds
  bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
    //if there's an error, its console logged
    if (hashErr) {
      console.error(hashErr);
      //error status code
      res.status(500).json({ message: "Error hashing password." });
    } else {
      //store pwd and em in db
      db.query(
        "INSERT INTO login_app (email, password) VALUES (?,?)",
        [email, hashedPassword],
        (dbErr, dbResult) => {
          //db errors
          if (dbErr) {
            console.error(dbErr);
            res.status(500).json({ message: "Error storing user data." });
          } else {
            //yay!! success code
            res.status(201).json({ message: "Registration successful." });
          }
        }
      );
    }
  });
});


// Comment Function
app.get("/comments", async (req, res) => {
  await read(req, res, "SELECT * FROM comments");
});

app.get("/comments/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
    await read(req, res, "SELECT * FROM comments WHERE comments.BlogId = ?", BlogId)
});

app.post("/comments", async (req, res) => {
  await create(req, res, "INSERT INTO comments SET ?");
});

app.delete("/comments/:CommentId", async (req, res) => {
  const { CommentId } = req.params;
  await deleteRow(req, res, "DELETE FROM comments WHERE CommentId = ?", CommentId);
});

app.put("/comments/:CommentId", async (req, res) => {
  const { CommentId } = req.params;
  const Body = req.body.Comment_Body;
  const Author = req.body.Comment_Author;
  await update(
    req,
    res,
    "UPDATE comments SET Comment_Body = ?, Comment_Author = ? WHERE CommentId = ?",
    CommentId,
    Body,
    Author
  );
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
