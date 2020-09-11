import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div id="navbarWrapper">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navbarItemOutline">
            <div className="navbarItem">Home</div>
          </div>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className="navbarItem">About</div>
        </Link>
        <Link to="/music" style={{ textDecoration: "none" }}>
          <div className="navbarItem">Music</div>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <div className="navbarItem">Contact</div>
        </Link>
      </div>
    );
  }
}

export default Navbar;
