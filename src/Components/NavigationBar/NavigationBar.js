import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, Container } from "react-bootstrap";
import styled from "styled-components";
import icon from "../../Assets/icn-black.png";

const Styles = styled.div`
  .navbar {
    background-color: white;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.);
  }

  .navbar-brand{
    color: #edac57;
    font-weight: 600;
    &:hover {
      color: #f7c079;
    }
  }
  
  .navbar-nav .nav-link {
    color: black;
    font-weight: 600;

    &:hover {
      color: #555;
    }

    
  }

  .brand-icon {
    max-width: 50px;
  }
  
`;

export default class NavigationBar extends Component {
  render() {
    return (<Styles>
      <Navbar expand="lg" className="navbar-light">
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