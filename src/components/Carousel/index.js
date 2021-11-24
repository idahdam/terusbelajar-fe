import React, { useState, useEffect } from "react";
import theme from "../../styles/theme";
// import homeBanner from "../../../assets/homeBanner.png";
import {
  CarouselTemplate,
  CarouselHeader,
  CarouselHighlightText,
  CarouselButton,
  CarouselTitle,
} from "./styles";

const CarouselItem = (props) => {
  const [position, setPosition] = useState("50%");
  const responsive = () => {
    if (window.innerWidth <= 1200) {
      setPosition("100%");
    } else {
      setPosition("50%");
    }
  };

  useEffect(() => {
    responsive();
  }, []);

  window.addEventListener("resize", responsive);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5)), url(${props.image})`,
        backgroundPosition: "right center",
        width: "100%",
        zIndex: "auto",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CarouselTemplate width="100%" maxWidth="75%" position="150% 100%">
        <CarouselHeader width={position}>
          <h1>
            <CarouselTitle>{props.title} </CarouselTitle>
            <CarouselHighlightText color={theme.color.blue.A700}>
              {props.titleBold}
            </CarouselHighlightText>
          </h1>

          <h6>{props.description}</h6>
          <CarouselButton to={props.link}>{props.buttonTitle}</CarouselButton>
        </CarouselHeader>
      </CarouselTemplate>
    </div>
  );
};

export default CarouselItem;
