import { Component } from "react";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavContent">
        <h1 className="nav-logo">TechTitan.</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        {/* <FontawesomeIcon icon={faHouseUser} /> */}

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
