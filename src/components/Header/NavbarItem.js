import React, { Component } from "react";
import "./Navbar.css";

export class NavbarItem extends Component {
  render() {
    return (
      <a className="Navbar-Item" href="/">
        {this.props.name}
      </a>
    );
  }
}

export default NavbarItem;
