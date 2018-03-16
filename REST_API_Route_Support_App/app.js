const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const locationRouter = require('./routes/locationRouter');

//hostname & port
const host = 'localhost';
const port = 3023;

//express instance
const app = express();

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/locations', locationRouter);





//serving static html files from
app.use(express.static(__dirname + '/public'));

//handle res
app.use((req,res,next) => {
    console.info(`\nRequest method: ${req.method}\nRequest Url: ${req.url}\n-----------------------`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<!DOCTYPE html><html><body><h1>Node Express Server</h1><h2>Home page</h2></body></html>');
});

//server
const server = http.createServer(app);

//listen
server.listen(port,host, () => {
    console.log(`Server running at http://${host}:${port}\n\nAll Requests:`);
});