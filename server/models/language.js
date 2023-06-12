const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }

})
const language = mongoose.model('Language', languageSchema);

module.exports = language;