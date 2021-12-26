import React from "react";
import { BottomText } from "../../../components";

const SectionSix = (props) => {
  return (
    <>
      <BottomText
        split={props.data[0].split}
        text={props.data[0].title}
        left={props.data[0].left}
        button={props.data[0].button}
        link={props.data[0].Link}
      />
    </>
  );
};

export default SectionSix;
