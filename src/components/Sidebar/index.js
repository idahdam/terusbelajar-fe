import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarWrapperContainer,
  SidebarLink,
  SideBtnWrap,
  ButtonBottom,
} from "./styles";

const Sidebar = ({ toggling, isOpen }) => {
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

            <SidebarLink to="/program" onClick={toggling}>
              <SideBtnWrap>{/*<ShoppingCartIcon />*/}Program</SideBtnWrap>
            </SidebarLink>

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
