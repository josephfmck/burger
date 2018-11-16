var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');


// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {    //route to display all burgers
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data           //set data from burgers table to handlebars object
      };
      console.log(hbsObject);
      res.render('index', hbsObject);  
    });
  });
  
router.post("/", function (req, res) {    //route to insert a new burger
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {      //route to update burger using ID
    var id = req.params.id;

    console.log("id", id);

    burger.updateOne(id, function () {
        res.redirect("/");
    });
  });

// Export routes for server.js to use.
module.exports = router;