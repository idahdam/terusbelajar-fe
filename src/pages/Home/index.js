import React, { useState, useEffect } from "react";
import { homeService } from "../../services/homeService";
import SectionFive from "./SectionFive";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionSix from "./SectionSix";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const Home = () => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    const fetchHome = async () => {
      const response = await homeService.getHome();
      console.log(response.data.data.attributes);
      setHomeData(response.data.data.attributes);
    };
    fetchHome();
  }, []);

  if (homeData.length === 0) return null;
  return (
    <>
      <SectionOne data={homeData.hero} />
      <SectionTwo data={homeData.imageText} />
      <SectionThree data={homeData.programHome} />
      <SectionFour data={homeData.reviewsHome} />
      <SectionFive data={homeData.faq} />
      <SectionSix data={homeData.bottom} />
    </>
  );
};

export default Home;
