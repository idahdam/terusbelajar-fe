import React from "react";
import { RowImageText } from "../../../components";

const SectionThree = (props) => {
  return (
    <div>
      {props.data.length !== 0
        ? props.data.map((item) => {
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
