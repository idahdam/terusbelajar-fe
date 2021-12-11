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
          <SectionFiveTitle>{props.data.title}</SectionFiveTitle>
          <SectionFiveDescription>
            {props.data.description}
          </SectionFiveDescription>
          <SectionFiveButton to={`${props.data.link}`}>
            {props.data.button}
          </SectionFiveButton>
        </SectionFiveApart>
        <SectionFiveApart>
          {props.data.items.map((item) => {
            return (
              <Dropdown
                num={item.num}
                name={item.name}
                children={item.children}
              />
            );
          })}
        </SectionFiveApart>
      </SectionFiveTemplate>
    </SectionFiveContent>
  );
};

export default SectionFive;
