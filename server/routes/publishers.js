const express = require('express');
const router = express.Router();

const publishersController = require('../controllers/publishersController');


router.get('/filter', publishersController.filterPublishers);

module.exports = router;