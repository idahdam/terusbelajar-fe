import React from "react";
import { ProductType } from "../../../components";
import { SectionFourCard } from "./styles";

const SectionFour = (props) => {
  return (
    <>
      <SectionFourCard id="productType">
        {props.data.map((item, index) => {
          return (
            <ProductType
              title={item.title}
              price={item.price}
              benefitsData={item.programCardItem}
              key={index}
              pathname={props.pathname}
              // modalButton={true}
            />
          );
        })}
      </SectionFourCard>
    </>
  );
};

export default SectionFour;
