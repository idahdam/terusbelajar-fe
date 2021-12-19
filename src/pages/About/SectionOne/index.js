import React from "react";
import aboutUsImg from "../../../assets/images/aboutUsHero.png";
import aboutUsMobile from "../../../assets/images/aboutUsMobile.png";
import { SectionOneImage, SectionOneText } from "./styles";

const SectionOne = () => {
  return (
    <SectionOneImage src={aboutUsImg} srcMobile={aboutUsMobile}>
      <SectionOneText>About Us</SectionOneText>
    </SectionOneImage>
  );
};

export default SectionOne;
