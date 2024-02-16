const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../model/database');
const pocess = require('dotenv');
pocess.config();
const secret = process.env.JWT_SECRET;
// Controller functions for user operations
exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = new User({ username, email, password, role });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    // Generate JWT token
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, secret, { expiresIn: '10h' });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // Generate JWT token
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, secret, { expiresIn: '10h' });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
