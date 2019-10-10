const express = require('express');

const RestaurantController = require('./controller/RestaurantController');

const router = express.Router();

router.get('/restaurants', RestaurantController.show);

router.post('/store-restaurant', RestaurantController.store);

module.exports = router;