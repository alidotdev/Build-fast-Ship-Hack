const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    content: { type: String, required: true }, // You can store drawing or text data as a base64 string or JSON.
});

module.exports = mongoose.model('Note', noteSchema);