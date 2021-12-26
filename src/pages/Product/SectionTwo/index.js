import React from "react";
import { RowImageText } from "../../../components";

const SectionTwo = (props) => {
  return (
    <>
      {props.data.map((item) => {
        return (
          <RowImageText
            image={item.image.data.attributes.url}
            left={item.position}
            title={item.title}
            description={item.Description}
          />
        );
      })}
    </>
  );
};

export default SectionTwo;
