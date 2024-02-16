import "../Styling/ExploreCourses.css";
import { Link } from "react-router-dom";
import Courseimg from "../assets/courses.png";

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
        <img src={Courseimg} alt="" />
      </div>
    </>
  );
}

export default Courses;
