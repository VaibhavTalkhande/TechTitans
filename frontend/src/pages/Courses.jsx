import React from "react";
import { useState } from "react";
import "../Styling/Courses.css";
import { Link } from "react-router-dom";

const Courses = () => {
  const [cards] = useState([
    { title: "Course 1", description: "This is a sample card." },
    { title: "Course 2", description: "This is another sample card." },
    { title: "Course 3", description: "This is yet another sample card." },
    { title: "Course 4", description: "This is one more sample card." },
  ]);
  return (
    <>
      <h1 className="explore-heading">Explore Courses</h1>
      <Link to="/addcourse" className="Add-Course">
        Add Courses
      </Link>
      <div className="container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div>
              <h2>{card.title}</h2>
              <p className="course-des">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
