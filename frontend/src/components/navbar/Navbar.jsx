import React, { Component } from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import NavbarItem from "./NavbarItem";

class Navbar extends Component {
  state = {
    color: "white",
  };

  handleLocation = () => {
    switch (window.location.pathname) {
      case "/":
        return -17;
      case "/about":
        return 60;
      case "/music":
        return 135;
      case "/contact":
        return 218;
      default:
        return -17;
    }
  };

  listenScrollEvent = () => {
    if (window.pageYOffset > 800) {
      this.setState({ color: "black" });
    } else {
      this.setState({ color: "white" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div id="navbarWrapper">
        <motion.div
          animate={{ x: this.handleLocation() }}
          className="navbarItemOutline"
          style={{ borderColor: this.state.color }}
        ></motion.div>
        <NavbarItem to="/" item="Home" />
        <NavbarItem to="/about" item="About" />
        <NavbarItem to="/music" item="Music" />
        <NavbarItem to="/contact" item="Contact" />
        <div id="navbarSocialContent">Shit</div>
      </div>
    );
  }
}

export default Navbar;
