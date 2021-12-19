import React from "react";
import { TestimonyBox } from "../../../components";
import { SectionFourTestimony, SectionFourTemplate, SectionFourTemplateTestimonies, SectionFourSliderTestimonial, SectionFourTitle } from "./styles";

const SectionFour = (props) => {
  return (
    <>
      <SectionFourTemplate>
        <SectionFourTestimony width={props.data.width}>
          <SectionFourTitle>{props.data.title}</SectionFourTitle>
          <h6>{props.data.description}</h6>
        </SectionFourTestimony>
      </SectionFourTemplate>
      <SectionFourTemplateTestimonies>
        {props.data.cards.map((item) => {
          return (
            <SectionFourSliderTestimonial>
              <TestimonyBox title={item.title} text={item.description} width={item.width} image={item.image} program={item.program} italic={item.italic} />
            </SectionFourSliderTestimonial>
          );
        })}
      </SectionFourTemplateTestimonies>
    </>
  );
};

export default SectionFour;
