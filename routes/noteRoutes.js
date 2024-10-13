const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');
const auth = require('../middleware/authMiddleware');

router.post('/', notesController.createNote);
router.get('/', notesController.getNotes);

module.exports = router;