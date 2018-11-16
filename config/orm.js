// Import MySQL connection.
var connection = require("../config/connection.js");





// Object for all SQL statement functions.
var orm = {
  selectAll: function (cb) {
    var queryString = "SELECT * FROM burgers";              //select all data from burgers
    connection.query(queryString, function (err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
},

insertOne: function (burger, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";   //adds new burger with value of burger input entered
    connection.query(queryString, [burger], function (err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
},

updateOne: function (id, cb) {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

    connection.query(queryString, [id], function (err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
}
};



// Export the orm object for the model (burger.js).
module.exports = orm;