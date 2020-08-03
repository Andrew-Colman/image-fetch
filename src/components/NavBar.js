import React from 'react';
import { Navbar, NavbarBrand, Nav, Col, Row, Button } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/hlogo.png';

export default function NavbarLay() {
  const location = useLocation();
  return (
    <Row className="sticky-top text-right">
      <Col sm="12">
        <Navbar color="dark">
          <NavbarBrand href="#top">
            <img src={Logo} alt="Logo" style={{ width: '40px' }} />
          </NavbarBrand>

          <Nav className="">
            <Link exact to="/">
              <Button active={location.pathname === '/'} className="mx-1">
                Search
              </Button>
            </Link>

            <Link exact to="/featured">
              <Button active={location.pathname === '/featured'} className="mx-1">
                Featured
              </Button>
            </Link>

            <Link to="/gallery">
              <Button active={location.pathname === '/gallery'} className="mx-1">
                My Gallery
              </Button>
            </Link>
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );
}
