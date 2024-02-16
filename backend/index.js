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
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 5000;

//muler
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Specify the directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original file name for the uploaded file
    }
  });
  
  const upload = multer({ storage: storage });
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
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
