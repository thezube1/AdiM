import React, { Component } from "react";
import "./navbar.css";
import NavbarItem from "./NavbarItem";

import { FaInstagram, FaTwitter, FaSpotify } from "react-icons/fa";

class Navbar extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const socials = document.querySelectorAll(".navbarSocial");
    if (window.scrollY > 20) {
      document.querySelector(".navbarWrapper").className =
        "navbarWrapper scroll";
      for (let i = 0; i < socials.length; i++) {
        socials[i].className = "navbarSocial scroll2";
      }
    } else {
      for (let i = 0; i < socials.length; i++) {
        socials[i].className = "navbarSocial";
      }
      document.querySelector(".navbarWrapper").className = "navbarWrapper";
    }
  };

  render() {
    return (
      <div className="navbarWrapper">
        <NavbarItem to="section1" item="Home" />
        <NavbarItem to="section2" item="Music" offset={-250} />
        <NavbarItem to="section3" item="About" />
        <NavbarItem to="section4" item="Press" />
        <NavbarItem to="section5" item="Contact" />
        <a
          className="navbarSocial"
          href="https://open.spotify.com/artist/6YeSug3pqLlakGir5f3ViA?si=VDVpR2BoTPS113vblDqnqQ"
          target="_blank"
          rel="noreferrer"
        >
          <FaSpotify style={{ width: 25, height: 25 }} />
        </a>
        <a
          className="navbarSocial"
          href="https://www.instagram.com/adimmusic/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram style={{ width: 25, height: 25 }} />
        </a>
        <a
          className="navbarSocial"
          href="https://twitter.com/adimahendru"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter style={{ width: 25, height: 25 }} />
        </a>

        <div id="navbarSocialContent"></div>
      </div>
    );
  }
}

export default Navbar;
