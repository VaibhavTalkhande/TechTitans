const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
// Define routes for course operations
router.post('/', courseController.createCourse);
router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);

// Content routes
router.post('/:courseId/content', upload.single('file'), courseController.uploadContent);

// Quiz routes
router.post('/:courseId/quizzes', upload.single('image'), courseController.uploadQuiz);
module.exports = router;