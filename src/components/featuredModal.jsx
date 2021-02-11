import React, { Component } from "react";
import ModalGroup from "./modal/Modal";
import Photo from "../photos/cover_art.JPG";

class FeaturedModal extends Component {
  state = {};
  render() {
    return {
      /*<ModalGroup
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
                <div>
                  <a
                    href="https://www.youtube.com/watch?v=BcH5Vtq1O5o&feature=youtu.be"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      onLoad={() => this.setState({ loading: false })}
                      src={Photo}
                      style={{
                        border: 0,
                        width: 550,
                        height: 550,
                        marginTop: 50,
                      }}
                      alt="Album cover"
                    />
                  </a>
                  <div
                    style={{
                      marginTop: 5,
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div style={{ fontSize: 20 }} className="mainHeader">
                      Summer Daydream
                    </div>
                    <div style={{ fontSize: 20 }} className="mainHeader">
                      Adi M
                    </div>
                  </div>
                </div>

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
          </ModalGroup> */
    };
  }
}

export default FeaturedModal;
