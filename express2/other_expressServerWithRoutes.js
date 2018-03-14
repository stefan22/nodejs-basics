/*
  REST API Endpoint sample using dishes I ran with Postman
  ALL,GET,POST,PUT,DELETE for /dishes page and dishes/:dishID page
  
  //json data sample i tested with postman
  {
	  "name":"Sicilian Pizza",
	  "description":"A large pizza with pomodori, mozarella cheese, tomato sauce, hand-made and cooked to perfection"
  }
  
  
*/





const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//hostname & port
const host = 'localhost';
const port = 3023;

//express instance
const app = express();

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//dishes

//req.all handles all methods first at endpoint /dishes via callback
app.all('/dishes', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

//next passes res.settings to get at same endpoint
app.get('/dishes', (req,res,next) => {
    //ends handling of get req
    res.end("Dishes information will be send to you ASAP!");
});

//req.all got it first,then code here exec
app.post('/dishes', (req,res,next) => {
    //here extracting info from inside req.body (json) 
    res.end('Dish to be added: ' + req.body.name + ' About dish: ' + req.body.description);

    /*
     //note:post normally carry info in req.body (of json type)
    when using bodyParser, what happens is the body of the incoming request
    will be parsed and then added into the req obj as req.body.
    So req.body will give you access to whatever is inside the body of
    the message.
    */
    
});

//put method dummy
app.put('/dishes', (req,res,next) => {
    //makes no sense put here, so dont do it!
    res.statusCode = 403;
    res.end('PUT not allowed, capisci!');

});

//danger
app.delete('/dishes', (req,res,next) => {
    res.end('Deleting all Dishes');

});


/*
    dishes/:dishID endpoint
*/

//get
app.get('/dishes/:dishId', (req,res,next) => {
    //ends handling of get req
    res.end("Dish: " + req.params.dishId + " will be sent to you.");
});

//post -irrelevant (not trying to add a new dish)
app.post('/dishes/:dishId', (req,res,next) => {
    //here extracting info from inside req.body (json) 
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/' + req.params.dishId);

    
});

//put upddate
app.put('/dishes/:dishId', (req,res,next) => {
    //makes no sense put here, so dont do it!
    res.write('Updating dish: ' + req.params.dishId +'\n');
    res.end("Will update dish: " + req.body.name + " and its details: \n" + req.body.description);

});

//delete
app.delete('/dishes/:dishId', (req,res,next) => {
    res.end('Deleting dish: ' + req.params.dishId);

});














//serving static html files from
app.use(express.static(__dirname + '/public'));

//handle res
app.use((req,res,next) => {
    console.info(`\nRequest method: ${req.method}\nRequest Url: ${req.url}\n-----------------------`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<!DOCTYPE html><html><body><h1>Node Express Server</h1></body></html>');
});

//server
const server = http.createServer(app);

//listen
server.listen(port,host, () => {
    console.log(`Server running at http://${host}:${port}\n\nAll Requests:`);
});
