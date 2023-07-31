require("dotenv").config();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database,
});

const Update = async (req, res, query, TableId = "", changedValue1, changedValue2, changedValue3) => {
    console.log(changedValue1)
        connection.query(query,[changedValue1,changedValue2,changedValue3,TableId], function(err, data, fields) {
            if (err) throw err;
            res.json({
                data
              })
          })
};

module.exports = Update;