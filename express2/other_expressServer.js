/*
  - server listen => if i place, for example hostname before port, then i'll get an error: port is open or being used.
                     only first parameter (port) is required plus a callback fn.
 
 - useful methods for req => headers,body,url, method
 - useful methods for res => setHeader,status,write,end
 
 path resolve => converts a relative path into an absolute
 path extname => checks the extension name of a file
 exists method => checks whether a file exists
 
 if i wanna create a javascript file that utilizes js modular patterns without having to go through the process of 
 creating modules with private/public functions, and utilizes require/exports set a package.json file
 
 static server in express => to set a public folder for static files
 create server: require express, create an instance and pass it using the http module createServer method
 server.listen port => at which point your server starts running
 
 add functionality to express through middleware -ex:
    morgan for logs
    body-parser parsing json
    (require/use and call next())
                 
other:
postman,nodemon

*/


const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

//hostname & port
const hostname = 'localhost';
const port = 3023;
//express instance
const app = express();

app.use(morgan('dev'));

//serving static html files from
app.use(express.static(__dirname + '/public'));


app.use((req,res,next) => {
    console.info(`\nRequest method: ${req.method}\nRequest Url: ${req.url}\n-----------------------`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<!Doctype html><html><body><h1>Node Express Server</h1></body></html>');
});

const server = http.createServer(app);


server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}\n\nAll Requests:`);
});
