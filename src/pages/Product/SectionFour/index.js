import React from "react";
import { TestimonyBox } from "../../../components";
import {
  SectionFourTestimony,
  SectionFourTemplate,
  SectionFourTemplateTestimonies,
  SectionFourSliderTestimonial,
  SectionFourTitle,
} from "./styles";

const SectionFour = (props) => {
  // console.log(props.data);
  return (
    <>
      <SectionFourTemplate>
        <SectionFourTestimony width={"100%"}>
          <SectionFourTitle>{props.data.title}</SectionFourTitle>
          <h6>{props.data.description}</h6>
        </SectionFourTestimony>
      </SectionFourTemplate>
      <SectionFourTemplateTestimonies>
        {props.data.benefit_item.map((item) => {
          return (
            <SectionFourSliderTestimonial>
              <TestimonyBox
                title={item.title}
                text={item.description}
                program={true}
              />
            </SectionFourSliderTestimonial>
          );
        })}
      </SectionFourTemplateTestimonies>
    </>
  );
};

export default SectionFour;
