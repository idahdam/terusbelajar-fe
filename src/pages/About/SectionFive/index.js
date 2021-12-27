import React from "react";
import { BottomText } from "../../../components";

const SectionFive = (props) => {
  return (
    <>
      <BottomText
        image={props.data.bottom.image.data.attributes.url}
        split={props.data.bottom.split}
        text={props.data.bottom.title}
        left={props.data.bottom.left}
        button={props.data.bottom.button}
        link={props.data.bottom.Link}
      />
    </>
  );
};

export default SectionFive;
