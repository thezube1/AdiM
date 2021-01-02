import React, { Component } from "react";
import { motion } from "framer-motion";
import ModalGroup from "../modal/Modal";
import axios from "axios";

class PressContent extends Component {
  state = {
    open: false,
    articleOpen: false,
    articles: undefined,
  };

  componentDidMount() {
    axios
      .get("data/press.json")
      .then((res) => this.setState({ articles: res.data }));
  }

  render() {
    const textHighlight = {
      rest: {
        transition: {
          duration: 0.8,
        },
      },
      hover: {
        backgroundImage:
          "linear-gradient(to right, rgba(252, 186, 3, .65) 100%, white 0%)",
        transition: {
          duration: 0.8,
        },
      },
      leave: {
        transition: {
          duration: 0.8,
        },
      },
    };
    return (
      <div id="pressWrapper">
        <ModalGroup
          open={this.state.open}
          close={() => this.setState({ open: false, articleOpen: false })}
        >
          <div>
            <div className="mainHeader">
              {this.state.articleOpen === false ? undefined : (
                <div>
                  <div>{this.state.articles[this.state.articleOpen].title}</div>
                </div>
              )}
            </div>
          </div>
        </ModalGroup>
        <div id="pressContent">
          <div className="mainHeader" id="pressHeader">
            Press
          </div>
          <div id="pressSquareWrapper">
            {this.state.articles === undefined ? (
              <div>Loading</div>
            ) : (
              this.state.articles.map((item, index) => {
                return (
                  <div key={index} className="pressSquareContent">
                    <div className="pressSquare"></div>
                    <motion.button
                      className="pressButton"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      onClick={() =>
                        this.setState({ open: true, articleOpen: index })
                      }
                    >
                      <motion.div
                        variants={textHighlight}
                        className="mainText pressText"
                      >
                        <span>{item.title}</span>
                        <span style={{ fontWeight: 300 }}>
                          {" "}
                          - {item.author}
                        </span>
                      </motion.div>
                    </motion.button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PressContent;
