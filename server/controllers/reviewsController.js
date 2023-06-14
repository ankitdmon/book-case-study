const Review = require('../models/review');
const Book = require('../models/book');
const Publisher = require('../models/publisher');

exports.getAverageRating = async (req, res) => {
  try {
    const { publisherIds } = req.query;

    // Calculate the average rating of reviews of books published by the specified publishers within the last 365 days
    const averageRatings = await Review.aggregate([
      { $match: { book: { $in: publisherIds }, createdAt: { $gte: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000) } } },
      { $group: { _id: null, averageRating: { $avg: '$rating' } } },
    ]);

    res.json(averageRatings);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getFilteredReviews = async (req, res) => {
  try {
    const { publisherIds, language } = req.body;

    let query = {};

    // Check if publisherIds parameter is provided
    if (publisherIds && publisherIds.length > 0) {
      query.publisher = { $in: publisherIds };
    }

    // Check if language parameter is provided
    if (language) {
      query.language = language;
    }

    // Find reviews based on the query
    const reviews = await Review.find(query);

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};