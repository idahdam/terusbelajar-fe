import React from "react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import person from "../../../assets/images/person.jpg";
import { TestimonyBox } from "../../../components";
import {
  SectionFourTestimony,
  SectionFourTemplate,
  SectionFourTemplateTestimonies,
  SectionFourSliderTestimonial,
} from "./styles";

const SectionFour = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <SectionFourTemplate>
        <SectionFourTestimony width={"100%"}>
          <h2>Testimonies</h2>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id
            eleifend accumsan nisl, tincidunt.
          </h6>
        </SectionFourTestimony>
      </SectionFourTemplate>
      <SectionFourTemplateTestimonies>
        <SectionFourSliderTestimonial>
          <TestimonyBox
            testi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id
        eleifend accumsan nisl, tincidunt."
            name="Idahdam"
            title="Teknik Komputer - Universitas Indonesia"
            rating="4"
            width="100%"
            image={person}
          />
        </SectionFourSliderTestimonial>
        <SectionFourSliderTestimonial>
          <TestimonyBox
            testi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id
        eleifend accumsan nisl, tincidunt."
            name="Idahdam"
            title="Teknik Komputer - Universitas Indonesia"
            rating="5"
            width="100%"
            image={person}
          />
        </SectionFourSliderTestimonial>
        <SectionFourSliderTestimonial>
          <TestimonyBox
            testi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id
        eleifend accumsan nisl, tincidunt."
            name="Idahdam"
            title="Teknik Komputer - Universitas Indonesia"
            rating="3"
            width="100%"
            image={person}
          />
        </SectionFourSliderTestimonial>
        {/* </Carousel> */}
      </SectionFourTemplateTestimonies>
    </>
  );
};

export default SectionFour;
