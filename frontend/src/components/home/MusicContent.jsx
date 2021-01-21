import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Fade, Zoom } from "react-reveal";
import { FaSoundcloud, FaSpotify, FaBandcamp } from "react-icons/fa";

class MusicContent extends Component {
  state = {
    width: 0,
    height: 0,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    return (
      <div id="musicContent">
        <div id="musicContentWrapper">
          <Fade left>
            <div id="musicPlayerWrapper">
              <div id="musicTitleWrapper">
                <div id="musicTitle" className="mainHeader">
                  Music
                </div>
                <div id="musicLinkWrapper">
                  <a
                    className="musicLink"
                    href="https://open.spotify.com/artist/6YeSug3pqLlakGir5f3ViA?si=VDVpR2BoTPS113vblDqnqQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaSpotify
                      style={{
                        width: 70,
                        height: 70,
                        color: "rgb(30,215,96)",
                      }}
                    />
                  </a>
                  <a
                    className="musicLink"
                    href="https://adimahendru.bandcamp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaBandcamp
                      style={{
                        width: 70,
                        height: 70,
                        lineHeight: 1,
                        color: "rgb(254, 80, 0)",
                      }}
                    />
                  </a>
                  <a
                    className="musicLink"
                    href="https://soundcloud.com/adimahendru"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaSoundcloud
                      style={{
                        width: 80,
                        height: 80,
                        lineHeight: 1,
                        color: "rgb(254, 80, 0)",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div id="musicSound">
                <div>
                  <iframe
                    style={{ border: 0, width: 300, height: 300 }}
                    src="https://bandcamp.com/EmbeddedPlayer/track=2156442761/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/"
                    seamless
                  >
                    <a href="https://adimahendru.bandcamp.com/track/never-been-easy">
                      Never Been Easy by Adi M
                    </a>
                  </iframe>
                </div>
                <div>
                  <iframe
                    style={{ border: 0, width: 300, height: 300 }}
                    src="https://bandcamp.com/EmbeddedPlayer/album=1686741501/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                    seamless
                  >
                    <a href="https://adimahendru.bandcamp.com/album/forever-working-title">
                      Forever Working Title by Adi M
                    </a>
                  </iframe>
                </div>
                <div>
                  <iframe
                    style={{ border: 0, width: 300, height: 300 }}
                    src="https://bandcamp.com/EmbeddedPlayer/track=3929755664/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                    seamless
                  >
                    <a href="https://adimahendru.bandcamp.com/track/the-next-winner">
                      The Next Winner by Adi M
                    </a>
                  </iframe>
                </div>
              </div>
            </div>
          </Fade>
          <Zoom>
            <div id="musicSeperator"></div>
          </Zoom>
          <Fade right>
            <div id="musicVideo">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=LXAIsRJO96Y"
                width={this.state.width <= 650 ? 350 : 650}
                controls={true}
                style={{
                  border: "black",
                  borderStyle: "solid",
                  borderWidth: 1,
                  justifySelf: "center",
                }}
              />
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default MusicContent;
