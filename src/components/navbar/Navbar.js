import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <NavLinks style={linkAnimation}>
            <Link 
                to="main" 
                spy={true}
                smooth={true}
                duration={500}
            >Home</Link>
            <Link 
                to="about"
                spy={true}
                smooth={true}
                duration={500}
            >About</Link>
            <Link 
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
            >Projects</Link>
            <Link 
                to="blog"
                spy={true}
                smooth={true}
                duration={500}
            >Blog</Link>
            <Link 
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
            >Contact</Link>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: none;
  z-index: 21;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: center;
  height: 5rem;

  @media (max-width: 768px) {
      justify-content: start;
  }

`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;