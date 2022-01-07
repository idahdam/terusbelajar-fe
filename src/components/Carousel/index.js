import React, { useState, useEffect } from "react";
import theme from "../../styles/theme";
import homeBanner from "../../assets/images/backgroundHero.png";
import {
  CarouselTemplate,
  CarouselHeader,
  CarouselHighlightText,
  // CarouselButton,
  CarouselTitle,
  CarouselDesc,
  CarouselText,
} from "./styles";

const CarouselItem = (props) => {
  const [position, setPosition] = useState("50%");
  const responsive = () => {
    if (window.innerWidth <= 1200) {
      setPosition("100%");
    } else {
      setPosition("60%");
    }
  };

  useEffect(() => {
    responsive();
  }, []);

  window.addEventListener("resize", responsive);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5)), url(${
          props.image === null ? homeBanner : props.image
        })`,
        backgroundPosition: "right center",
        width: "100%",
        zIndex: "auto",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CarouselTemplate width="100%" maxWidth="100%" position="">
        <CarouselHeader width={position}>
          <CarouselText>
            <CarouselTitle>{props.title} </CarouselTitle>
            <CarouselHighlightText color={theme.color.blue.A700}>
              {props.titleBold}
            </CarouselHighlightText>
          </CarouselText>
          <CarouselDesc>{props.description}</CarouselDesc>
          {/* <CarouselButton to={props.link}>{props.buttonTitle}</CarouselButton> */}
        </CarouselHeader>
      </CarouselTemplate>
    </div>
  );
};

export default CarouselItem;
