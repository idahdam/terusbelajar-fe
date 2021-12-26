import React, { useState, useEffect } from "react";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import { programService } from "../../services/programService";

const Product = (props) => {
  const [programData, setProgramData] = useState(null);
  useEffect(() => {
    const fetchProgram = async () => {
      const response = await programService.getProgram(props.id);
      setProgramData(response.data.data.attributes);
      console.log(response.data.data.attributes);
    };

    fetchProgram();
  }, []);

  if (programData === null) return null;

  return (
    <>
      <SectionOne data={programData.hero} />
      <SectionTwo data={programData.imageText} />
      <SectionThree data={programData.programCard} />
      <SectionFour data={programData.benefitItems} />
      <SectionFive data={programData.faq} />
      <SectionSix data={programData.bottom} />
    </>
  );
};

export default Product;
