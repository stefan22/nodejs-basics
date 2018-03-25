## REST API with Express, MongoDB and Mongoose:

Full-fledged REST API server with Express, MongoDB and Mongoose schemas and models (end to end implementation)

> a GET request coming from the client, means that the client wants to retrieve data
> from the server and in order to get this data, the request will have to be handle 
> by the Express Server; which once the processing is done, performs a query operation
> on the database. Then the retrieve data will be sent back to the server as a reply
> message.
> POST request does the same thing. It brings some data into the service, that will
> need to first be processed by the Express server. Information needed to be stored in 
> database then retrieve from the body of incoming POST request and a corresponding 
> create request needs to be initiated from the Express server to the Mongo database.
> This create request carries the information extracted from the body of original POST
> request that is going to be place in the database as a new document inside of a particular
> collection.


### Express Router + MongoDB + Mongoose(ODM)
- operations to be performed in database have to be initiated in router endpoint


```
    Router().route('/uri')                      Mongoose Scheema + MongoDB
    .get(
        ------------------------------->        URI.find({},
                                                 
    );                                          );


    .post(                                     
        -------------------------------->       URI.create(

    );                                          );


```


## mongodb & mongoose 
(this is what i was looking for)

- as far as which one to use:
    + it comes down to what you're trying to do,
    + choice is simple i think, mongodb is just a native node drive, while mongoose is the object modeling tool.
    + if you want to use a schema model, then gotta use mongoose...case closed. :)


### mongodb driver

   + allows the node applicaton to communicate with a mongodb server    
   + as well as to store and retrieve documents from the mongodb server.
   + `mongodb` driver also allows you to create collections within a database, 
   + add documents to the collections and perform operations.


### mongoose node module
   - enables you to define a schema and a structure for your documents stored in MongoDB database. 
   
   - mongoose ODM (object document mapping/ or object data model) 
   
      + use mongoose if you need to add structure to your documents through a schema.
      + schema defines the structure of the documents.
      + schema defines all the fields, type of fields, and features for validation.
      + schema types: string , date, boolean, array ...
















