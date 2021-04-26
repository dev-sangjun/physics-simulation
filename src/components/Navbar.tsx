import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type NavbarProps = {
  className?: string;
};

const Logo = styled.h1``;

const NavItems = styled.ul`
  list-style: none;
  a {
    text-decoration: none;
    padding: 0.5rem;
    border-bottom: 1px solid transparent;
    transition: border 100ms ease-in-out;
    &:hover {
      border-bottom: 1px solid #2d3436;
    }
  }
`;

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={className}>
      <Logo className="logo">2D Motion Simulation</Logo>
      <NavItems>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
      </NavItems>
    </nav>
  );
};

export default styled(Navbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 2rem;
`;
