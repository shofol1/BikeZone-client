import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const{logingOut,user}=useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">BikesZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
            {user.email&&
              <Nav.Link as={Link} to="/dashboard">DashBoard</Nav.Link>}
              {
                user.email&&
                <Nav.Link className="text-white">{(user.displayName)}</Nav.Link>
              }
            {!user.email?
              <Nav.Link as={Link} to="/login">Login</Nav.Link>:
            <Nav.Link onClick={logingOut} as={Link} to="/explore">Logout</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;