const express = require('express');
const router = express.Router();

const publishersController = require('../controllers/publishersController');


router.get('/publishers/:publisherId/reviews', publishersController.getPublisherReviews);

module.exports = router;