import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Fade } from "react-reveal";

import AboutContent from "./components/home/AboutContent";
import MusicContent from "./components/home/MusicContent";
import ContactContent from "./components/home/ContactContent";
import PressContent from "./components/home/PressContent";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div id="section1">
          <div id="mainBackground">
            <div id="backgroundTextWrapper">
              <Fade bottom>
                <span id="backgroundText">ADI</span>
              </Fade>
            </div>
          </div>
        </div>
        <div id="section2">
          <MusicContent />
        </div>
        <div id="section3">
          <AboutContent />
        </div>
        <div id="section4">
          <PressContent />
        </div>
        <div id="section5">
          <ContactContent />
        </div>
      </div>
    );
  }
}

export default App;
