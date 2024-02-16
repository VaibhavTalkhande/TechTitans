import React, { useState } from "react";
import axios from "axios";
import "../Styling/Signup.css";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // Optional message to display after signup
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "student" // Default roll value
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      setLoading(true);
      // Make an HTTP POST request to the server
      const response = await axios.post("http://localhost:5000/api/users/register", formData);
      console.log(response.data);
      // Save JWT token to local storage
      setMessage(response.data.message);
      localStorage.setItem("token", response.data.token);
      // Optionally, you can redirect the user to another page after successful signup
      // history.push("/dashboard");
      if (response.data.token) {
        window.location = "/";
      }
    } catch (error) {
     console.error("Error registering:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Sign-up">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <div className="radio-btn">
<<<<<<< HEAD
            <label htmlFor="roll">Roll:</label>

            <input type="radio" id="student" name="roll" value="student" />
            <label htmlFor="student">Student</label>

=======
            <label>Role:</label>
            <div>
              <input type="radio" id="student" name="roll" value="student" checked={formData.roll === "student"} onChange={handleChange} />
              <label htmlFor="student">Student</label>
            </div>
>>>>>>> 61d8297c93a9f08b56ce4cf9b8a95829cee49e3c
            <div className="radio-btn">
              <input type="radio" id="teacher" name="roll" value="teacher" checked={formData.roll === "teacher"} onChange={handleChange} />
              <label htmlFor="teacher">Teacher</label>
            </div>
          </div>
        </div>
        <button type="submit" className="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Signup;
