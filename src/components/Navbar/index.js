import React from "react";
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
          <NavItem to="/" active={pathname === "/"}>
            Home
          </NavItem>
          {pathname === "/" ? (
            <NavItemScroll
              activeClass="active"
              to="programs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              active={pathname === "/program" || pathname.includes("/program")}
            >
              Program
            </NavItemScroll>
          ) : null}

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
