const mongoose = require('mongoose');

const timerSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    duration: { type: Number, required: true },
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Timer', timerSchema);