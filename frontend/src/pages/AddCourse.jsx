import React from "react";
import { useState, useEffect } from "react";
import "../Styling/AddCourse.css";

const AddCourse = () => {
  const [teacherId, setTeacherId] = useState("");
  const [teacher, setTeacher] = useState("");
  const [student, setStudent] = useState("");
  const [content, setContent] = useState("");
  const [quizzes, setQuizzes] = useState("");

  const decodeToken = (token) => {
    try {
      // Decode the JWT token
      const decodedToken = jwt_decode(token);
      return decodedToken;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  useEffect(() => {
    // Fetch token and extract teacher ID from it
    const token = localStorage.getItem("token");
    // Assuming the token contains teacherId, you may need to adjust this part based on your authentication setup
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/courses", {
        teacherId,
        teacher,
        student,
        content,
        quizzes,
      });
      console.log("Course added successfully:", response.data);
      // Reset form fields
      setTeacher("");
      setStudent("");
      setContent("");
      setQuizzes("");
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };
  return (
    <div>
      <h1>Add Courses</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="teacher">Teacher:</label>
          <input
            type="text"
            id="teacher"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="student">Student:</label>
          <input
            type="text"
            id="student"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="quizzes">Quizzes:</label>
          <input
            type="text"
            id="quizzes"
            value={quizzes}
            onChange={(e) => setQuizzes(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-course-btn">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
