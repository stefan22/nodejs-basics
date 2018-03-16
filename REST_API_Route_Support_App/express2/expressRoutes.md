# Routes

Application Routes:

- app.all specifies an operation that needs to be done on all verbs
  (whatever specified in the function for app.all will be applied to all incoming requests)
  `app.all` => `/dishes` => function(req,res,next) {...}); 

- app.get specifies what needs to be done for GET requests
  `app.get` => `/dishes` => function(req,res,next) {...});

- app.post what needs to be done for POST
  `app.post` => `/dishes` => function(req,res,next) {...});

- app.put what needs to be done for PUT
  `app.put` => `/dishes` => function(req,res,next) {...});

- app.delete what needs to be done for DELETE
  `app.delete` => `/dishes` => function(req,res,next) {...});


## express supports defining the endpoints with PARAMETERS (routing w/parameters)

- example:

```
    app.get('/dishes/:dishID', (req,res,next) => {
        res.end("Dish details: " + req.params.dishID + " you requested");
    });

```

## when you send PUT,POST from client to server

- you enclosed data within the body of the message sent to the server
- `body-parser` middleware helps parse the body of the message

ex:

```
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());   //parse the JSON in the body
```

- `body-parser` parses the body of the message and populates the `req.body` property


# express router
- express router generates a mini-express application, and within that mini app you
  can deal with one particular REST API endpoint in more detail.

## express application with multiple REST API endpoints
- recommended to subdivide the code into multiple modules, in order to construct the
  overall express application


- example of express router 

```
  (define a dishRouter as express.Router)

  var dishRouter = express.Router();
  dishRouter.use(bodyParser.json());

  //then allows dishRouter to handle endpoints
  dishRouter.route('/');

      all(..);
      get(..);

  An advantage of using express router:
   * if you do, `router.Route` and then specify the endpoint
   * then that endpoint will be applied to all the methods
   * GET,POST,DELETE,POST can all be chained together into the route


```
