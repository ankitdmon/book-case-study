const Publisher = require("../models/publisher");
const Book = require("../models/book");
const Review = require("../models/review");
const Language = require("../models/language");

exports.getPublisherReviews = async (req, res) => {
  try {
    const { publisherId } = req.params;

    // Find the publisher and their books
    const publisher = await Publisher.findById(publisherId);
    const books = await Book.find({ publisher: publisherId });

    // Find reviews of books published by the publisher in Spanish language
    const reviews = await Review.find({ book: { $in: books }, language: 'Spanish' });

    res.json(reviews);
    // res.json({ reviews: "nncncklnc an" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
