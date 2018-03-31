/*
    dishes w/comments(subdocument)
*/
const mongoose = require('mongoose');
// req currency
var currency = require('mongoose-currency').loadType(mongoose);
currency = mongoose.Types.Currency;

const Schema = mongoose.Schema;

//dish comments (subdoc in dishes)
const commentSchema = new Schema(

    {
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true
        },

        comment: {
            type: String,
            required: true
        },

        author: {
            type: String,
            required: true
        }
    },

    {
        timestamp: true
    }

);


const dishSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            require: true
        },
        category: {
            type: String,
            require: true
        },
        label: {
            type: String,
            require: false
        },
        price: {
            type: currency,
            require: true,
            min: 0
        },
        feature: {
            type: Boolean,
            default: false
        },

        comments: [commentSchema]
    },

    {
        usePushEach: true
    },

    {
        timestamps: true
    }
);

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;
