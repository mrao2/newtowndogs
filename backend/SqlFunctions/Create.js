require("dotenv").config();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database,
});

const Create = async (req, res, query) => {
        connection.query(query, req.body, function(err, result, fields) {
            if (err) throw err;
            res.json({
                id: result.insertId
              })
          })
};

module.exports = Create;
