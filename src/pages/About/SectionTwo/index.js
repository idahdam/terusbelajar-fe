import React from "react";
import { SectionTwoTemplate, SectionTwoText, SectionTwoDesc } from "./styles";

const SectionTwo = (props) => {
  // console.log(data.attributes);
  return (
    <>
      <SectionTwoTemplate>
        <SectionTwoText>{props.data.vision_title}</SectionTwoText>
        <SectionTwoDesc>{props.data.vision_description}</SectionTwoDesc>
      </SectionTwoTemplate>
    </>
  );
};

export default SectionTwo;
