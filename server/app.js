const express = require('express');
require('dotenv').config();
const dbConnection = require('./config/database')
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get('/', (req, res) => {
  console.log('Hello server');
  res.json({"name": "Ankit Mishra"})
});

app.listen(PORT, () => {
  dbConnection();
  console.log(`Server is running on port ${PORT}`);
});
