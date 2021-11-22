import React from "react";
// import logo from "../../assets/logoGclassFooter.png";
import { FaPhoneAlt, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiTiktok, SiInstagram } from "react-icons/si";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";
import {
  Footers,
  FooterTemplate,
  FooterLogo,
  FooterInfo,
  FooterMoreInfo,
  FooterContent,
  FooterLine,
  FooterSocmed,
} from "./styles";

const Footer = () => {
  return (
    <Footers>
      {/* <FooterTemplate need>
        <FooterInfo>
          <FooterLogo src={logo} alt="Gclass Logo" />
          <h6>
            Jl. Mampang Prapatan Raya No. 73A Lantai 3 RT 010/002, Kel. Tegal
            Parang, Kec. Mampang Prapatan, Jakarta Selatan 12790
          </h6>
          <FooterMoreInfo>
            <FaPhoneAlt />
            <h6 style={{ marginRight: "20px" }}>+628197868888</h6>
            <GrMail />
            <h6>support@globalclass.id</h6>
          </FooterMoreInfo>
        </FooterInfo>
        <FooterContent>
          <div>
            <h3>Tentang</h3>
            <Link to="/about-us" style={{ padding: "0" }}>
              <h6 className="nopad">Tentang Kami</h6>
            </Link>
          </div>
        </FooterContent>
        <FooterContent>
          <div>
            <h3>Produk</h3>
            <Link to="/g-incubation" style={{ padding: "0" }}>
              <h6 className="nopad">G Incubation</h6>
            </Link>
            <Link to="/g-events" style={{ padding: "0" }}>
              <h6 className="nopad">G Events</h6>
            </Link>
          </div>
        </FooterContent>
      </FooterTemplate>
      <FooterLine /> */}
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
