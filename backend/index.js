const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pocess = require('dotenv');
pocess.config();
const secret = process.env.JWT_SECRET;
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use('/api/courses', (req, res, next) => {
    // Get token from header
    const token = req.headers.authorization;
  
    // Check if token exists
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  
    try {
      // Verify token
      const decoded = jwt.verify(token, 'secret');
  
      // Set user from token payload
      req.user = decoded.user;
      next();
    } catch (err) {
      res.status(401).json({ message: 'Invalid token' });
    }
  });
  
// Routes
app.get('/', (req, res) => {
    console.log("hell from express")
    res.send('Hello from Express!');
});

// Example API route
app.get('/api/example', (req, res) => {
    res.json({ message: 'This is an example API route' });
});
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
