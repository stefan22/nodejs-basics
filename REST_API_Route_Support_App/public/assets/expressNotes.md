# nodexpress app

### notes

1. express middleware
   - extends the functionality of express
     ex: morgan for server-side information log
  
```
     var app = express();//instance
     var morgan = require('morgan'); //require middleware
     app.use('morgan'); //use middleware
```

2. express server 
  - more under `express2`

3. routes

  - reg application routes:

    ex: (without express route method) -it includes `endpoints`

```
    - app.all specifies an operation that needs to be done on all verbs
      + add main header stuff here, and use next to have method handle request

       `app.all` => `/dishes` => function(req,res,next) {...}); 

      + app.get specifies what needs to be done for GET requests
       `app.get` => `/dishes` => function(req,res,next) {...});

      + app.post what needs to be done for POST
       `app.post` => `/dishes` => function(req,res,next) {...});

      + app.put what needs to be done for PUT
       `app.put` => `/dishes` => function(req,res,next) {...});

      + app.delete what needs to be done for DELETE
       `app.delete` => `/dishes` => function(req,res,next) {...});
```


  - endpoints with `parameters` (routing w/parameters)       
    ex:

```
      * app.get('/dishes/:dishID', (req,res,next) => {
            res.end("Dish details: " + req.params.dishID + " you requested");
        });

      * PUT,POST send data within body of message
      * body-parser parses the body of the message and populates the `req.body`   
        property

```

4.  express router
    - generates routes per endpoint 
    - multiple REST API endpoints
      + also in `express2`
      + postman to test each methods on each endpoint


5.  tech
      - node `express` server
      - middleware: `body-parser` & `morgan`
      - templating engine: `EJS`, `pug` or `Mustache`
      - database: `MongoDB`
      - sidekick tools: `postman` & `nodemon`

6.  express generator
      - quick scaffolding tool to generate an Express app skeleton
      - install
        + install express-generator globally first
        + then, express <appName>
        + options avail
        + it generates a folder under the current folder so cd to folder and install modules
        + some middleware included        



      ex: (generated application)
```


        |__ app.js    –––> main entrance -app starter point
        |
        |__ bin
        |  |__ www
        |  
        |__ package.json  ––––––> dependencies details
        |
        |__ public (images,styles,js)    –––––––––> static resources
        |
        |__ routes (index.js,user.js)    –––––––––> REST API routes (app routes)
        |
        |__ views (error.jade,index.jade,layout.jade)  ––––> templating engine templates
        

```





























