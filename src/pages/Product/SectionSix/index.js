import React from "react";
import { BottomText } from "../../../components";

const SectionSix = (props) => {
  return (
    <>
      <BottomText
        image={props.data.image}
        split={props.data.split}
        text={props.data.text}
        left={props.data.left}
        link={props.data.link}
        button={props.data.button}
      />
    </>
  );
};

export default SectionSix;