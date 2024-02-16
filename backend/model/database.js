const mongoose = require('mongoose');
const { Schema } = mongoose;
const dotenv = require('dotenv');
dotenv.config();
const link = process.env.MONGO_URI;
mongoose.connect(link).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
}
);

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['teacher', 'student'],
      required: true
    }
  });
  
  // Define Schema for Course
  const courseSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    students: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    content: [{
      chapter: {
        type: String,
        required: true
      },
      fileType: {
        type: String,
        required: true
      },
      fileUrl: {
        type: String,
        required: true
      }
    }],
    quizzes: [{
      question: {
        type: String,
        required: true
      },
      options: [String], // Array of strings representing options
      correctAnswer: {
        type: String,
        required: true
      }
    }]
  });

  
  // Create models from the schemas
  const User = mongoose.model('User', userSchema);
  const Course = mongoose.model('Course', courseSchema);
  
  // Export models
  module.exports = { User, Course };