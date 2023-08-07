import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap';
import Pip from '../../Image/PIPICON.ico';
import '../../css/header.css';

const Header = () => {
  return (
    <header style={{ position: 'fixed', width: '100%', top: 0, zIndex: 100 }} className='buttons-row'>
      <Navbar style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', margin: '10px', borderRadius: '10px', height: '60px' }} expand="lg" direction="horizontal">
        <Navbar.Brand as={Link} to="/" style={{ margin: '0' }} >
          <img src={Pip} alt="PIP" style={{ width: '45px', height: '30px', borderRadius: '10px', margin: '10px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/" style={{ color: '#ffc62a', fontWeight: 'bold', fontSize: '28px' }}>Home</Nav.Link>
          </Nav>

          <Nav className="d-flex ms-auto head-button">
            <Button style={{ backgroundColor: 'black', color: '#ffc62a', borderColor: '#ffc62a', margin: '10px' }} as={Link} to="/register">
              Register
            </Button>
            <Button style={{ backgroundColor: 'black', color: '#ffc62a', borderColor: '#ffc62a', margin: '10px' }} as={Link} to="/login">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
