const Comment = require('../models/commentModel');

// Add a comment to a post
const addComment = async (req, res) => {
  try {
    const { postId, content } = req.body;
    const author = req.userId; // Assumes you have the authenticated user ID in req.userId

    const comment = new Comment({ postId, content, author });
    await comment.save();

    res.status(201).json(comment);
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a comment
const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;

    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    // Check if the authenticated user is the author of the comment
    if (comment.author.toString() !== req.userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    await comment.remove();

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addComment,
  deleteComment,
};
