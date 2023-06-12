const Review = require('../models/review');
const Publisher = require('../models/publisher');

// Controller function for filtering reviews
const filterReviews = async (req, res) => {
  try {
    // const publisherIds = req.query.publisherIds.split(',');
    // const languageId = req.query.languageId;

    // // Perform the filtering logic based on publisher IDs and language ID
    // const filteredReviews = await Review.find({
    //   book: { $in: publisherIds },
    //   language: languageId,
    // });

    // res.json(filteredReviews);
    res.json({"router": "/review-filter"})
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller function for calculating average rating of reviews
const calculateAverageRating = async (req, res) => {
  try {
    // const publisherIds = req.query.publisherIds.split(',');
    // const startDate = new Date(req.query.startDate);
    // const endDate = new Date(req.query.endDate);

    // // Perform the logic to calculate the average rating within the date range
    // const averageRating = await Review.aggregate([
    //   { $match: { book: { $in: publisherIds }, postDate: { $gte: startDate, $lte: endDate } } },
    //   { $group: { _id: null, avgRating: { $avg: '$rating' } } },
    // ]);

    res.json({"router": "/average-rating"});
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  filterReviews,
  calculateAverageRating,
};