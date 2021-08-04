import { NavItem } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;

  user-select: none;
  -webkit-user-drag: none;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  all: unset;
  text-decoration: none;
  color: #f8f9fa;
  padding: 0.3rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  user-select: none;
  border-radius: 0.25rem;
  box-sizing: border-box;
  transition: 0.2s ease;

  ${({ active }) =>
    active &&
    `background-color: rgba(0, 0, 0, 0.02); color: mintcream;
    border-bottom: 1px solid #00bcd4;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: mintcream;
    transform: translateY(-5px);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px 2px #03a9f43d;
  }
`;

export default function NavButton({ path, children }) {
  const location = useLocation();

  return (
    <NavItem>
      <StyledLink to={path} readonly tabindex="-1">
        <Button
          active={location.pathname === path || location.pathname + location.search === path}
          className="mx-2"
        >
          {children}
        </Button>
      </StyledLink>
    </NavItem>
  );
}
