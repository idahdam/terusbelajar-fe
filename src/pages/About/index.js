import React, { useState, useEffect } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import { aboutUsService } from "../../services/aboutUsService";

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState([]);

  useEffect(() => {
    const fetchAboutUs = async () => {
      const response = await aboutUsService.getAboutUs();
      setAboutUsData(response.data.data.attributes);
      // console.log(response.data.data.attributes);
    };

    fetchAboutUs();
  }, []);

  if (aboutUsData.length === 0) return null;

  return (
    <>
      <SectionOne />
      <SectionTwo data={aboutUsData} />
      <SectionThree data={aboutUsData.imageText} />
      <SectionFour data={aboutUsData.aboutUsItems} />
      <SectionFive data={aboutUsData} />
    </>
  );
};

export default AboutUs;
