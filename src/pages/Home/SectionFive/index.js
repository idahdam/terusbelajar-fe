import React from "react";
import { Dropdown } from "../../../components";
import { SectionFiveTemplate, SectionFiveApart, SectionFiveButton, SectionFiveDescription, SectionFiveContent, SectionFiveTitle } from "./styles";

const SectionFive = () => {
  return (
    <SectionFiveContent>
      <SectionFiveTemplate>
        <SectionFiveApart>
          <SectionFiveTitle>FAQ</SectionFiveTitle>
          <SectionFiveDescription>Condimentum leo tincidunt malesuada enim, sagittis, vestibulum amet in. Lorem sed sit lectus massa risus, nibh.</SectionFiveDescription>
          <SectionFiveButton to="/">Hubungi Kami</SectionFiveButton>
        </SectionFiveApart>
        <SectionFiveApart>
          <Dropdown num="1" name="Hello" children="Lorem ipsum" />
          <Dropdown num="1" name="Hello" children="Lorem ipsum" />
          <Dropdown num="1" name="Hello" children="Lorem ipsum" />
        </SectionFiveApart>
      </SectionFiveTemplate>
    </SectionFiveContent>
  );
};

export default SectionFive;
