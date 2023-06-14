const Chance = require('chance');
const mongoose = require('mongoose');
const Publisher = require('./models/publisher');
const Book = require('./models/book');
const Review = require('./models/review');
const Language = require('./models/language');

const chance = new Chance();

const generateDummyData = async () => {
  // Generate publishers
  const publisherCount = 1000;
  const publishers = [];

  for (let i = 0; i < publisherCount; i++) {
    const publisher = new Publisher({
      name: chance.company(),
    });

    publishers.push(publisher);
  }

  await Publisher.insertMany(publishers);

  // Generate languages
  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Turkish',
    'Russian',
    'Hindi',
  ];

  const languageDocuments = languages.map((language) => ({
    name: language,
  }));

  await Language.insertMany(languageDocuments);

  // Generate books
  const bookCount = 10000;
  const books = [];

  const allPublishers = await Publisher.find();
  const allLanguages = await Language.find();

  for (let i = 0; i < bookCount; i++) {
    const randomPublisher = chance.pickone(allPublishers);

    const book = new Book({
      name: chance.sentence(),
      publisher: randomPublisher._id,
    });

    books.push(book);
  }

  await Book.insertMany(books);

  // Generate reviews
  const reviewCount = 100000;
  const reviews = [];

  const allBooks = await Book.find();

  for (let i = 0; i < reviewCount; i++) {
    const randomBook = chance.pickone(allBooks);
    const randomLanguage = chance.pickone(allLanguages);

    const review = new Review({
      reviewText: chance.paragraph({ sentences: 1 }),
      contains: chance.bool(),
      postDate: chance.date(),
      book: randomBook._id,
      language: randomLanguage._id,
    });

    reviews.push(review);
  }

  await Review.insertMany(reviews);

  console.log('Dummy data generation completed.');
};

module.exports = generateDummyData;
