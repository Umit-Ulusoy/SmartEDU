const express = require('express');
const pageController = require('../controllers/pageController');
const route = express.Router();

route.route(/^(\/|\/home)$/).get(pageController.getIndex);
route.route('/about').get(pageController.getAbout);

module.exports = route;