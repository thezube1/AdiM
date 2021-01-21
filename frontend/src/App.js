import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Fade } from "react-reveal";
import Spinner from "./components/spinner/Spinner";

import Text from "./components/3Dtext/text";
import AboutContent from "./components/home/AboutContent";
import MusicContent from "./components/home/MusicContent";
import ContactContent from "./components/home/ContactContent";
import PressContent from "./components/home/PressContent";
import ModalGroup from "./components/modal/Modal";

class App extends Component {
  state = {
    open: true,
    loading: true,
  };

  render() {
    return (
      <React.Fragment>
        <Spinner isOpen={this.state.loading} />
        <div>
          <Navbar />
          <ModalGroup
            open={this.state.open}
            close={() => this.setState({ open: false })}
          >
            <div id="featuredWrapper">
              <Fade top>
                <div id="featuredTitle" className="mainHeader">
                  Newly released
                </div>
              </Fade>
              <div id="featuredContent">
                <iframe
                  onLoad={() => this.setState({ loading: false })}
                  style={{ border: 0, width: 550, height: 642, marginTop: 50 }}
                  src="https://bandcamp.com/EmbeddedPlayer/track=2156442761/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/"
                  seamless
                >
                  <a href="https://adimahendru.bandcamp.com/track/never-been-easy">
                    Never Been Easy by Adi M
                  </a>
                </iframe>
              </div>
            </div>
          </ModalGroup>
          <div id="section1">
            <div id="mainBackground">
              <Fade left>
                <div id="textWrapper">
                  <Text />
                </div>
              </Fade>
              {/* <Fade bottom>
                <span id="backgroundText">ADI</span>
              </Fade>*/}
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
      </React.Fragment>
    );
  }
}

export default App;
