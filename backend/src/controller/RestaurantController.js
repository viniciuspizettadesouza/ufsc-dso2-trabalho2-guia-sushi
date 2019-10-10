const Restaurant = require('../model/Restaurant');

module.exports = {

    async index(req, res) {

        const Restaurant = await Restaurant.find({}, function (err, name) {
            return (null, name)
        });
        return res.status(200).send(restaurant);
    },

    async add(req, res) {
        try {
            const newRestaurant = await Restaurant.create(req.body);
            return res.status(200).send({ newRestaurant });
        } catch (err) {
            return res.status(400).send({ error: 'Restaurant registration failed' });
        }
    }
};