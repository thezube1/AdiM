import React, { Component } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

class ContactContent extends Component {
  state = {};
  render() {
    return (
      <div id="contactWrapper">
        <div id="contactContent">
          <div className="mainHeader" id="contactTitle">
            Contact
          </div>
          <div id="contactEnvelope">
            <BsEnvelope
              style={{ color: "rgb(25, 25, 25)", width: 40, height: 40 }}
            />
            <div id="contactMailText">adimahendru96@gmail.com</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactContent;
