import React, { useState } from "react";
import logo from "../../assets/images/terusBelajarLogo.png";
// import profilephoto from "../../assets/terusBelajarLogo.png";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContent,
  NavLogo,
  NavItemList,
  NavItem,
  // NavItemButtonLogin,
  // NavItemButtonLogout,
  NavItemButtonSign,
  MobileIcon,
  NavItemScroll,
  NavItemHref,
  // NavbarDropdownContent,
  // NavbarProfilePhoto,
} from "./styles";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  // const [navbar, setNavbar] = useState(false);
  // const history = useNavigate();
  const [home, setHome] = useState(true);
  const [program, setProgram] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);
  const location = useLocation();
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
          {pathname === "/" ? (
            <NavItemScroll
              activeClass="active"
              to="heroHome"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              active={home}
              onClick={() => {
                setHome(true);
                setProgram(false);
                setAboutUs(false);
              }}
            >
              Home
            </NavItemScroll>
          ) : (
            <NavItem
              to="/"
              active={home}
              onClick={() => {
                setHome(true);
                setProgram(false);
                setAboutUs(false);
              }}
            >
              Home
            </NavItem>
          )}
          {pathname === "/" ? (
            <NavItemScroll
              activeClass="active"
              to="programs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              active={program}
              onClick={() => {
                setHome(false);
                setProgram(true);
                setAboutUs(false);
              }}
            >
              Program
            </NavItemScroll>
          ) : null}

          <NavItem
            to="/about-us"
            active={aboutUs}
            onClick={() => {
              setHome(false);
              setProgram(false);
              setAboutUs(true);
            }}
          >
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
