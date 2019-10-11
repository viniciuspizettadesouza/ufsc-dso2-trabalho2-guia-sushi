const { Schema, model } = require('mongoose');

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    address: String,
    thumbnail: String,
    opening: String,
    drinks: [String],
    menu: [String],
}, {
    timestamps: true,
});

module.exports = model('restaurant', RestaurantSchema);