import React, { useContext, useState } from "react";
import { Header1 } from "../../styling/Headers";
import styled, { css, withTheme } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { AppContext } from "../../Contexts";
import { useHistory, useLocation } from "react-router-dom";
import Hamburger from "../Hamburger";
import { Checkbox, XSvg } from "../../SvgMaster";
import {
  SidebarContainer,
  SidebarItem,
  SidebarItemButton,
  SidebarList,
} from "../../styling/GeneralComponents";

function LessonsSidebar({
  setIsSideNavShowing,
  isSideNavShowing,
  solutionObjs,
  theme,
}) {
  const { isDarkMode } = useContext(AppContext);
  const location = useLocation();
  const history = useHistory();

  function handleClick(path) {
    if (location.pathname !== path) history.push(path);
    setIsSideNavShowing(false);
  }

  const sideBarData = [
    ["Grid Creation", "/learn"],
    ["Item Placement", "/learn/2"],
    ["Grid Areas", "/learn/3"],
    ["Grid Gap/fr unit", "/learn/4"],
  ];
  const sideBarItems = sideBarData.map((text, index) => {
    function solveStatus() {
      if (
        solutionObjs !== null &&
        solutionObjs[index] !== undefined &&
        solutionObjs[index] !== null
      ) {
        if (solutionObjs[index].isSolved) {
          return (
            <Checkbox
              height="28px"
              width="28px"
              fill={isDarkMode ? "#4bf285" : "#33ae29"}
            />
          );
        } else {
          return <XSvg height="28px" width="28px" fill="#d92020" />;
        }
      }
      return <span />;
    }

    return (
      <SidebarItem>
        <SidebarItemButton
          selected={location.pathname === text[1]}
          onClick={() => {
            handleClick(text[1]);
          }}
        >
          {text[0]}
          {solveStatus()}
        </SidebarItemButton>
      </SidebarItem>
    );
  });

  return (
    <SidebarContainer
      isSideNavShowing={isSideNavShowing}
      initial={{
        padding: "14px 12px 12px 10px",
      }}
      animate={
        isSideNavShowing
          ? { width: 230, height: 370, boxShadow: theme.misc.shadow }
          : {
              width: 52,
              height: 52,
              boxShadow: theme.misc.shadow,
            }
      }
    >
      <HamburgerWrapper isSideNavShowing={isSideNavShowing}>
        <Hamburger
          sideNav={isSideNavShowing}
          setSideNav={setIsSideNavShowing}
          height="3px"
          width="24px"
        />
      </HamburgerWrapper>
      <AnimatePresence>
        {isSideNavShowing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Header1 margin={"0"} padding={"0rem .75rem"}>
              Lessons
            </Header1>
            <SidebarList>{sideBarItems}</SidebarList>
          </motion.div>
        )}
      </AnimatePresence>
    </SidebarContainer>
  );
}

const HamburgerWrapper = styled.button`
  border: 0;
  padding: 0;
  ${(props) =>
    props.isSideNavShowing &&
    css`
      top: 0.25rem;
      right: 0.25rem;
    `}

  position: absolute;
  background: transparent;
`;

export default withTheme(LessonsSidebar);
