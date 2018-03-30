//dish router
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// dishes model
const Dishes = require('../models/dishes');

//creates express router instance
const dishRouter = express.Router();

//middleware
dishRouter.use(bodyParser.json());

//mount to root endpoint
dishRouter.route('/').
    all((req, res, next) => {//all endpoints/methods-dishes
        //res.statusCode = 200;
        //res.setHeader('Content-Type', 'text/html');
        //next passes res.settings to get at same endpoint
        next();
    })
    .get((req, res, next) => {
        //res.render('dishes');   // view file
        //all dishes
        Dishes.find({}).
            then((dishes) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(dishes);
            }).
            catch((err) => {
                console.log(err);
                next(err);
            });
    })
    .post((req, res, next) => {//req.all got it first,then code here exec
        //res.end('Dish to be added: ' + req.body.name);
        Dishes.create(req.body)
            .then((dish) => {
                console.log('dish created: ', dish);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });

    })
    .put((req, res, next) => {//put method dummy
        //makes no sense put here, so dont do it!
        res.statusCode = 403;
        res.end('PUT not allowed, capisci!');

    })
    .delete((req, res, next) => {//danger
        // remove all
        Dishes.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            })
            .catch((err) => {
                next(err);
            })

    });




/*
    dishes/:dishID endpoint
*/

dishRouter.route('/:dishId').
    get((req, res, next) => { //get
        //res.end("Dish Req: " + req.params.dishId + " will be sent to you.");
        Dishes.findById(req.params.dishId)
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);
            })
            .catch((err) => {
                next(err);
            });
       

    }).
    post((req, res, next) => {//post -irrelevant here
        //here extracting info from inside req.body (json) 
        res.statusCode = 403;
        res.end('POST operation not supported on /dishes/' + req.params.dishId);

    }).
    put((req, res, next) => {//put upddate
        //res.write('Updating dish: ' + req.params.dishId + '\n');
        //res.end("update : " + req.body.name + " details \n" + req.body.description)
        Dishes.findByIdAndUpdate(req.params.dishId, {   
            $set: req.body
        }, {new: true})
        .then((dish) => {
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json(dish);
        })
        .catch((err) => {
            next(err);
        });


    }).
    delete((req, res, next) => {//delete
        //res.end('Deleting dish: ' + req.params.dishId);
        Dishes.findByIdAndRemove(req.params.dishId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            })
            .catch((err) => {
                next(err);
            });

    });



/*
     /:dishId/comments endpoint
*/

    
    dishRouter.route('/:dishId/comments').
    all((req, res, next) => {
        next();
    })
    .get((req, res, next) => {
       Dishes.findById(req.params.dishId).
        then((dish) => {
            if(dish !== null) {
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.json(dish.comments);  
            }
            else {
                res.statusCode = 404;
                err = new Error('Dish ' + req.params.body + ' not found');
                return next(err);
            }
        }).
        catch((err) => {
            console.log(err);
            next(err);
        });        


    })
    .post((req, res, next) => {
        //find dish
        Dishes.findById(req.params.dishId).
           then((dish) => {
               if(dish !== null) {
                   //push req body
                   dish.comments.push(req.body);
                   dish.save().
                    then((dish) => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        // back updated dish
                        res.json(dish);
                    },
                    (err) => {
                        console.log(req.params.dishId);
                        console.log(req.body);
                        next(err);
                    });   
               }//if
               else {
                   err = new Error('Dish ' + req.params.dishId);
                   err.status = 404;
                   return next(err);
               }
           }).
           catch((err) => {
               console.log(err);
               next(err);
           });

    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('oh no forget about it!');

    })
    .delete((req, res, next) => {//danger
        // remove all comments
        Dish.findById(req.params.dishId).
            then((dish ) => {
                if(dish !== null) {
                    //remove comments on dish
                    for(var i=0; i < dish.comments.length; i++) {
                        //accessing subdocument
                       //dish.comments.id(dish.comments[i]._id).remove();
                    }
                    dish.save().
                    then((dish) => {
                        res.setStatus = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(dish); //updated dish
                    });   
                    
                }//if
                else {
                    res.setStatus = 404;
                    res.write('not found..forget about it!')
                    //back to app & run 404
                    return next(err);
                }
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    });


/*
     /:dishId/comments/commentId      endpoint
*/
    
    dishRouter.route('/:dishId/comments/:commentId').
    all((req, res, next) => {
        next();
    })
    .get((req, res, next) => {
        Dishes.findById(req.params.dishId).
            then((dish) => {
                if(dish !== null && dish.comments.id(req.params.commentId)) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type','application/json');
                    res.json(dish.comments.id(req.params.comm));
                }//if
                else if(dish == null) {
                    err = new Error("Dish " + req.params.dishId + " doesn't exist" );
                    err.status = 404;
                    return next(err);
                }
                else {
                    err = new Error("Comment " + req.params.commentId + " not exists");
                    err.status = 404;
                    return next(err);
                }
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("Not supported, forget about it");

    })
    .put((req, res, next) => {
        Dishes.findById(req.params.dishId).
            then((dish) => {
                //if dish&comment exist
                if(dish !== null && dish.comments.id(req.params.commentId)) {
                    //allowed to change rating
                    if(req.body.rating) {
                        //updated rating
                        dish.comments.id(req.params.commentId).rating = req.body.rating;
                    }
                    //allowed comment to be updated 
                    if(req.body.comment) {
                        //updated comment
                        dish.comments.id(req.params.commentId).rating = req.body.comment;
                    }
                    dish.save()
                    .then((dish) => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type','application/json');
                        res.json(dish);

                    })
                    
                }//if
                else if(dish == null) {
                    err = new Error("Dish " + req.params.dishId + " doesn't exist" );
                    err.status = 404;
                    return next(err);
                }
                else {
                    err = new Error("Comment " + req.params.commentId + " not exists");
                    err.status = 404;
                    return next(err);
                }
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });

    })
    .delete((req, res, next) => {
        // remove a comment
        Dish.findById(req.params.dishId).
            then((dish ) => {
                if(dish !== null && dish.comments.id(req.params.commentId) !== null) {
                    dish.comments.id(req.params.commentId).remove();
                    dish.save()
                    .then((dish) => {
                        res.setStatus = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(dish); //dish updated no comment
                    });   
                    
                }//if
                else if(dish == null) {
                    err = new Error("Dish " + req.params.dishId + " doesn't exist" );
                    err.status = 404;
                    return next(err);
                }
                else {
                    err = new Error("Comment " + req.params.commentId + " not exists");
                    err.status = 404;
                    return next(err);
                }
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });

    });

    



//exports
module.exports = dishRouter;
