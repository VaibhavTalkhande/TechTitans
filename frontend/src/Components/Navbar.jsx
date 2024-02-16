import React, { useState } from "react";

import "../Styling/Navbar.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

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
                <Link to="/courses">Courses</Link>
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
