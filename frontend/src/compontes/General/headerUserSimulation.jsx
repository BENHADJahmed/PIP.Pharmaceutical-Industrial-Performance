import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import Pip from '../../Image/PIPICON.ico';

const HeaderUserSimulation = (props) => {
  const handleLogout = () => {

    localStorage.removeItem("simulation1");
    localStorage.removeItem("simulation2");

  };
  return (
    <header style={{ position: 'fixed', width: '100%', top: 0, zIndex: 100 }}>
      <Navbar style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', margin: '10px', borderRadius: '10px', height: '60px' }} expand="lg">
        <Navbar.Brand as={Link} to="/homeUser" style={{ fontWeight: 'bold', color: '#000' }}>
          <img src={Pip} alt="PIP" style={{ width: '45px', height: '30px', borderRadius: '10px', margin: '10px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/homeUser" style={{ color: '#ffc62a', fontWeight: 'bold' }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/simulationUser" style={{ color: '#ffc62a', fontWeight: 'bold' }}>
              Simulation
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboardUser" style={{ color: '#ffc62a', fontWeight: 'bold' }}>
              Dashboard
            </Nav.Link>
          </Nav>
          <Nav className="d-flex ms-auto">
            <div style={{ display: 'flex' }}>
              <Form className='d-flex'>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="me-2"
                  style={{ margin: '20px' }}
                  onChange={props.inputHandler}
                />
                <Button style={{ backgroundColor: 'black', color: '#ffc62a', borderColor: '#ffc62a', margin: 'auto' }}>Search</Button>
              </Form>
            </div>
            <Nav.Link  onClick={handleLogout} style={{ color: 'black', fontWeight: 'bold', margin: 'auto', textDecoration: 'underline' }} as={Link} to="/login" className='custom-button'>
              Logout
            </Nav.Link>
            <div style={{ backgroundColor: 'black', color: '#ffc62a', borderColor: '#ffc62a', margin: 'auto 10px', paddingBottom: '5px', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '42px', fontWeight: 'bold', textAlign: 'center' }}>U</div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default HeaderUserSimulation;
