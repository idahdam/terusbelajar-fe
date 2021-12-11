import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import { datas } from "./data";

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
