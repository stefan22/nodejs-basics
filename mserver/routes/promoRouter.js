//promo router
const express = require('express');
const bodyParser = require('body-parser');

//router instance
const promoRouter = express.Router();

//middleware
promoRouter.use(bodyParser.json());

//mount route to root
promoRouter.route('/').
//all
all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
}).

//get
get((req,res,next) => {
    //res.end("All promotions will be send to you shortly");
    res.render('promotions');

}).

//post
post((req,res,next) => {
    res.end("Promotion to be added, name: " + req.body.name + " and discount: " + req.body.discount);

}).

//put
put((req,res,next) => {//not having one
    res.setStatus = 403;  //forbidden
    res.end("No put, no update happening here, so dont do it again!");

}).

//delete
delete((req,res,next) => {
    res.write("Are you sure, because discount is: " + req.body.discount);
    res.end("Deleting promotion name: " + req.body.name);

});


/*
    promoId
*/

promoRouter.route('/:promoId').

//all
all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
}).

//get
get((req,res,next) => {
    res.write("Promotion page id is: " + req.params.promoId + "\n");
    res.end();

}).

//post
post((req,res,next) => {
    res.statusCode = 403;
    res.write("In this page: http://localhost:3023//promotions/ " + req.params.promoId + " you: \n");
    res.end("CANNOT do that - soorry");

}).

//put
put((req,res,next) => {
    res.end("no updates in this page allowed. Ref: " + req.params.promoId);

}).

//delete
delete((req,res,next) => {
    res.statusCode = 200;
    res.write("Deleting in progress.. \n");
    res.write("Promotion name: " + req.body.name + "\n");
    res.write("Promtion discount: " + req.body.discount + "\n");
    res.end(".. is now gone");

});




module.exports = promoRouter;
