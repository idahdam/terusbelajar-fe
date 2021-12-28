import React from "react";
import { ProductType } from "../../../components";
import { SectionThreeCard } from "./styles";

const SectionThree = (props) => {
  return (
    <>
      <SectionThreeCard id="productType">
        {props.data.map((item, index) => {
          return (
            <ProductType
              title={item.title}
              price={item.price}
              benefitsData={item.programCardItem}
              key={index}
              // modalButton={true}
            />
          );
        })}
      </SectionThreeCard>
    </>
  );
};

export default SectionThree;
