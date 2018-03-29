/*
    promotions
*/

const mongoose = require('mongoose');
//schema
const Schema = mongoose.Schema;

const promotionSchema = new Schema(
    {
        promo_name: {
            type: String,
            required: true,
            unique: true
        },
        promo_desc: {
            type: String,
            required: true
        },
        promo_type: {
            type: String,
            required: true
        },
        start_time: {
            type: String,
            required: true
        },
        end_time: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true,  
        }

    },

    {
        timestamps: true
    }

);

var Promotions = mongoose.model('Promotion', promotionSchema);

module.exports = Promotions;
