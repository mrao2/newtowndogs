const read = require("./SqlFunctions/Read.js");
const create = require("./SqlFunctions/Create.js");
const deleteRow = require("./SqlFunctions/Delete.js");
const update = require("./SqlFunctions/Update.js");
const express = require("express");
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const { promisify } = require("util");
dotenv.config();
const upload = multer();

var mysql = require("mysql");
const e = require("express");
const { connect } = require("http2");

const connection = mysql.createConnection({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database,
});

// Needs the .bind so that the this keyword always refers to the connection variable, as if it were called as connection.query
// There's a chance that query refers to this, and in that case, calling promiseQuery without a bind would result in this being undefined
const promiseQuery = promisify(connection.query).bind(connection);

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

app.post("api/home", async (req, res) => {
  await create(req, res, "INSERT INTO homepage set ?");
});

app.delete("/api/home/:id", async (req, res) => {
  const { id } = req.params;
  await deleteRow(req, res, "DELETE FROM homepage WHERE id = ?", id);
});

// Blog Functions!
app.get("/blogs", async (req, res) => {
  await read(req, res, "SELECT * FROM blogs");
});

app.get("/blogs/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
  await read(
    req,
    res,
    "SELECT * FROM blogs LEFT JOIN comments ON blogs.BlogId = comments.BlogId WHERE blogs.BlogId = ?",
    BlogId
  );
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

//Sign up
app.post("/api/sign-up", async (req, res, next) => {
try {
  //await create(req, res, "INSERT INTO login_app SET ?");
  await connection.query("INSERT INTO login_app SET ?", req.body, function(err, result, fields) {
    if (err) throw err;
    res.json({
        id: result.insertId
      })
  })
  } catch (err) {
  next(err);
  }
}); 

//Fetch profile
app.get("/api/profile/:id", async (req, res) => {
  const { id } = req.params;
    await read(req, res, `SELECT 
    la.id,
    la.username,
    la.hashed_password as "hashedPassword",
    la.email,
    la.first_name as "firstName",
    la.last_name as "lastName",
    la.phone,
    up.id as "userProfileId",
    up.owner_address as "ownerAddress",
    up.owner_city as "ownerCity",
    up.owner_state as "ownerState",
    up.owner_zip as "ownerZip",
    up.dog_name as "dogName",
    up.dog_age as "dogAge",
    up.dog_breed as "dogBreed",
    up.dog_gender as "dogGender",
    up.dog_color as "dogColor",
    up.dog_birthdate as "dogBirthdate",
    up.dog_allergies as "dogAllergies",
    up.dog_weight as "dogWeight",
    up.dog_friendly as "dogFriendly",
    up.amt_meals as "amtMeals",
    up.amt_per_meal as "amtPerMeal",
    up.amt_walks as "amtWalks",
    up.dog_potty_trained as "dogPottyTrained",
    up.dog_fixed as "dogFixed"
    FROM login_app as la LEFT JOIN user_profile as up ON la.id = up.login_app_id WHERE la.id = ?;`, id)
});

//Save profile data
app.put("/api/user/:id", async (req, res) => {

  const { id } = req.params;
  const username = req.body.username;
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName
  const phone = req.body.phone;
  await update(req, res, `INSERT INTO login_app (id, username, email, first_name, last_name, phone)
    VALUES (?, ?, ?, ?, ?, ?) AS new
    ON DUPLICATE KEY UPDATE
        username = new.username,
        email = new.email,
        first_name = new.first_name,
        last_name = new.last_name,
        phone = new.phone;`,
    phone,
    id,
    username,
    email,
    firstName,
    lastName
);
});

app.put("/api/profile/:id", async (req, res) => {
  const { id } = req.params;
  const address = req.body.ownerAddress;
  const city = req.body.ownerCity;
  const state = req.body.ownerState;
  const zip = req.body.ownerZip;
  const dogName = req.body.dogName;
  const dogAge = req.body.dogAge;
  const dogBreed = req.body.dogBreed;
  const dogGender = req.body.dogGender;
  const dogColor = req.body.dogColor;
  const dogBirthday = req.body.dogBirthday;
  const dogAllergies = req.body.dogAllergies;
  const dogWeight = req.body.dogWeight;
  const dogFriendly = req.body.dogFriendly;
  const amtMeals = req.body.amtMeals;
  const amtWalks = req.body.amtWalks;
  const amtPerMeal = req.body.amtPerMeal;
  const dogPottyTrained = req.body.dogPottyTrained;
  const dogFixed = req.body.dogFixed;
  await update(req, res, `INSERT INTO user_profile (login_app_id, owner_address, owner_city, owner_state, owner_zip, dog_name, dog_age, dog_breed, 
    dog_gender, dog_color, dog_birthdate, dog_allergies, dog_weight, dog_friendly, amt_walks, amt_meals, amt_per_meal, dog_potty_trained, dog_fixed)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) AS new
  ON DUPLICATE KEY UPDATE
      owner_address = new.owner_address,
      owner_city = new.owner_city,
      owner_state = new.owner_state,
      owner_zip = new.owner_zip,
      dog_name = new.dog_name,
      dog_age = new.dog_age,
      dog_breed = new.dog_breed,
      dog_gender = new.dog_gender,
      dog_color =  new.dog_color,
      dog_birthdate = new.dog_birthdate,
      dog_allergies = new.dog_allergies,
      dog_weight = new.dog_weight,
      dog_friendly = new.dog_friendly,
      amt_meals = new.amt_meals,
      amt_per_meal = new.amt_per_meal,
      amt_walks = new.amt_walks,
      dog_potty_trained = new.dog_potty_trained,
      dog_fixed = new.dog_fixed;`,
  dogFixed,
  id,
  address,
  city,
  state,
  zip,
  dogName,
  dogAge,
  dogBreed,
  dogGender,
  dogColor,
  dogBirthday,
  dogAllergies,
  dogWeight,
  dogFriendly,
  amtWalks,
  amtMeals,
  amtPerMeal,
  dogPottyTrained
);
});
  
//login functions!!
console.log("hello");
app.post("/login", (req, res) => {
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
  //finds user w this email in db
  connection.query(
    "SELECT * FROM login_app WHERE email = ?",
    [email],
    (err, result) => {
      //if err in query, status code & err message returned
      if (err) {
        console.error("Database error:", err);
        res.status(500).send({ err: err });
      } else {
        //otherwise, checks result length, makes sure theres one matching user. then retrieves stored HASHED pwd. uses compare to make sure theyre the same
        if (result.length === 1) {
          const storedHashedPassword = result[0].password;
          bcrypt.compare(
            password,
            storedHashedPassword,
            (bcryptErr, bcryptResult) => {
              if (bcryptErr || !bcryptResult) {
                res.send({ message: "Wrong email/password." });
              } else {
                res.send({ message: "Login successful." });
              }
              connection.end();
            }
          );
        } else {
          res.send({ message: "Wrong email/password." });
          connection.end();
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
  await read(
    req,
    res,
    "SELECT * FROM comments WHERE comments.BlogId = ?",
    BlogId
  );
});

app.post("/comments", async (req, res) => {
  await create(req, res, "INSERT INTO comments SET ?");
});

app.delete("/comments/:CommentId", async (req, res) => {
  const { CommentId } = req.params;
  await deleteRow(
    req,
    res,
    "DELETE FROM comments WHERE CommentId = ?",
    CommentId
  );
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

const contentTypes = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  bmp: "image/bmp",
  heic: "image/heic",
  webp: "image/webp",
};

app.post("/images", upload.single("image"), async (req, res, next) => {
  const extension = req.file?.originalname?.split(".").pop();
  if (!req.file?.buffer) {
    res.status(400);
    return next("No file provided");
  } else if (!contentTypes[extension]) {
    res.status(400);
    return next("File type not allowed");
  }
  const image = {
    BlogId: req.body.BlogId,
    content_type: contentTypes[extension],
    Image_Data: req.file.buffer,
  };

  connection.query(
    "INSERT INTO images SET ?",
    image,
    function (err, data, fields) {
      if (err) throw err;
      res.status(201).send();
    }
  );
});

app.get("/images/:BlogId", async (req, res, next) => {
  const image = await connection.query(
    "SELECT * FROM images WHERE BlogId = ?",
    req.params.BlogId,
    (err, data, fields) => {
      if (!data[0]) {
        res.status(404);
        return next("Not found");
      }
      res.setHeader("Content-Type", data[0].Content_Type);
      res.send(data[0].Image_Data);
    }
  );
});

app.put("/images/:BlogId", upload.single("image"), async (req, res, next) => {
  const extension = req.file?.originalname?.split(".").pop();
  if (!req.file?.buffer) {
    res.status(400);
    return next("No file provided");
  } else if (!contentTypes[extension]) {
    res.status(400);
    return next("File type not allowed");
  }
  const updatedImage = {
    BlogId: req.body.BlogId,
    content_type: contentTypes[extension],
    Image_Data: req.file.buffer,
  };

  await promiseQuery("DELETE FROM images WHERE BlogId = ?", [
    updatedImage.BlogId,
  ]);

  await promiseQuery("INSERT INTO images SET ?", [
    updatedImage
  ]);

  res.status(201).send();
});

app.delete("/images/:BlogId", async (req, res) => {
  const { BlogId } = req.params;
  await deleteRow(
    req,
    res,
    "DELETE FROM images WHERE BlogId = ?",
    BlogId
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
