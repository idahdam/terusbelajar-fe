import React, { useState, useEffect } from "react";
import logo from "../../assets/terusBelajarLogo.png";
import profilephoto from "../../assets/terusBelajarLogo.png";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContent,
  NavLogo,
  NavItemList,
  NavItem,
  NavItemButtonLogin,
  NavItemButtonLogout,
  NavItemButtonSign,
  MobileIcon,
  NavbarDropdownContent,
  NavbarProfilePhoto,
} from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [navbar, setNavbar] = useState(false);
  //   const auth = useSelector((state) => state.auth);
  const history = useNavigate();
  const location = useLocation();
  //   useEffect(() => {
  //     const navbarState = async () => {
  //       const state = auth.isAuthenticated;
  //       if (!state) {
  //         setNavbar(false);
  //       } else {
  //         setNavbar(true);
  //       }
  //     };
  //     navbarState();
  //   }, [auth]);
  //   const logout = async () => {
  //     props.logout();
  //     if (location.pathname === "/") {
  //       window.location.reload();
  //     } else {
  //       history.push("/");
  //     }
  //   };
  const { pathname } = useLocation();

  return (
    <Nav>
      <NavContent>
        <Link style={{ display: "block" }} to="/">
          <NavLogo src={logo} alt="Logo Terus Belajar" />
        </Link>
        <MobileIcon>
          <FaBars onClick={props.toggling} />
        </MobileIcon>
        <NavItemList>
          <NavItem to="/" active={pathname === "/"}>
            Home
          </NavItem>
          <NavItem
            to="/program"
            active={
              pathname === "/program" || pathname.includes("/g-incubation")
            }
          >
            Program
          </NavItem>
          <NavItem to="/about-us" active={pathname === "/about-us"}>
            About Us
          </NavItem>
          <NavItemButtonSign to="/register">Register</NavItemButtonSign>
        </NavItemList>
      </NavContent>
    </Nav>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     authentication: state.auth,
//     error: state.error,
//   };
// };

// export default connect(mapStateToProps, { logout })(Navbar);
export default Navbar;
