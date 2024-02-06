const User = require('../models/User');

// Retrieve user profile
async function getProfile(req, res) {
  try {
    const userId = req.userId;

    // Fetch the user from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error retrieving user profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Update user profile
async function updateProfile(req, res) {
  try {
    const userId = req.userId;
    const { username, email } = req.body;

    // Update the user in the database
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, email },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User profile updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Follow a user
async function followUser(req, res) {
  try {
    const userId = req.userId;
    const userToFollowId = req.params.userIdToFollow;

    // Check if the user to follow exists
    const userToFollow = await User.findById(userToFollowId);

    if (!userToFollow) {
      return res.status(404).json({ error: 'User to follow not found' });
    }

    // Add the user to follow in the following list of the current user
    const currentUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { following: userToFollowId } },
      { new: true }
    );

    res.status(200).json({ message: 'User followed successfully' });
  } catch (error) {
    console.error('Error following user:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Unfollow a user
async function unfollowUser(req, res) {
  try {
    const userId = req.userId;
    const userToUnfollowId = req.params.userIdToUnfollow;

    // Check if the user to unfollow exists
    const userToUnfollow = await User.findById(userToUnfollowId);

    if (!userToUnfollow) {
      return res.status(404).json({ error: 'User to unfollow not found' });
    }

    // Remove the user to unfollow from the following list of the current user
    const currentUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { following: userToUnfollowId } },
      { new: true }
    );

    res.status(200).json({ message: 'User unfollowed successfully' });
  } catch (error) {
    console.error('Error unfollowing user:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { getProfile, updateProfile, followUser, unfollowUser };
