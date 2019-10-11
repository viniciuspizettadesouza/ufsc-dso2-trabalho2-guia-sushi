const Restaurant = require('../model/Restaurant');

module.exports = {

    async show(req, res) {
        const { user_id } = req.headers

        const restaurants = await Restaurant.find({ user: user_id })

        return res.json(restaurants)
    },

    async store(req, res) {
        try {
            const newRestaurant = await Restaurant.create(req.body);
            return res.status(200).send({ newRestaurant });
        } catch (err) {
            return res.status(400).send({ error: 'Restaurant registration failed' });
        }
    }
};