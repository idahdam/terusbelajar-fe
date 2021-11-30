import React from "react";
import { SectionSixTemplate, SectionSixButton, SectionSixTemplateButton, SectionSixText } from "./styles";

const SectionSix = () => {
  return (
    <>
      <SectionSixTemplate>
        <SectionSixText>Dolor arcu, nisi, id habitant ac. Cursus cum quis velit facilisis. Nunc id dolor egestas pellentesque</SectionSixText>
      </SectionSixTemplate>
      <SectionSixTemplateButton>
        <SectionSixButton to="/">Register</SectionSixButton>
      </SectionSixTemplateButton>
    </>
  );
};

export default SectionSix;
