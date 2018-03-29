//promo router
const express = require('express');
const bodyParser = require('body-parser');
//mongoose
const mongoose = require('mongoose');
//promo model
const Promotions = require('../models/promotions');

//router instance
const promotionRouter = express.Router();

//middleware
promotionRouter.use(bodyParser.json());

//mount route to root
promotionRouter.route('/').
    all((req,res,next) => {
        //res.statusCode = 200;
        //res.setHeader("Content-Type", "text/html");
        next();

    }).
    //get
    get((req,res,next) => {
        Promotions.find({}).
            then((promos) => {
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.json(promos);
            }).
            catch((err) => {
                console.log(err);
                next(err);
            });
    }).     

    //post
    post((req,res,next) => {
        Promotions.create(req.body)
            .then((promotion) => {
                console.log('promotion created: ' + promotion);
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.json(promotion);
            }).
            catch((err) => {
                console.log(err);
                next(err);
            });

    }).  

    //put
    put((req,res,next) => {//not having one
        res.setStatus = 403;  //forbidden
        res.end("forget about it");

    }).

    //delete
    delete((req,res,next) => {
    Promotions.find({}).
        then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.write('Now you\'ve finally done it - everything\'s been deleted.');
            res.json(resp);
        }).
        catch((err) => {
            console.log(err);
            next(err);
        });
    });


    /*
        promoId
    */

    promotionRouter.route('/:promotionId').

    //all
    all((req,res,next) => {
        //res.statusCode = 200;
        //sres.setHeader('Content-Type','text/plain');
        next();
    }).

    //get
    get((req,res,next) => {
        Promotions.findById(req.params.promotionId).
            then((promotionId) => {
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.json(promotionId);
            }).
            catch((err) => {
                console.log(err);
                next(err);
            });
    }).

    //post
    post((req,res,next) => {
        res.statusCode = 403;
        res.write('forget about it');
        res.end('no promomtions for you!');

    }).

    //put
    put((req,res,next) => {
        Promotions.findByIdAndUpdate(req.params.promotionId, {
            $set: req.body
        }, {new: true}).
        then((promo) => {
            res.statuscode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promo);
        }).    
        catch((err) => {
            console.log(err);
            next(err);
        });
    }).

    //delete
    delete((req,res,next) => {
        Promotions.findByIdAndRemove(req.params.promotionId).
            then((resp) => {
                res.setStatus = 200;
                res.setHeader('Content-Type','application/json');
                res.json(resp);
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    });




module.exports = promotionRouter;
