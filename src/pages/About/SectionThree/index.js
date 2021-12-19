import React from "react";
import { RowImageText } from "../../../components";
import aboutUsOne from "../../../assets/images/aboutUs1.png";
import aboutUsTwo from "../../../assets/images/aboutUs2.png";

const SectionThree = () => {
  return (
    <div>
      <RowImageText
        image={aboutUsOne}
        left={true}
        title="Eu sed egestas quam egestas risus, ornare sit nunc"
        description="Tristique justo quam non id ullamcorper. Vestibulum netus nullam leo a et sit quis arcu non. Quam auctor et aliquam ultricies pellentesque urna. Sed nunc adipiscing tempus donec tristique convallis neque, malesuada diam. Ac suspendisse."
      />
      <RowImageText
        image={aboutUsTwo}
        left={false}
        title="Eu sed egestas quam egestas risus, ornare sit nunc"
        description="Tristique justo quam non id ullamcorper. Vestibulum netus nullam leo a et sit quis arcu non. Quam auctor et aliquam ultricies pellentesque urna. Sed nunc adipiscing tempus donec tristique convallis neque, malesuada diam. Ac suspendisse."
      />
    </div>
  );
};

export default SectionThree;
