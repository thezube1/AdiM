import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Fade } from "react-reveal";
import Spinner from "./components/spinner/Spinner";

import Text from "./components/3Dtext/text";
import AboutContent from "./components/home/AboutContent";
import MusicContent from "./components/home/MusicContent";
import FeaturedContent from "./components/home/FeaturedContent";
import ContactContent from "./components/home/ContactContent";
import PressContent from "./components/home/PressContent";

class App extends Component {
  state = {
    open: true,
    loading: true,
    width: 700,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    return (
      <React.Fragment>
        <Spinner isOpen={this.state.loading} />
        <div>
          <Navbar />

          <div id="section1">
            <div id="mainBackground">
              <Fade left>
                <div id="textWrapper">
                  <Text width={this.state.width} />
                </div>
              </Fade>
              {/* <Fade bottom>
                <span id="backgroundText">ADI</span>
              </Fade>*/}
            </div>
          </div>
          <div>
            <FeaturedContent />
          </div>
          <div id="section2">
            <MusicContent
              toggleLoading={(e) => this.setState({ loading: e })}
            />
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
      </React.Fragment>
    );
  }
}

export default App;
