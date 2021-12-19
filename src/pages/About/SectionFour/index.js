import React from "react";
import { SectionFourTemplate, SectionFourContainer, SectionFourText, SectionFourTitle, SectionFourDesc } from "./styles";

const SectionFour = () => {
  return (
    <>
      <SectionFourTemplate>
        <SectionFourContainer>
          <SectionFourText>
            <SectionFourTitle>100.000</SectionFourTitle>
            <SectionFourDesc>Lorem Ipsum Sit Dolor Amet Vestibulum netus nullam leo a et sit quis arcu non.</SectionFourDesc>
          </SectionFourText>
          <SectionFourText>
            <SectionFourTitle>5 Country</SectionFourTitle>
            <SectionFourDesc>Lorem Ipsum Sit Dolor Amet Vestibulum netus nullam leo a et sit quis arcu non.</SectionFourDesc>
          </SectionFourText>
          <SectionFourText>
            <SectionFourTitle>100+ Mentors</SectionFourTitle>
            <SectionFourDesc>Lorem Ipsum Sit Dolor Amet Vestibulum netus nullam leo a et sit quis arcu non.</SectionFourDesc>
          </SectionFourText>
        </SectionFourContainer>
      </SectionFourTemplate>
    </>
  );
};

export default SectionFour;
