/*
  third route/endpoint => locations & locations/:locId
  
*/


var express = require('express');
var bodyParser = require('body-parser');

//express router instance
var locationRouter = express.Router();

//middleware
locationRouter.use(bodyParser.json());

//mount to root
locationRouter.route('/').
//all
all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();

}).

//get
get((req,res,next) => {
    res.end("Sending all locations avail to you the client");

}).

//post
post((req,res,next) => {
    res.write("Adding a new location: \n");
    res.write("New location name: " + req.body.locname + "\n");
    res.end("Thank you");

}).

//put
put((req,res,next) => {
    res.statusCode = 403;
    res.end("cannot do updates here");


}).

//delete
delete((req,res,next) => {
    res.statusCode = 200;
    res.write("deleting in progress.. \n");
    res.write("all locations have been successfully deleted \n");
    res.end("although not recommended.. too late already - all deleted!");

});




locationRouter.route('/:locId').
//app
all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next();

}).

//get
get((req,res,next) => {
    res.write("location information being loaded.. \n");
    res.write("Location page id: " + req.params.locId);
    res.end("\nthank you.");


}).

//post
post((req,res,next) => {
    res.statusCode = 403;
    res.end("this op is not allowed");


}).

//put
put((req,res,next) => {
    res.write("Updating location..\n");
    res.write("Location id: " + req.params.locId + "\n");
    res.write("Location name: " + req.body.locname);
    res.end("\nlocation been updated");
}).

//delete
delete((req,res,next) => {
    res.write("deleting..\n");
    res.write("deleting location id: " + req.params.locId + "\n");
    res.end("successfully deleted: " + req.body.locname);

});



module.exports = locationRouter;
