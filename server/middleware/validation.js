// src/middleware/validation.js

function validationMiddleware(req, res, next) {
  try {
    const { path, method } = req;

    if (path === '/register' && method === 'POST') {
      // User registration validation
      if (!req.body.username) {
        return res.status(400).json({ error: 'Username is required' });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!req.body.email || !emailRegex.test(req.body.email)) {
        return res.status(400).json({ error: 'Invalid email address' });
      }

      if (!req.body.password) {
        return res.status(400).json({ error: 'Password is required' });
      }

    } else if (path === '/login' && method === 'POST') {
      // User login validation
      if (!req.body.email) {
        return res.status(400).json({ error: 'Email is required' });
      }

      if (!req.body.password) {
        return res.status(400).json({ error: 'Password is required' });
      }

    } else if (path === '/profile' && method === 'PUT') {
      // User profile update validation
      if (!req.body.username && !req.body.email) {
        return res.status(400).json({ error: 'At least one field (username or email) is required' });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (req.body.email && !emailRegex.test(req.body.email)) {
        return res.status(400).json({ error: 'Invalid email address' });
      }

    } else if (path === '/posts' && method === 'POST') {
      // Post creation validation
      if (!req.body.title) {
        return res.status(400).json({ error: 'Title is required' });
      }

    } else if (path === '/comments' && method === 'POST') {
      // Comment creation validation
      if (!req.body.content) {
        return res.status(400).json({ error: 'Content is required' });
      }

    } else {
      next();
      return;
    }

    res.status(400).json({ error: 'Bad Request' });

  } catch (error) {
    console.error('Error validating input:', error);
    res.status(400).json({ error: 'Bad Request' });
  }
}

module.exports = validationMiddleware;
