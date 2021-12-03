import React from "react";
import aboutUsImg from "../../../assets/images/aboutUs.png";
import { SectionOneImage, SectionOneText } from "./styles";

const SectionOne = () => {
  return (
    <SectionOneImage src={aboutUsImg}>
      <SectionOneText>About Us</SectionOneText>
    </SectionOneImage>
  );
};

export default SectionOne;
