import React from "react";
import { BottomTextTemplate, BottomTextButton, BottomTextTemplateButton, BottomTextText, BottomTextLeft, BottomTextRight, BottomTextRightImage } from "./styles";

const BottomText = (props) => {
  return (
    <>
      <BottomTextTemplate split={props.split} addHeight={props.addHeight}>
        {props.left ? (
          <>
            <BottomTextLeft>
              <BottomTextText>{props.text}</BottomTextText>
              <BottomTextTemplateButton split={props.split}>
                <BottomTextButton to="/register">Register</BottomTextButton>
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
                <BottomTextButton to="/register">Register</BottomTextButton>
              </BottomTextTemplateButton>
            </BottomTextLeft>
          </>
        )}
      </BottomTextTemplate>
    </>
  );
};

export default BottomText;
