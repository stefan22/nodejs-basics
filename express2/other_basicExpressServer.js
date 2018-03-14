const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

//hostname & port
const hostname = 'localhost';
const port = 3000;
//express instance
const app = express();

app.use((req,res,next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Node Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:port`);
});
