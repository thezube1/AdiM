import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div id="navbarWrapper">
        <div className="navbarItemOutline">
          <div className="navbarItem">Home</div>
        </div>
        <div className="navbarItem">About</div>
        <div className="navbarItem">Music</div>
        <div className="navbarItem">Contact</div>
      </div>
    );
  }
}

export default Navbar;
