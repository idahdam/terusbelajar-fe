import React from "react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import person from "../../../assets/images/person.jpg";
import { TestimonyBox } from "../../../components";
import { SectionFourTestimony, SectionFourTemplate, SectionFourTemplateTestimonies, SectionFourSliderTestimonial, SectionFourTitle } from "./styles";
import quotationMark from "../../../assets/images/quotationMark.png";

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
        <SectionFourTestimony width={"80%"} src={quotationMark}>
          <SectionFourTitle>Hadir Untuk Memudahkanmu Terus Belajar</SectionFourTitle>
          <h6>Berawal dari mimpi sederhana untuk membantu ribuan pelajar di Indonesia untuk terus belajar hingga di tingkat perkuliahan, kami hadir untuk bisa memudahkanmu mempersiapkan diri berkuliah di kampus impian!</h6>
        </SectionFourTestimony>
      </SectionFourTemplate>
      <SectionFourTemplateTestimonies>
        <SectionFourSliderTestimonial>
          <TestimonyBox
            testi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id
        eleifend accumsan nisl, tincidunt."
            name="Salman Al Fathan
            (Chief Executive Officer)
            "
            title="Ketua BEM FISIP UI 2020"
            rating="4"
            width="100%"
            image={person}
          />
        </SectionFourSliderTestimonial>
        <SectionFourSliderTestimonial>
          <TestimonyBox
            testi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id
        eleifend accumsan nisl, tincidunt."
            name="Rifqi Muzakki
            (Product Developer Manager Study Abroad)
            "
            title="Presiden PPIA Queensland 2019 "
            rating="5"
            width="100%"
            image={person}
          />
        </SectionFourSliderTestimonial>
        <SectionFourSliderTestimonial>
          <TestimonyBox
            testi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id
        eleifend accumsan nisl, tincidunt."
            name="Yudi Iswara Adhyaksa
            (Product Developer Manager Eksplorasi Kampus)
            "
            title="Wisudawan Terbaik FISIP UI 2021"
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
