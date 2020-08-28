import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
} from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/hlogo.png';

export default function NavbarLay() {
  const location = useLocation();
  const [animate, setAnimate] = React.useState('');
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    logoRef.current.addEventListener('animationend', () => {
      setAnimate('');
    });
  }, []);

  function doAnimation() {
    setAnimate('animate__animated  animate__rubberBand');
  }

  return (
    <Navbar className="sticky-top text-right" color="dark">
      <NavbarBrand href="#top">
        <img
          className={animate}
          ref={logoRef}
          src={Logo}
          alt="Logo"
          style={{ width: '40px' }}
          onClick={() => {
            doAnimation();
          }}
        />
      </NavbarBrand>
      <Nav className="d-none d-md-flex nav-item">
        <NavItem>
          <Link to="/">
            <Button active={location.pathname === '/'} className="mx-1">
              Search
            </Button>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/featured">
            <Button active={location.pathname === '/featured'} className="mx-1">
              Featured
            </Button>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/gallery">
            <Button active={location.pathname === '/gallery'} className="ml-1">
              My Gallery
            </Button>
          </Link>
        </NavItem>
      </Nav>

      <UncontrolledDropdown nav inNavbar className="d-flex d-md-none ">
        <DropdownToggle nav>
          <i className="fas fa-bars fa-2x" />
        </DropdownToggle>

        <DropdownMenu right>
          <DropdownItem>
            <Link to="/">Home Page</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/featured">Featured Page</Link>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/gallery">My Gallery</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Navbar>
  );
}
