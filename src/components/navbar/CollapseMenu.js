import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";
import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
            <li>
                <Link 
                    onClick={props.handleNavbar}
                    to="main" 
                    spy={true}
                    smooth={true}
                    duration={500}
                >Home</Link>
            </li>
            <li>
                <Link 
                    onClick={props.handleNavbar}
                    to="about" 
                    spy={true}
                    smooth={true}
                    duration={500}
                >About</Link>
            </li>
            <li>
                <Link 
                    onClick={props.handleNavbar}
                    to="projects" 
                    spy={true}
                    smooth={true}
                    duration={500}
                >Projects</Link>
            </li>
            <li>
                <Link 
                    onClick={props.handleNavbar}
                    to="blog" 
                    spy={true}
                    smooth={true}
                    duration={500}
                >Blog</Link>
            </li>
            <li>
                <Link 
                    onClick={props.handleNavbar}
                    to="contact" 
                    spy={true}
                    smooth={true}
                    duration={500}
                >Contact</Link>
            </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #123C69;
  position: absolute;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 25;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;