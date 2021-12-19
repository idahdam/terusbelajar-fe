import React from "react";
import { RowImageText } from "../../../components";

const SectionTwo = (props) => {
  return (
    <>
      {props.data.map((item) => {
        return (
          <RowImageText
            image={item.image}
            left={item.left}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </>
  );
};

export default SectionTwo;
