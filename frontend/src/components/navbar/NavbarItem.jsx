import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarItem extends Component {
  state = {
    color: "white",
  };

  listenScrollEvent = () => {
    if (window.pageYOffset > 800) {
      this.setState({ color: "black" });
    } else {
      this.setState({ color: "white" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Link to={this.props.to} style={{ textDecoration: "none" }}>
        <div className="navbarItem" style={{ color: this.state.color }}>
          {this.props.item}
        </div>
      </Link>
    );
  }
}

export default NavbarItem;
