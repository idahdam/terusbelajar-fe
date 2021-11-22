import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";

export const Nav = styled.nav`
  height: 72px;
  width: 100%;
  border-bottom: 2px solid #f2f2f2;
  position: sticky;
  z-index: 1500;
  top: 0;
  background: ${(props) => props.theme.color.orange.A50};
`;

export const NavContent = styled.div`
  width: 65%;
  display: flex;
  margin: 0 auto;
  padding: 10px 0 0 0;
  align-items: center;
  align-self: center;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    width: 85%;
    padding: 15px 0 0 0;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 90%;
    padding: 15px 0 0 0;
  }
`;

export const NavLogo = styled.img`
  width: 100px;
  display: block;
  height: auto;
`;

export const NavItemList = styled.div`
  margin-left: auto;
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  padding: 8px;
  margin: 0 5px;
  border: 1px solid ${(props) => props.theme.color.orange.A50};
  text-align: center;
  font-weight: 500;
  border-radius: 4px;
  min-width: fit-content;
  color: ${(props) => props.theme.color.orange.A500};
  display: block;
  padding: 8px;
  text-align: center;
  font-weight: ${(props) => (props.active ? `bold` : `500`)};
  color: ${(props) =>
    props.active ? `${theme.color.orange.A500}` : `${theme.color.orange.A500}`};
  padding: ${(props) => (props.active ? "10px 5px 15px" : "10px 5px")};
`;

export const NavItemButtonSign = styled(Link)`
  display: block;
  padding: 8px;
  margin: 0 5px;
  border: 1px solid ${(props) => props.theme.color.orange.A500};
  background: ${(props) => props.theme.color.orange.A500};
  text-align: center;
  font-weight: 500;
  border-radius: 4px;
  min-width: 87px;
  height: fit-content;
  color: ${(props) => props.theme.color.white};
`;

export const NavItemButtonLogin = styled(Link)`
  display: block;
  padding: 8px;
  margin: 0 5px;
  border: 1px solid ${(props) => props.theme.color.blue.A900};
  text-align: center;
  font-weight: 500;
  border-radius: 4px;
  height: fit-content;
  min-width: ${({ width }) => width};
  color: ${(props) => props.theme.color.black.A900};
`;

export const NavItemButtonLogout = styled.button`
  display: block;
  padding: 8px;
  margin: 0 5px 10px;
  text-align: center;
  color: red;
  font-weight: 500;
  border-radius: 4px;
  height: fit-content;
  min-width: ${({ width }) => width};
  background: white;
  &:hover {
    background: ${(props) => props.theme.color.black.A50};
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    display: flex;
    margin-left: auto;
    width: fit-content !important;
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;
    color: #909daa;
  }
`;
export const NavbarDropdownContent = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  background: white;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  z-index: 51;
  left: 0;
  transform: scaleY(0);
  transform-origin: top;
`;
export const NavbarProfilePhoto = styled.div`
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin: 0 5px;
  cursor: pointer;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &:hover ${NavbarDropdownContent} {
    top: 100%;
    display: block;
    -webkit-transition: 0.3s ease-out;
    -moz-transition: 0.3s ease-out;
    -o-transition: 0.3s ease-out;
    -ms-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
  }
`;
