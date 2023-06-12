const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewText: {
    type: String,
    required: true,
  },
  contains: {
    type: Boolean,
    required: true,
  },
  postDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  },
});

const review = mongoose.model('Review', reviewSchema);

module.exports = review;