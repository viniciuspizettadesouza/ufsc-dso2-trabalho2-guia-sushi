const { Schema, model } = require('mongoose');

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    description: {
        type: String,
    },
    address: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    opening: {
        type: String,
    },
    drinks: {
        type: String,
    },
    menu: {
        type: String,
    },
}, {
    timestamps: true,
});

module.exports = model('restaurant', RestaurantSchema);