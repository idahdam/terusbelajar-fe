import React, { useState } from "react";
import Carousel, { Dots, autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import imageHero from "../../../assets/images/backgroundHero.png";
import { CarouselItem } from "../../../components";
import {
  SectionOneDiv,
  SectionOneDivDots,
  SectionOneDivCarousel,
} from "./styles";

//ini comment lagi hehe

const SectionOne = () => {
  const [value, setValue] = useState(0);
  const slides = [
    <CarouselItem
      title="Memudahkan Setiap Pembelajar Untuk "
      titleBold="#TerusBelajar"
      description="Dengan layanan dan program yang aksesibel untuk semua, kamu bisa menyiapkan diri  dengan lebih mudah untuk memasuki dunia kampus di dalam dan di luar negeri bersama Terusbelajar!"
      buttonTitle="Lihat layanan"
      link="/"
      image={imageHero}
    />,
    <CarouselItem
      title="Platform Eksplorasi "
      titleBold="Kampus dan Dunia Perkuliahan"
      description="Ketahui lingkungan kampus dan kehidupan mahasiswa di berbagai universitas terbaik di dalam dan di luar negeri bersama Terusbelajar!"
      buttonTitle="Lihat layanan"
      link="/"
      image={imageHero}
    />,
  ];
  return (
    <SectionOneDiv id="heroHome">
      <SectionOneDivCarousel>
        <Carousel
          value={value}
          slides={slides}
          onChange={setValue}
          plugins={[
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 3000,
              },
            },
          ]}
          animationSpeed={1000}
        />
      </SectionOneDivCarousel>
      <SectionOneDivDots>
        <Dots value={value} onChange={setValue} number={slides.length} />
      </SectionOneDivDots>
    </SectionOneDiv>
  );
};

export default SectionOne;
