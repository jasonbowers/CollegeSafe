import React, { Component } from "react";
import "./Navbar.css";
import NavbarItem from "./NavbarItem.js";

export class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <h3 className="Navbar-Logo">Logo</h3>

        <ul className="Navbar-Menu">
          <NavbarItem name="Home" />
          <NavbarItem name="Pricing" />
          <NavbarItem name="About" />
        </ul>

        <a className="Navbar-Account" href="/">
          Login
        </a>
      </div>
    );
  }
}

export default Navbar;
