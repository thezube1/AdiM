import React from "react";
import "./featuredContent.css";
import { Bounce } from "react-reveal";

const FeaturedContent = () => {
  return (
    <div className="featuredWrapper">
      <div className="featuredContent">
        <Bounce left>
          <div id="featuredTitle">
            Summer <br />
            Daydream
          </div>
        </Bounce>
      </div>
    </div>
  );
};

export default FeaturedContent;
