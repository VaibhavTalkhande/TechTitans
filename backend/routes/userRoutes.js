const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for user operations
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/me', userController.getAllUser);

module.exports = router;
