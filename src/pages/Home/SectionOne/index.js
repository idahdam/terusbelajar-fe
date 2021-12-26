import React, { useState } from "react";
import Carousel, { Dots, autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import imageHero from "../../../assets/images/backgroundHero.png";
import { CarouselItem } from "../../../components";
import {
  SectionOneDiv,
  SectionOneDivDots,
  SectionOneDivCarousel,
} from "./styles";

const SectionOne = (props) => {
  const [value, setValue] = useState(0);

  return (
    <SectionOneDiv id="heroHome">
      <SectionOneDivCarousel>
        <Carousel
          value={value}
          slides={props.data.map((item) => {
            return (
              <CarouselItem
                title={item.title}
                titleBold={item.title}
                description={item.description}
                buttonTitle={item.button}
                link={item.Link}
                image={item.hero_image.data.attributes.url}
              />
            );
          })}
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
        <Dots value={value} onChange={setValue} number={props.data.length} />
      </SectionOneDivDots>
    </SectionOneDiv>
  );
};

export default SectionOne;
