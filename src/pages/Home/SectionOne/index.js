import React, { useState } from "react";
import Carousel, { Dots, autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import imageHero from "../../../assets/images/backgroundHero.png";
import { CarouselItem } from "../../../components";
import { SectionOneDiv, SectionOneDivDots, SectionOneDivCarousel } from "./styles";

const SectionOne = () => {
  const [value, setValue] = useState(0);
  const slides = [
    <CarouselItem title="Lorem Ipsum Dolor Sit Amet" titleBold="consectetur" description="Vel sed habitant sed mus et porta dignissim egestas neque sodales sed sit Adatas masurs" buttonTitle="Register" link="/" image={imageHero} />,
    <CarouselItem title="Lorem Ipsum Dolor Sit Amet" titleBold="consectetur" description="Vel sed habitant sed mus et porta dignissim egestas neque sodales sed sit Adatas masurs" buttonTitle="Register" link="/" image={imageHero} />,
  ];
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
