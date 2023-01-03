const express = require('express');
const pageController = require('../controllers/pageController');
const router = express.Router();

router.route(/^(\/|\/home)$/).get(pageController.getIndex);
router.route('/about').get(pageController.getAbout);

module.exports = router;