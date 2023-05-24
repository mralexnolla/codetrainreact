import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"

const Navbars = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link to="/"><Navbar.Brand>Home</Navbar.Brand></Link>
        <Nav className="me-auto">
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/services" className='nav-link'>Todos</Link>
          <Link to="contact" className='nav-link'>Contact</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbars
