import React from "react";
import { BottomText } from "../../../components";
import aboutUsThree from "../../../assets/images/aboutUs3.png";

const SectionFive = () => {
  return (
    <>
      <BottomText image={aboutUsThree} split={true} text={"Eu sed egestas quam egestas risus, ornare sit nunc"} left={false} button={"Join Us"} link={"register"} />
    </>
  );
};

export default SectionFive;
