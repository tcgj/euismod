import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";
import "../../styling/App.css";
import { Header1, Header2 } from "../../styling/Headers";
import { Link, NavLink, useLocation } from "react-router-dom";
import { buttonVariants } from "../../styling/variants";
import { Moon, Sun } from "../../SvgMaster";
import { motion } from "framer-motion";

function Navbar({ isDarkMode, setIsDarkMode, size }) {
  let location = useLocation();

  const navAnimation = () => {
    if (location.pathname === "/learn") {
      return { padding: "0 1rem" };
    } else if (location.pathname === "/" && size.width <= 768) {
      return { padding: "0rem 1rem" };
    } else {
      return { padding: "0 6rem" };
    }
  };

  /*const navAnimation =
            currentPath === "/learn" ? { padding: "0 1rem" } : { padding: "0 6rem" };*/

  return (
    <Nav initial={{ padding: "0 6rem" }} animate={navAnimation}>
      <Link to="/" className="no-underline">
        <Header1>Euismod</Header1>
      </Link>
      <FlexContainer>
        <StyledNavLink to="/learn" className="no-underline">
          Learn
        </StyledNavLink>
        <StyledNavLink to="/quiz" className="no-underline">
          Quiz
        </StyledNavLink>

        <DarkModeButton
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        >
          {isDarkMode ? (
            <Moon height="26" width="26" />
          ) : (
            <Sun height="26" width="26" />
          )}
        </DarkModeButton>
      </FlexContainer>
    </Nav>
  );
}

const Nav = styled(motion.nav)`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  color: white;
  background: transparent;
  display: flex;

  /*padding: ${(props) =>
    props.currentPath === "/learn" ? "0 1rem" : "0 6rem"} ;*/
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
 
  /*transition: padding 150ms ease-in-out;*/
  /*@media screen and (max-width: 500px) {
    padding: 0 3rem;
    !*transition: padding 150ms ease-in-out;*!
  }*/
`;

const activeClassName = "nav-item-active";

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  color: ${(props) => props.theme.colors.disabled};
  font-size: 1.5em;
  margin: 0.5rem 0.5rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: normal;
  transition: 300ms;

  &.${activeClassName} {
    transition: 300ms;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const DarkModeButton = styled(motion.button)`
  background: transparent;
  border: 0;
  padding: 0;
  height: 26px;
  width: 26px;
  margin: 0 1rem;
`;

const FlexContainer = styled.section`
  display: flex;
  align-items: center;
`;

export default withTheme(Navbar);