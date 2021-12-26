import React, { useState, useEffect } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import { aboutUsService } from "../../services/aboutUsService";

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState([]);
  let aboutUs = true;

  useEffect(() => {
    const fetchAboutUs = async () => {
      const response = await aboutUsService.getAboutUs();
      // console.log(data.data);
      if (aboutUs) {
        setAboutUsData(response.data.data.attributes);
        console.log(response.data.data.attributes);
      }
    };

    fetchAboutUs();

    return () => {
      aboutUs = false;
    };
  }, []);

  console.log(aboutUsData);

  return (
    <>
      <SectionOne />
      <SectionTwo data={aboutUsData} />
      <SectionThree data={aboutUsData.imageText} />
      <SectionFour />
      <SectionFive />
    </>
  );
};

export default AboutUs;
