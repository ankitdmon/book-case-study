const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

router.get('/reviews/average-rating', reviewsController.getAverageRating);

router.get('/reviews', reviewsController.getFilteredReviews);

module.exports = router;