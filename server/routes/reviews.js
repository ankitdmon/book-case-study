const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

router.get('/filter', reviewsController.filterReviews);

router.get('/average-rating', reviewsController.calculateAverageRating);

module.exports = router;