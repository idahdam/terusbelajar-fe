import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import { programService } from "../../services/programService";

const Product = () => {
  let { productType } = useParams();
  const [programData, setProgramData] = useState(null);
  useEffect(() => {
    const fetchProgram = async () => {
      const response = await programService.getPrograms();
      response.data.data.forEach((program) => {
        if (program.attributes.name === productType) {
          setProgramData(program.attributes);
        }
      });
    };

    fetchProgram();
  }, []);

  if (programData === null) return null;

  return (
    <>
      <SectionOne data={programData.hero} />
      <SectionTwo data={programData.imageText} />
      <SectionThree data={programData.benefits} />
      <SectionFour
        data={programData.programCard}
        pathname={programData.formUrl}
      />
      <SectionFive data={programData.faq} />
      <SectionSix data={programData.bottom} />
    </>
  );
};

export default Product;
