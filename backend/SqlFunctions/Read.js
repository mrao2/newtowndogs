var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "Dalton-Laptop",
  user: "dogtownuser",
  password: "admin",
  database: "blogs",
});

const Read = (BlogId = "") => {
  if (BlogId === "") {
    return new Promise((resolve, reject) => {
      const selectQuery = "SELECT * FROM blogs";
      connection.query(selectQuery, (err, results) => {
        if (err) {
          console.error("Error reading data: " + err.stack);
          reject(err);
          return;
        }

        console.log("Retrieved data:");
        resolve(results);
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      const selectQuery = "SELECT * FROM blogs WHERE BlogId = ?";
      connection.query(selectQuery, [BlogId], (err, results) => {
        if (err) {
          console.error("Error fetching data:", err.stack);
          reject(err);
          return;
        } else {
          if (results.length === 0) {
            console.error("Blog Not Found");
            reject("Blog Not Found");
            return;
          } else {
            console.log("Retrieved data:");
            resolve(results);
          }
        }
      });
    });
  }
};

module.exports = Read;
