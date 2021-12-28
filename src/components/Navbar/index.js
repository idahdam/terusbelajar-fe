import React, { useState, useEffect } from "react";
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
  // NavbarDropdownContent,
  // NavbarProfilePhoto,
} from "./styles";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  // const [navbar, setNavbar] = useState(false);
  // const history = useNavigate();
  const [home, setHome] = useState(false);
  const [program, setProgram] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);
  const { pathname } = useLocation();
  // console.log(pathname);
  useEffect(() => {
    if (pathname === "/") {
      setHome(true);
      setProgram(false);
      setAboutUs(false);
    } else if (pathname === "/about-us") {
      setHome(false);
      setAboutUs(true);
      setProgram(false);
    } else {
      setHome(false);
      setAboutUs(false);
      setProgram(true);
    }
  }, []);
  return (
    <Nav>
      <NavContent>
        <Link
          style={{ display: "block" }}
          to="/"
          onClick={() => {
            setHome(true);
            setProgram(false);
            setAboutUs(false);
          }}
        >
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
          <NavItemButtonSign href="https://wa.me/6287871770818">
            Contact Us
          </NavItemButtonSign>
        </NavItemList>
      </NavContent>
    </Nav>
  );
};

export default Navbar;
