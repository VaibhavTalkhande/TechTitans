import React, { useState } from "react";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styling/Navbar.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const handleClick = async () => {
  //   try {
  //     setLoading(true);
  //     // Make an HTTP POST request to the server
  //     const response = await axios.post("/register");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error registering:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <>
      <div className="header">
        {/* 1st div */}
        <nav className="main-nav">
          <div className="logo">
            <h2>TechTitans</h2>
          </div>

          {/* 2nd menu part  */}
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
                {/* <faHouseUser className="Home" /> */}
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
                {/* <FaInstagramSquare className="instagram" /> */}
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* 3rd Sign up */}
          <Link className="sign-up" to="/signup">
            Signup
          </Link>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}></a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
