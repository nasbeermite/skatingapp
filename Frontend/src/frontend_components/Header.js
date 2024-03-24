import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../components/images/logo.png';
import './Header.css';
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="No logo"
            src={logo}
            width="100"
            height="70"
            className="d-inline-block align-top"
          />
          <Navbar.Brand className="fw-bold fs-2 text-danger">SKATE GATE </Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-md-center">
            <Nav.Link href="/" className='px-4  hover-effect'>Home</Nav.Link>
            {/* <Nav.Link href="/about" className='px-4  hover-effect'>About</Nav.Link> */}
            <Nav.Link href="/details" className='px-4  hover-effect'>Details</Nav.Link>
            <Nav.Link href="/payment" className='px-4  hover-effect'>Payment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
