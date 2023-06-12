const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  publishers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
  }],
  languages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Language',
  }],
});

const book = mongoose.model('Book', bookSchema);

module.exports = book;