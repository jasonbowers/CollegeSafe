import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, Container } from "react-bootstrap";
import styled from "styled-components";
import icon from "../../Assets/icn.png";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }

    .brand-icon {
      max-width: 50px;
    }
  }

  .navbar-light .navbar-toggler {
    color: white;
  }
`;

export default class NavigationBar extends Component {
  render() {
    return (<Styles>
      <Navbar expand="lg" className="navbar-dark">
        <Container>
          <NavbarBrand href="/">
            <img className="brand-icon"
              src={icon}
              alt="college safe icon" >
            </img>
          </NavbarBrand>
          <NavbarBrand href="/" >College Safe</NavbarBrand>
          <Navbar.Toggle area-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto" >
              <Nav.Item><Nav.Link href="/">Home</Nav.Link> </Nav.Item >
              <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item >
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
    );
  }
};;