import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div id="mainBackground">
          <div id="backgroundTextWrapper">
            <span id="backgroundText">ADI</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
