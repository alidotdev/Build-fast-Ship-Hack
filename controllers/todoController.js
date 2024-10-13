const Todo = require('../models/todo');

exports.getTodos = async (req, res) => {
    const userId = req.params.id;
    try {
        const todos = await Todo.find({ userId });
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createTodo = async (req, res) => {
    // console.log(req.body)
    const { task } = req.body;
    // console.log(task)
    const userId = req.body.userId;

    try {
        const newTodo = new Todo({ userId : userId, task : task, completion : false});
        await newTodo.save();
        res.json(newTodo);
    } catch (err) {
        // console.log(err)
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    const { task } = req.body;

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { completed: completed , task: task},  { new: true });
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
