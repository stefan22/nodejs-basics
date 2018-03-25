//location router
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//locations model
const Locations = require('../models/locations');

//express router instance
const locationRouter = express.Router();

//middleware
locationRouter.use(bodyParser.json());

//mount to root
locationRouter.route('/').
all((req,res,next) => {
    //res.statusCode = 200;
    //res.setHeader("Content-Type", "text/html");
    next();

}).
get((req,res,next) => {
    // all locations
    Locations.find({}).
        then((locations) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(locations);
        }).
        catch((err) => {
            console.log(err);
            next(err);
        });

}).

//post
post((req,res,next) => {
    Locations.create(req.body).
        then((location) => {
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json(location);
        }).
        catch((err) => {
            console.log(err);
            next(err);
        });

}).

//put
put((req,res,next) => {
    res.statusCode = 403;
    res.end("update? forget about it!");


}).

//delete
delete((req,res,next) => {
    // remove all location
    Locations.remove({}).
        then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json(resp);
        }).
        catch((err) => {
            console.log(err);
            next(err);
        });
});




locationRouter.route('/:locId').
//app
all((req,res,next) => {
    //res.statusCode = 200;
    //res.setHeader("Content-Type","text/plain");
    next();

}).

//get
get((req,res,next) => {
    Locations.findById(req.params.locId)
        .then((locId) => {
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json");
            res.json(locId);
        })
        .catch((err) => {
            console.log(err);
            next(err);
        });
}).

//post
post((req,res,next) => {
    res.statusCode = 403;
    res.end("post what? forget about it!");


}).

//put
put((req,res,next) => {
    Locations.findByIdAndUpdate(req.params.locId, {
        $set: req.body
    }, {new: true })
    .then((location) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(location);
    }).
    catch((err) => {
        console.log(err);
        next(err);
    });
    
}).

//delete
delete((req,res,next) => {
    Locations.findByIdAndRemove(req.params.locId).
    then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp)
    }).
    catch((err) => {
        console.log(err);
        next(err);
    })
});



module.exports = locationRouter;
