import React from "react";
import { RowImageText } from "../../../components";
import aboutUsOne from "../../../assets/images/aboutUs1.png";
import aboutUsTwo from "../../../assets/images/aboutUs2.png";

const SectionThree = (props) => {
  return (
    <div>
      {props.data.length !== 0
        ? props.data.map((item, index) => {
            return (
              <RowImageText
                image={item.image.data.attributes.url}
                left={item.position}
                title={item.title}
                description={item.Description}
              />
            );
          })
        : null}
    </div>
  );
};

export default SectionThree;
