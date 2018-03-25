/*
    locations
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// locations
const locationSchema = new Schema(

    {
        name: {
            type: String,
            require: true,
            unique: true
        },
        city: {
            type: String,
            required: true
        },
        category: {
            type: String,
            require: true
        },
        days: {
            type: String,
            require: true
        },
        hours: {
            type: String,
            require: true
        }

    },

    {
        timestamps: true
    }

);


var Locations = mongoose.model('Location', locationSchema);

module.exports = Locations;











