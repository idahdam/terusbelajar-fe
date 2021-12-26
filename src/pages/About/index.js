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
      const data = response.data;
      console.log(data);
    };

    fetchAboutUs();
  }, [aboutUsData]);

  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  );
};

export default AboutUs;
