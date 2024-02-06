const Post = require('../models/postModel');

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.userId; // Assumes you have the authenticated user ID in req.userId

    const post = new Post({ title, content, author });
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Retrieve all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username email');
    res.json(posts);
  } catch (error) {
    console.error('Error retrieving posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Retrieve a specific post by ID
const getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId).populate('author', 'username email');

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error('Error retrieving post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a post
const updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { title, content } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if the authenticated user is the author of the post
    if (post.author.toString() !== req.userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    post.title = title;
    post.content = content;
    await post.save();

    res.json(post);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if the authenticated user is the author of the post
    if (post.author.toString() !== req.userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    await post.remove();

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
