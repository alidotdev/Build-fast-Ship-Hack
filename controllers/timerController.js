const Timer = require('../models/timer');

exports.createTimer = async (req, res) => {
    const { duration } = req.body;
    const userId = req.user.id;

    try {
        const newTimer = new Timer({ userId, duration });
        await newTimer.save();
        res.json(newTimer);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getTimers = async (req, res) => {
    const userId = req.user.id;
    try {
        const timers = await Timer.find({ userId });
        res.json(timers);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateTimer = async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;

    try {
        const updatedTimer = await Timer.findByIdAndUpdate(id, { completed }, { new: true });
        res.json(updatedTimer);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
