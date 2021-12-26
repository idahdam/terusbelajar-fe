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
          <SectionFourTitle>Yuk Buruan Gabung!</SectionFourTitle>
          <h6>
            Dapetin cerita dari kampus kampus terbaik dan pelatihan pengembangan
            diri langsung dari mahasiswa mahasiswi berpengalaman dari seluruh
            Indonesia!
          </h6>
        </SectionFourTestimony>
      </SectionFourTemplate>
      <SectionFourTemplateTestimonies>
        {props.data.map((item) => {
          return (
            <SectionFourSliderTestimonial>
              <TestimonyBox
                title={item.title}
                text={item.description}
                image={item.image}
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
