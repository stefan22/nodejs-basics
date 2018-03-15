/*
  Removed routes from app.js and recreate them with express router (file below) - server still working :)

  Process:
  removed all calls to /dishes from app.js and chained them all here together. A lot easier/faster.
    + place them on a new routes folder and using endpoint as new filename (dishRouter.js)
    + then set file public w/exports, and require the file from app.js lastly..
    + added this to app.js:
      app.use('/dishes, diskRouter)
    + theEnd.

*/



const express = require('express');
const bodyParser = require('body-parser');

//creates express router instance
const dishRouter = express.Router();

//middleware
dishRouter.use(bodyParser.json());

//mount to root endpoint using route - all method implementations, endpoints grouped together
dishRouter.route('/').
all((req,res,next) => {//all endpoints/methods-dishes
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //next passes res.settings to get at same endpoint
    next();
})
.get((req,res,next) => {
    //ends handling of get req
    res.end("Dishes information will be send to you ASAP!");
})
.post((req,res,next) => {//req.all got it first,then code here exec
    //here extracting info from inside req.body (json) 
    res.end('Dish to be added: ' + req.body.name + ' About dish: ' + req.body.description);
    
})
.put((req,res,next) => {//put method dummy
    //makes no sense put here, so dont do it!
    res.statusCode = 403;
    res.end('PUT not allowed, capisci!');

})
.delete((req,res,next) => {//danger
    res.end('Deleting all Dishes');

});

//exports
module.exports = dishRouter;

