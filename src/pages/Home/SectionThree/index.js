import React from "react";
// import { Dropdown } from "../../../components";
import {
  SectionFiveTemplate,
  SectionFiveApart,
  SectionFiveButton,
  SectionFiveDescription,
  SectionFiveContent,
} from "./styles";

const SectionThree = () => {
  return (
    <SectionFiveContent>
      <SectionFiveTemplate>
        <SectionFiveApart>
          <h2>Program</h2>
          <SectionFiveDescription>
            Condimentum leo tincidunt malesuada enim, sagittis, vestibulum amet
            in. Lorem sed sit lectus massa risus, nibh.
          </SectionFiveDescription>
          <SectionFiveButton to="/">Register</SectionFiveButton>
        </SectionFiveApart>
        <SectionFiveApart>
          {/* <Dropdown num="1" name="Hello" children="Lorem ipsum" />
          <Dropdown num="1" name="Hello" children="Lorem ipsum" />
          <Dropdown num="1" name="Hello" children="Lorem ipsum" /> */}
        </SectionFiveApart>
      </SectionFiveTemplate>
    </SectionFiveContent>
  );
};

export default SectionThree;
