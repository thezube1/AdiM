import React from "react";
import "./featuredContent.css";
import { Fade, Zoom } from "react-reveal";
import { motion } from "framer-motion";

const lineExtend = {
  rest: {
    width: "0%",
    transition: {
      duration: 1,
    },
  },
  hover: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};

const FeaturedContent = () => {
  return (
    <div className="featuredWrapper">
      <div className="featuredContent">
        <div style={{ maxWidth: "max-content" }}>
          <Fade left>
            <div id="featuredTitle">
              Summer <br />
              Daydream
            </div>
          </Fade>
          <Zoom cascade>
            <div id="featuredBar"></div>
          </Zoom>
        </div>
        <div
          className="featuredHeader"
          style={{ fontSize: 20, marginTop: 10, color: "rgb(247, 199, 203)" }}
        >
          Out now
        </div>
        <motion.a
          variants={lineExtend}
          href="https://ffm.to/summerdaydream"
          className="featuredHeader"
          target="_blank"
          rel="noreferrer"
          id="featuredListen"
        >
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            style={{ width: 300 }}
          >
            <div style={{ width: 300 }}>Listen</div>
            <motion.div
              variants={lineExtend}
              className="featuredItemUnder"
            ></motion.div>
          </motion.div>
        </motion.a>
      </div>
    </div>
  );
};

export default FeaturedContent;
