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


















