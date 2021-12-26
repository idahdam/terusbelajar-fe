import React from "react";
import { RowImageText } from "../../../components";
import homeOne from "../../../assets/images/home1.png";
import homeTwo from "../../../assets/images/home2.png";

const SectionTwo = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default SectionTwo;
