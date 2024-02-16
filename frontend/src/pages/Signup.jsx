import React from "react";
//import axios from "axios";
import "../Styling/Signup.css";

const Signup = () => {
  return (
    <div className="Sign-up">
      <h1>Signup</h1>
      <form action="">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <div className="radio-btn">
            <label htmlFor="roll">Roll:</label>
            <div>
              <input type="radio" id="student" name="roll" value="student" />
              <label htmlFor="student">Student</label>
            </div>
            <div className="radio-btn">
              <input type="radio" id="teacher" name="roll" value="teacher" />
              <label htmlFor="teacher">Teacher</label>
            </div>
          </div>
        </div>
        <button type="submit" className="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
