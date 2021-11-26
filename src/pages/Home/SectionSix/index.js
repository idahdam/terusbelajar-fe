import React from "react";
import {
  SectionSixTemplate,
  SectionSixButton,
  SectionSixTemplateButton,
} from "./styles";

const SectionSix = () => {
  return (
    <>
      <SectionSixTemplate>
        <h2>
          Dolor arcu, nisi, id habitant ac. Cursus cum quis velit facilisis.
          Nunc id dolor egestas pellentesque
        </h2>
      </SectionSixTemplate>
      <SectionSixTemplateButton>
        <SectionSixButton to="/">Register</SectionSixButton>
      </SectionSixTemplateButton>
    </>
  );
};

export default SectionSix;
