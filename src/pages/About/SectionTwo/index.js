import React from "react";
import { SectionTwoTemplate, SectionTwoText, SectionTwoDesc } from "./styles";

const SectionTwo = ({ data }) => {
  // console.log(data.attributes);
  return (
    <>
      <SectionTwoTemplate>
        <SectionTwoText></SectionTwoText>
        <SectionTwoDesc></SectionTwoDesc>
      </SectionTwoTemplate>
    </>
  );
};

export default SectionTwo;
