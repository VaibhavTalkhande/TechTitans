import "../Styling/ExploreCourses.css";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <>
      <h1 className="course-heading">Courses</h1>
      <div className="main-courses">
        <div className="course-content">
          <h2>
            Find Your Perfect Courses <br /> And Improve your Skills
          </h2>
          <Link className="explore-btn" to="/courses">
            Explore All Courses
          </Link>
        </div>
        <img src="../assets/courses.png" alt="" />
      </div>
    </>
  );
}

export default Courses;
