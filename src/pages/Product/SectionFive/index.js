import React from "react";
import { Dropdown } from "../../../components";
import {
  SectionFiveTemplate,
  SectionFiveApart,
  SectionFiveButton,
  SectionFiveDescription,
  SectionFiveContent,
  SectionFiveTitle,
} from "./styles";

const SectionFive = (props) => {
  // console.log(props);
  return (
    <SectionFiveContent>
      <SectionFiveTemplate>
        <SectionFiveApart>
          <SectionFiveTitle>{props.data.title}</SectionFiveTitle>
          <SectionFiveDescription>
            {props.data.description}
          </SectionFiveDescription>
          <SectionFiveButton to="/">{props.data.button}</SectionFiveButton>
        </SectionFiveApart>
        <SectionFiveApart>
          {props.data.faqItems.map((item, index) => {
            return (
              <Dropdown
                num={index + 1}
                name={item.title}
                children={item.description}
              />
            );
          })}
        </SectionFiveApart>
      </SectionFiveTemplate>
    </SectionFiveContent>
  );
};

export default SectionFive;
