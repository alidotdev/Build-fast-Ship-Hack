const Note = require('../models/note');

exports.createNote = async (req, res) => {
    const { content } = req.body;
    const userId = req.user.id;

    try {
        const newNote = new Note({ userId, content });
        await newNote.save();
        res.json(newNote);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getNotes = async (req, res) => {
    const userId = req.user.id;
    try {
        const notes = await Note.find({ userId });
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
