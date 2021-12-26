import React from "react";
import {
  SectionFourTemplate,
  SectionFourContainer,
  SectionFourText,
  SectionFourTitle,
  SectionFourDesc,
} from "./styles";

const SectionFour = (props) => {
  return (
    <>
      <SectionFourTemplate>
        <SectionFourContainer>
          {props.data.length !== 0
            ? props.data.map((item) => {
                return (
                  <SectionFourText>
                    <SectionFourTitle>{item.title}</SectionFourTitle>
                    <SectionFourDesc>{item.description}</SectionFourDesc>
                  </SectionFourText>
                );
              })
            : null}
        </SectionFourContainer>
      </SectionFourTemplate>
    </>
  );
};

export default SectionFour;
