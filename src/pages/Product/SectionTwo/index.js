import React from "react";
import { RowImageText } from "../../../components";
import homeOne from "../../../assets/images/home1.png";
import homeTwo from "../../../assets/images/home2.png";

const SectionTwo = () => {
  return (
    <>
      <RowImageText
        image={homeOne}
        left={true}
        title="Eu sed egestas quam egestas risus, ornare sit nunc"
        description="Tristique justo quam non id ullamcorper. Vestibulum netus nullam leo a et sit quis arcu non. Quam auctor et aliquam ultricies pellentesque urna. Sed nunc adipiscing tempus donec tristique convallis neque, malesuada diam. Ac suspendisse."
      />
      <RowImageText
        image={homeTwo}
        left={false}
        title="Eu sed egestas quam egestas risus, ornare sit nunc"
        description="Tristique justo quam non id ullamcorper. Vestibulum netus nullam leo a et sit quis arcu non. Quam auctor et aliquam ultricies pellentesque urna. Sed nunc adipiscing tempus donec tristique convallis neque, malesuada diam. Ac suspendisse."
      />
    </>
  );
};

export default SectionTwo;
