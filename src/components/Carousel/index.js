import React, { useState, useEffect } from "react";
import theme from "../../styles/theme";
// import homeBanner from "../../../assets/homeBanner.png";
import {
  SectionOneTemplate,
  SectionOneHeader,
  HighlightText,
  SectionOneButton,
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
      <SectionOneTemplate width="100%" maxWidth="75%" position="150% 100%">
        <SectionOneHeader width={position}>
          <h1>
            {props.title}{" "}
            <HighlightText color={theme.color.blue.A700}>
              {props.titleBold}
            </HighlightText>
          </h1>

          <h6>{props.description}</h6>
          <SectionOneButton to={props.link}>
            {props.buttonTitle}
          </SectionOneButton>
        </SectionOneHeader>
      </SectionOneTemplate>
    </div>
  );
};

export default CarouselItem;
