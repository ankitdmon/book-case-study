const express = require('express');
require('dotenv').config();
const dbConnection = require('./config/database');
const generateDummyData = require('./dummyDataGenerator');
const publishersRouter = require('./routes/publishers');
const reviewsRouter = require('./routes/reviews');
const app = express();

const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json()); // Place this middleware above the route definitions

app.get('/', (req, res) => {
  console.log('Hello server');
  res.json({ "name": "Ankit Mishra" });
});

app.use('/publishers', publishersRouter);
app.use('/reviews', reviewsRouter);

// Call generateDummyData function
// generateDummyData(); // This will generate and store the dummy data

app.listen(PORT, () => {
  dbConnection();
  console.log(`Server is running on port ${PORT}`);
});
