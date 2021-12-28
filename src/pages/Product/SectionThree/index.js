import React from "react";
import { TestimonyBox } from "../../../components";
import {
  SectionThreeTestimony,
  SectionThreeTemplate,
  SectionThreeTemplateTestimonies,
  SectionThreeSliderTestimonial,
  SectionThreeTitle,
} from "./styles";

const SectionThree = (props) => {
  // console.log(props.data);
  return (
    <>
      <SectionThreeTemplate>
        <SectionThreeTestimony width={"100%"}>
          <SectionThreeTitle>{props.data.title}</SectionThreeTitle>
          <h6>{props.data.description}</h6>
        </SectionThreeTestimony>
      </SectionThreeTemplate>
      <SectionThreeTemplateTestimonies>
        {props.data.benefit_item.map((item) => {
          return (
            <SectionThreeSliderTestimonial>
              <TestimonyBox
                title={item.title}
                text={item.description}
                program={true}
              />
            </SectionThreeSliderTestimonial>
          );
        })}
      </SectionThreeTemplateTestimonies>
    </>
  );
};

export default SectionThree;
