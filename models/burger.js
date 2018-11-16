//importing the ORM to create the functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    insertOne: function (burger, cb) {      //adds to database with burger value
        orm.insertOne(burger, function (res) {
            cb(res);
        });
    },
    updateOne: function (id, cb) {          //updates with selected burger's ID
        orm.updateOne([id], function (res) {
            cb(res);
        });
    }
};
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;