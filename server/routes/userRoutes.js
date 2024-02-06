const express = require('express');
const app = express.app();
const { getProfile, updateProfile, followUser, unfollowUser } = require('../controllers/userController');
const authenticationMiddleware = require('../middleware/authentication');

// User profile retrieval route
app.get('/profile', authenticationMiddleware, getProfile);

// User profile update route
app.put('/profile', authenticationMiddleware, updateProfile);

// User follow route
app.post('/follow/:userIdToFollow', authenticationMiddleware, followUser);

// User unfollow route
app.post('/unfollow/:userIdToUnfollow', authenticationMiddleware, unfollowUser);

module.exports = app;
