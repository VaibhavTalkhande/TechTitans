const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: '*'
}));

// Routes
app.get('/', (req, res) => {
    console.log("hell from express")
    res.send('Hello from Express!');
});

// Example API route
app.get('/api/example', (req, res) => {
    res.json({ message: 'This is an example API route' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
