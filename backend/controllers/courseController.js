const { Course } = require('../model/database');

// Controller functions for course operations
exports.createCourse = async (req, res) => {
  try {
    const teacher = req.user; // Assuming the authenticated user is the teacher

    if (teacher.role !== 'teacher') {
      return res.status(403).json({ message: 'You are not authorized to create courses' });
    }
  }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

  try {
    const { title, description, subject, teacher } = req.body;

    const course = new Course({ title, description, subject, teacher });
    await course.save();

    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateCourse = async (req, res) => {
    try {
        const teacher = req.user; // Assuming the authenticated user is the teacher
    
        if (teacher.role !== 'teacher') {
          return res.status(403).json({ message: 'You are not authorized to update courses' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteCourse = async (req, res) => {
    try {
        const teacher = req.user; // Assuming the authenticated user is the teacher
    
        if (teacher.role !== 'teacher') {
          return res.status(403).json({ message: 'You are not authorized to delete courses' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
