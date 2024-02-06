const express = require('express');
const app = express.app();
const postController = require('../controllers/postController');
const authenticationMiddleware = require('../middleware/authentication');

// Create a new post
app.post('/', authenticationMiddleware, postController.createPost);

// Retrieve all posts
app.get('/', postController.getAllPosts);

// Retrieve a specific post by ID
app.get('/:postId', postController.getPostById);

// Update a post
app.put('/:postId', authenticationMiddleware, postController.updatePost);

// Delete a post
app.delete('/:postId', authenticationMiddleware, postController.deletePost);

module.exports = app;
