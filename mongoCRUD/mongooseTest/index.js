/*
    dishes with subdoc comments
      
*/

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Dishes  = require('./models/dishes');

const url = 'mongodb://localhost:27017/testa';

const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('connected to server \n\n------------------------');
    Dishes.create({
        name: "lasagna",
        description: "another dish with lots of cheese"
    })
    .then((dish) => {
        console.log('\n\dish created: \n\n' + dish);
        // once updated return dish
        return Dishes.findByIdAndUpdate(dish._id, {
            $set: { description: "update test"}
        },{ 
            new: true 
        
        }).exec();
    })
    .then((dish) => {
        console.log('\nnew updated dish: \n\n' + dish);
        //push a comment
        dish.comments.push({
            rating: 5,
            comment: "Damn lasagna was cold!",
            author: "Joe Pesci"
        });
        //return dish
        return dish.comments;


    })
    .then((dish) => {
        //show comments
        console.log('\ndish has a comment: \n\n' + dish);
        //drop collection
        return Dishes.db.collection('dishes').drop();
    })
    .then(() => {
        //close database
        return Dishes.db.close();

    })
    .catch((err) => {
        console.log(err);
    });


}); // connected to db
