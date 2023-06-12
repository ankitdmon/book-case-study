const Publisher = require('../models/publisher');

// Controller function for filtering publishers
const filterPublishers = async (req, res) => {
  try {
    // const keyword = req.query.keyword;

    // // Perform the filtering logic based on the keyword
    // const filteredPublishers = await Publisher.find({ name: { $regex: keyword, $options: 'i' } });

    res.json({"rotuter": "/publisher-filter"});
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  filterPublishers,
};
