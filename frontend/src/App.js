import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <div id="mainBackground">
        <Navbar />
      </div>
    );
  }
}

export default App;
