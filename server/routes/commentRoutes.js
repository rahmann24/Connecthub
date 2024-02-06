const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authenticationMiddleware = require('../middleware/authentication');

// Add a comment to a post
router.post('/', authenticationMiddleware, commentController.addComment);

// Delete a comment
router.delete('/:commentId', authenticationMiddleware, commentController.deleteComment);

module.exports = router;
