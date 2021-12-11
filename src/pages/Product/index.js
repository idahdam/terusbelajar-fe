import React from "react";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";

const Product = (props) => {
  return (
    <>
      <SectionOne data={props.data.SectionOne} />
      <SectionTwo data={props.data.SectionTwo} />
      <SectionThree data={props.data.SectionThree} />
      <SectionFour data={props.data.SectionFour} />
      <SectionFive data={props.data.SectionFive} />
      <SectionSix data={props.data.SectionSix} />
    </>
  );
};

export default Product;
