import { Link } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

export default function MobileMenu() {
  return (
    <UncontrolledDropdown
      nav
      inNavbar
      className="d-flex d-md-none animate__animated  animate__fadeInRightBig"
    >
      <DropdownToggle nav>
        <i className="fas fa-bars fa-2x" />
      </DropdownToggle>

      <DropdownMenu right tag="div" className="animate__animated  animate__bounceInDown">
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
  );
}
