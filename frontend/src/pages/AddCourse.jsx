import React from "react";
import { useState, useEffect } from "react";
import "../Styling/AddCourse.css";

const AddCourse = () => {
  const [teacherId, setTeacherId] = useState("");
  const [teacher, setTeacher] = useState("");
  const [student, setStudent] = useState("");
  const [content, setContent] = useState("");
  const [quizzes, setQuizzes] = useState("");

  useEffect(() => {
    // Fetch token and extract teacher ID from it
    const token = localStorage.getItem("token");
    // Assuming the token contains teacherId, you may need to adjust this part based on your authentication setup
    if (token) {
      const decodedToken = decodeToken(token);
      setTeacherId(decodedToken.teacherId);
    }
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
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
