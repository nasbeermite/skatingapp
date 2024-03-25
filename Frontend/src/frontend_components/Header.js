import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../components/images/logo.png';
import './Header.css';
import { useNavigate } from 'react-router-dom';
const Header = () => {

  const navigate =useNavigate()
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
          <Nav className="w-100 justify-content-end">
            <Nav.Link onClick={()=>navigate('/')} className='px-4  hover-effect'>Home</Nav.Link>
            {/* <Nav.Link href="/about" className='px-4  hover-effect'>About</Nav.Link> */}
            <Nav.Link onClick={()=>navigate('/details')} className='px-4  hover-effect'>Details</Nav.Link>
            <Nav.Link onClick={()=>navigate('/payment')} className='px-4  hover-effect'>Payment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
