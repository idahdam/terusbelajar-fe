import React from "react";
import {
  ProgramCard,
  ProgramTitle,
  ProgramImage,
  ProgramCardContainer,
} from "./styles";

const Program = (props) => {
  return (
    <ProgramCardContainer to={props.link}>
      <ProgramCard>
        <ProgramImage src={props.image} />
        <ProgramTitle>{props.title}</ProgramTitle>
        <h6>{props.text}</h6>
      </ProgramCard>
    </ProgramCardContainer>
  );
};

export default Program;
