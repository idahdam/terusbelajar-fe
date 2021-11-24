import React from "react";
import { SectionSixTemplate, SectionSixButton } from "./styles";

const SectionSix = () => {
  return (
    <>
      <SectionSixTemplate>
        <h2>
          Dolor arcu, nisi, id habitant ac. Cursus cum quis velit facilisis.
          Nunc id dolor egestas pellentesque
        </h2>
        <br />
        <br />
        <br />
        {/* <SectionSixButton to="/">Register</SectionSixButton> */}
      </SectionSixTemplate>
      <SectionSixTemplate>
        <SectionSixButton to="/">Register</SectionSixButton>
      </SectionSixTemplate>
    </>
  );
};

export default SectionSix;
