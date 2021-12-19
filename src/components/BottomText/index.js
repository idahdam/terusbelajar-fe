import React from "react";
import { BottomTextTemplate, BottomTextButton, BottomTextTemplateButton, BottomTextText, BottomTextLeft, BottomTextRight, BottomTextRightImage, BottomTextButtonScroll } from "./styles";

const BottomText = (props) => {
  return (
    <>
      <BottomTextTemplate split={props.split} addHeight={props.addHeight}>
        {props.left ? (
          <>
            <BottomTextLeft>
              <BottomTextText>{props.text}</BottomTextText>
              <BottomTextTemplateButton split={props.split}>
                <BottomTextButtonScroll to="programs" spy={true} smooth={true} offset={-70} duration={500}>
                  {props.button}
                </BottomTextButtonScroll>
              </BottomTextTemplateButton>
            </BottomTextLeft>
            {props.split ? (
              <BottomTextRight>
                <BottomTextRightImage src={props.image} />
              </BottomTextRight>
            ) : null}
          </>
        ) : (
          <>
            {props.split ? (
              <BottomTextRight>
                <BottomTextRightImage src={props.image} addHeight={props.addHeight} />
              </BottomTextRight>
            ) : null}
            <BottomTextLeft>
              <BottomTextText>{props.text}</BottomTextText>
              <BottomTextTemplateButton split={props.split}>
                <BottomTextButton to={`${props.link}`}>{props.button}</BottomTextButton>
              </BottomTextTemplateButton>
            </BottomTextLeft>
          </>
        )}
      </BottomTextTemplate>
    </>
  );
};

export default BottomText;
