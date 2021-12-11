import React from "react";
import { ProgramCard, ProgramTitle, ProgramImage } from "./styles";

const Program = (props) => {
  return (
    <>
      <ProgramCard>
        <ProgramImage src={props.image} />
        <ProgramTitle>{props.title}</ProgramTitle>
        <h6>{props.text}</h6>
      </ProgramCard>
    </>
  );
};

export default Program;
