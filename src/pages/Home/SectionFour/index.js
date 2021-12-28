import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { TestimonyBox } from "../../../components";
import {
  SectionFourTestimony,
  SectionFourTemplate,
  SectionFourTemplateTestimonies,
  SectionFourSliderTestimonial,
  SectionFourTitle,
} from "./styles";
import quotationMark from "../../../assets/images/quotationMark.png";

const SectionFour = (props) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <SectionFourTemplate>
        <SectionFourTestimony width={"80%"} src={quotationMark}>
          <SectionFourTitle>
            Hadir Untuk Memudahkanmu Terus Belajar
          </SectionFourTitle>
          <h6>
            Berawal dari mimpi sederhana untuk membantu ribuan pelajar di
            Indonesia untuk terus belajar hingga di tingkat perkuliahan, kami
            hadir untuk bisa memudahkanmu mempersiapkan diri berkuliah di kampus
            impian!
          </h6>
        </SectionFourTestimony>
      </SectionFourTemplate>
      <SectionFourTemplateTestimonies>
        <Carousel
          value={value}
          slides={props.data.map((item) => {
            return (
              <SectionFourSliderTestimonial>
                <TestimonyBox
                  testi={item.description}
                  name={item.name}
                  title={item.position}
                  width="100%"
                  image={item.image.data.attributes.url}
                />
              </SectionFourSliderTestimonial>
            );
          })}
          onChange={setValue}
          plugins={[
            "infinite",
            // {
            //   resolve: autoplayPlugin,
            //   options: {
            //     interval: 5000,
            //   },
            // },
          ]}
          animationSpeed={1000}
        />
      </SectionFourTemplateTestimonies>
      <Dots value={value} onChange={setValue} number={props.data.length} />
    </>
  );
};

export default SectionFour;
