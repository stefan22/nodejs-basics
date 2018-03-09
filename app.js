var express = require("express");

const app = express();
const PORT = 3001;

app.get('/', (req,res) =>
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta lang="en">
            <meta charset="utf-8">
            <title>home page</title>
            <meta name="description" content="home page">
            <meta name="author" content="sl">
            <link rel="stylesheet" type="text/css" href="public/css/main.css">  
        </head>
        <body>
            <h2>home page</h2>
            <h3>public directory ${req.method} request,  port: ${PORT}</h3>
        </body>
        </html>        
    `)
);

app.listen(PORT, () =>
    console.log(`Express Node server listening on port ${PORT}`)
);