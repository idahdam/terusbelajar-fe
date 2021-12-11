import React, { useState, useEffect } from "react";
import { useParams, Redirect, Navigate } from "react-router-dom";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import { datas } from "./data";

const Product = () => {
  const [data, setData] = useState({});
  let params = useParams();
  useEffect(() => {
    if (params.name === "test") {
      console.log(datas[0]);
      setData(datas[0]);
    }
  }, [params.name]);
  console.log(params);
  if (Object.keys(data).length === 0 && data.constructor === Object)
    return null;
  return (
    <>
      <SectionOne data={data.SectionOne} />
      <SectionTwo data={data.SectionTwo} />
      <SectionThree data={data.SectionThree} />
      <SectionFour data={data.SectionFour} />
      <SectionFive data={data.SectionFive} />
    </>
  );
};

export default Product;
