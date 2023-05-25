import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../images/logo.png' 
import {Link} from 'react-router-dom'

const NavBars = () => {
  return (
    <Navbar bg="white" variant="light">
      <Container>
        <Link to="/home"><Navbar.Brand><img src={logo} alt='logo' style={{width:'110px', height:'30px'}} /></Navbar.Brand></Link>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">Individual</Link>
          <Link to="/teams" className="nav-link">Teams</Link>
          <Link to="/enterprises" className="nav-link">Enterprises</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBars
