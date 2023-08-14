require("dotenv").config();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database,
});

const Update = async (req, res, query, TableId = "", ...changedValues) => {
        connection.query(query,[...changedValues,TableId], (err, data, fields) => {
            if (err) throw err;
            
            res.json({
                data
              })
          })
};

module.exports = Update;