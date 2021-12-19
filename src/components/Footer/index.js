import React from "react";
// import logo from "../../assets/logoGclassFooter.png";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiTiktok, SiInstagram } from "react-icons/si";
// import { GrMail } from "react-icons/gr";
// import { Link } from "react-router-dom";
import {
  Footers,
  FooterTemplate,
  // FooterLogo,
  // FooterInfo,
  // FooterMoreInfo,
  // FooterContent,
  // FooterLine,
  FooterSocmed,
} from "./styles";

const Footer = () => {
  return (
    <Footers>
      <FooterTemplate>
        <h6 className="nopad">
          Copyrights {new Date().getFullYear()} Terus Belajar
        </h6>
        <FooterSocmed>
          <a href="https://www.linkedin.com/">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/">
            <SiInstagram />
          </a>
          <a href="https://www.tiktok.com">
            <SiTiktok />
          </a>
          <a href="https://wa.me/XXXX">
            <FaWhatsapp />
          </a>
        </FooterSocmed>
      </FooterTemplate>
    </Footers>
  );
};

export default Footer;
