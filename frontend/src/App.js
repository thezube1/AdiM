import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

import AboutContent from "./components/home/AboutContent";

class App extends Component {
  state = {};
  render() {
    console.log(window.pageYOffset);
    return (
      <div>
        <Navbar />
        <div id="mainBackground">
          <div id="backgroundTextWrapper">
            <span id="backgroundText">ADI</span>
          </div>
        </div>
        <AboutContent />
      </div>
    );
  }
}

export default App;
