import React from "react";
import { ProductType } from "../../../components";
import { SectionThreeCard } from "./styles";

const SectionThree = (props) => {
  return (
    <>
      <SectionThreeCard>
        {props.data.map((item, index) => {
          return (
            <ProductType
              title={item.title}
              body={item.body}
              benefitsData={item.benefitsData}
              key={index}
            />
          );
        })}
      </SectionThreeCard>
    </>
  );
};

export default SectionThree;
