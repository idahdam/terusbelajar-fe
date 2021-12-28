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
  return (
    <SectionFiveContent>
      <SectionFiveTemplate>
        <SectionFiveApart>
          <SectionFiveTitle>{props.data[0].title}</SectionFiveTitle>
          <SectionFiveDescription>
            {props.data[0].description}
          </SectionFiveDescription>
          <SectionFiveButton href="https://wa.me/6287871770818">
            {props.data[0].button}
          </SectionFiveButton>
        </SectionFiveApart>
        <SectionFiveApart>
          {props.data[0].faqItems.map((item, index) => {
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
