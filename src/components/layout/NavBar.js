import { useState, useRef, useEffect } from 'react';
import { Navbar, NavbarBrand, Nav, Button, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useScrollPosition from '../../hooks/useScrollPosition';
import MobileMenu from '../MobileMenu';
import NavButton from '../NavButton';

const LogoSrc = '/assets/hlogo.png';

const StyledNavbar = styled(Navbar)`
  background-color: ${({ $scrolled }) =>
    $scrolled ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.04)'};
  transition: background-color 0.2s ease-in-out;
`;

const Logo = styled.img`
  image-rendering: -webkit-optimize-contrast;
  width: 40px;
  opacity: 0.9;
`;

export default function NavbarLayout() {
  const [animate, setAnimate] = useState('');
  const logoRef = useRef(null);

  const scrolled = useScrollPosition();

  useEffect(() => {
    logoRef.current.addEventListener('animationend', () => {
      setAnimate('');
    });
  }, []);

  function doAnimation() {
    setAnimate('animate__animated  animate__rubberBand');
  }

  return (
    <StyledNavbar className="fixed-top text-right" $scrolled={scrolled}>
      <NavbarBrand tag="div">
        <Link to="/?to=top">
          <Logo
            className={animate}
            ref={logoRef}
            src={LogoSrc}
            alt="Logo"
            onClick={() => {
              doAnimation();
            }}
          />
        </Link>
      </NavbarBrand>
      <Nav className="d-none d-md-flex nav-item">
        <NavButton path="/?to=search"> Search</NavButton>
        <NavButton path="/featured"> Featured</NavButton>
        <NavButton path="/gallery"> My Gallery</NavButton>
      </Nav>

      <MobileMenu />
    </StyledNavbar>
  );
}
