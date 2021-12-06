import React from "react";
import { TestimonyBox } from "../../../components";
import person from "../../../assets/images/person.jpg";
import { SectionFourTestimony, SectionFourTemplate, SectionFourTemplateTestimonies, SectionFourSliderTestimonial, SectionFourTitle } from "./styles";

const SectionFour = () => {
  return (
    <>
      <SectionFourTemplate>
        <SectionFourTestimony width={"100%"}>
          <SectionFourTitle>Why Us?</SectionFourTitle>
          <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id eleifend accumsan nisl, tincidunt.</h6>
        </SectionFourTestimony>
      </SectionFourTemplate>
      <SectionFourTemplateTestimonies>
        <SectionFourSliderTestimonial>
          <TestimonyBox
            title="Lorem Ipsum Sit Dolor"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id
        eleifend accumsan nisl, tincidunt."
            width="100%"
            image={person}
            program={true}
          />
        </SectionFourSliderTestimonial>
        <SectionFourSliderTestimonial>
          <TestimonyBox
            title="Lorem Ipsum Sit Dolor"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id
        eleifend accumsan nisl, tincidunt."
            width="100%"
            image={person}
            program={true}
          />
        </SectionFourSliderTestimonial>
        <SectionFourSliderTestimonial>
          <TestimonyBox
            title="Lorem Ipsum Sit Dolor"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id
        eleifend accumsan nisl, tincidunt."
            width="100%"
            image={person}
            program={true}
          />
        </SectionFourSliderTestimonial>
      </SectionFourTemplateTestimonies>
    </>
  );
};

export default SectionFour;
