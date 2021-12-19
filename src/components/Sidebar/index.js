import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarWrapperContainer, SidebarLink, SideBtnWrap, ButtonBottom, SidebarLinkScroll } from "./styles";
import { useLocation } from "react-router-dom";

const Sidebar = ({ toggling, isOpen }) => {
  const { pathname } = useLocation();
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarWrapperContainer>
          <Icon>
            <CloseIcon onClick={toggling} />
          </Icon>

          <SidebarWrapper>
            <SidebarLink to="/" onClick={toggling}>
              <SideBtnWrap>Home</SideBtnWrap>
            </SidebarLink>
            {pathname === "/" ? (
              <SidebarLinkScroll activeClass="active" to="programs" spy={true} smooth={true} offset={-70} duration={500} onClick={toggling}>
                <SideBtnWrap>Program</SideBtnWrap>
              </SidebarLinkScroll>
            ) : null}
            <SidebarLink to="/about-us" onClick={toggling}>
              <SideBtnWrap>About Us</SideBtnWrap>
            </SidebarLink>
          </SidebarWrapper>

          <div style={{ width: "50%", margin: "0 auto" }}>
            <ButtonBottom to="/login" onClick={toggling}>
              Register
            </ButtonBottom>
          </div>
        </SidebarWrapperContainer>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
