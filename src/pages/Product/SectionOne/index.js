import React, { useState } from "react";
import Carousel, { Dots, autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { CarouselItem } from "../../../components";
import {
  SectionOneDiv,
  SectionOneDivDots,
  SectionOneDivCarousel,
} from "./styles";

const SectionOne = (props) => {
  const [value, setValue] = useState(0);
  const slides = props.data.map((item) => {
    return (
      <>
        <CarouselItem
          title={item.title}
          titleBold={item.title}
          description={item.description}
          buttonTitle={item.button}
          link={item.Link}
          image={item.hero_image.data.attributes.url}
        />
        ,
      </>
    );
  });
  return (
    <SectionOneDiv>
      <SectionOneDivCarousel>
        <Carousel
          value={value}
          slides={slides}
          onChange={setValue}
          plugins={[
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 3000,
              },
            },
          ]}
          animationSpeed={1000}
        />
      </SectionOneDivCarousel>
      <SectionOneDivDots>
        <Dots value={value} onChange={setValue} number={slides.length} />
      </SectionOneDivDots>
    </SectionOneDiv>
  );
};

export default SectionOne;
