const Todo = require('../models/todo');

exports.getTodos = async (req, res) => {
    const userId = req.user.id;
    try {
        const todos = await Todo.find({ userId });
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createTodo = async (req, res) => {
    const { task } = req.body;
    const userId = req.user.id;

    try {
        const newTodo = new Todo({ userId, task });
        await newTodo.save();
        res.json(newTodo);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
        res.json(updatedTodo);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteTodo = async (req, res) => {
    const { id } = req.params;

    try {
        await Todo.findByIdAndDelete(id);
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
