//requiring our express for our server
const express = require('express');

//creating our routes
const router = express.Router();
const burger = require("../models/burger.js");

//our get routes.
router.get("/", function(req,res){
    res.redirect('/burgers');
});
//get route that grabs all our burger values from burger_db
router.get("/burgers", function(req,res){
    burger.all(function(burgerData){
        res.render("index",{burger_data: burgerData});
    });
});

//our post routes that redirects to to the create a burger page
router.post("/burgers/create", function(req,res){

    //adding the created burger into the body of the page. 
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    });
});

//put route that updates our burgers with user entries.
router.put("/burgers/:id", function(req, res){
    burger.update(req.params.id, function(result){
        //console logging result to see data 
        console.log(result);
        //sends back a response and lets page reload
        res.sendStatus(200);
    });
});

module.exports = router; 