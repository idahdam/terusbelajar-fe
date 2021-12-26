import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import person from "../../../assets/images/person.jpg";
import { TestimonyBox } from "../../../components";
import {
  SectionFourTestimony,
  SectionFourTemplate,
  SectionFourTemplateTestimonies,
  SectionFourSliderTestimonial,
  SectionFourTitle,
} from "./styles";
import quotationMark from "../../../assets/images/quotationMark.png";

const SectionFour = (props) => {
  const [value, setValue] = useState(0);
  const slides = [
    <SectionFourSliderTestimonial>
      <TestimonyBox
        testi="Selama gue ngampus, gue sadar kalo pengalaman jadi mahasiswa itu nggak cuma sebatas ngerjain tugas tugas atau belajar di dalem kelas. Lebih dari itu, setiap kampus punya ceritanya masing masing yang unik dan menarik. Mulai dari pilihan organisasi, kultur lingkungan, sampe ke kebiasaan kebiasaan mahasiswa di kampus yang ada, semuanya harus lo tau sebelum lo milih kampus terbaik buat lo nantinya! Yuk gabung bareng Terusbelajar!"
        name="Salman Al Fathan (Chief Executive Officer)"
        title="Ketua BEM FISIP UI 2020"
        width="100%"
        image={person}
      />
    </SectionFourSliderTestimonial>,
    <SectionFourSliderTestimonial>
      <TestimonyBox
        testi="Kuliah di luar negeri itu pengalaman sekali seumur hidup. Jangan sia-siakan cita-cita semua orang. Jangan sampai repot di sana! Persiapkan hidup terbaikmu di Australia dari sekarang. Mulai dari tahu cara mengatur dan mendapatkan uang, cara jadi terdepan di kelas, sampai cara jadi pelajar paling aktif di kotamu. Cuma di Study Abroad. Daftar sekarang."
        name="Rifqi Muzakki (Product Developer Manager Study Abroad)"
        title="Presiden PPIA Queensland 2019 "
        width="100%"
        image={person}
      />
    </SectionFourSliderTestimonial>,
    <SectionFourSliderTestimonial>
      <TestimonyBox
        testi="Kenali lebih lanjut kampus hingga jurusan yang bakal kalian tuju supaya nggak nyasar dan nyesel di kemudian hari! Yuk, ikut Eksplorasi Kampus dari Terusbelajar! Dijamin, semua pertanyaan kamu bakal kejawab!"
        name="Yudi Iswara Adhyaksa (Product Developer Manager Eksplorasi Kampus)"
        title="Wisudawan Terbaik FISIP UI 2021"
        width="100%"
        image={person}
      />
    </SectionFourSliderTestimonial>,
    <SectionFourSliderTestimonial>
      <TestimonyBox
        testi="Ketakutan akan selalu menghampiri ketika kita gak punya akses ke hal-hal yang belum kita ketahui. Dengan adanya Study Abroad dari Terusbelajar, kamu gak perlu khawatir lagi untuk bisa mempersiapkan diri untuk study di luar negeri!"
        name="Adib Mumtaz Irfani (Product Developer Manager Study Abroad)"
        title="Founder Di Balik Masa Remaja"
        width="100%"
        image={person}
      />
    </SectionFourSliderTestimonial>,
    <SectionFourSliderTestimonial>
      <TestimonyBox
        testi="Kenali lebih lanjut kampus hingga jurusan yang bakal kalian tuju supaya nggak nyasar dan nyesel di kemudian hari! Yuk, ikut Eksplorasi Kampus dari Terusbelajar! Dijamin, semua pertanyaan kamu bakal kejawab!"
        name="Bagas Elza Satria Putra (Product Developer Manager Eksplorasi Kampus)"
        title="Project Officer Skill Development Program FISIP UI 2021"
        width="100%"
        image={person}
      />
    </SectionFourSliderTestimonial>,
    <SectionFourSliderTestimonial>
      <TestimonyBox
        testi="Ikut TryOut dari Terusbelajar, kamu bisa ngerasain gimana soal-soal HOTS yang dibuat langsung sama mahasiswa UI. Fitur-fiturnya juga cocok banget buat kamu yang ambis pengen jadi maba yang cumlaude terus jadi mapres HAHAHA"
        name="Syahrul Ramadhan (Business Developer)"
        title="Kepala Biro Penelitian dan Pengembangan BEM FISIP UI 2021"
        width="100%"
        image={person}
      />
    </SectionFourSliderTestimonial>,
    <SectionFourSliderTestimonial>
      <TestimonyBox
        testi="Gabakal takut lagi sama yang namanya salah jurusan, karena Terusbelajar bisa bantu kamu untuk lebih kenal tentang dunia perkuliahan dari segi akademik maupun non-akademik dan dalam negeri maupun luar negeri. Jadi aku tunggu kamu di Terusbelajar ya!"
        name="Syifa Althofira (Operational Officer)"
        title="Mentor Akademik Mahasiswa Sosiologi UI 2019"
        width="100%"
        image={person}
      />
    </SectionFourSliderTestimonial>,
  ];
  return (
    <>
      <SectionFourTemplate>
        <SectionFourTestimony width={"80%"} src={quotationMark}>
          <SectionFourTitle>
            Hadir Untuk Memudahkanmu Terus Belajar
          </SectionFourTitle>
          <h6>
            Berawal dari mimpi sederhana untuk membantu ribuan pelajar di
            Indonesia untuk terus belajar hingga di tingkat perkuliahan, kami
            hadir untuk bisa memudahkanmu mempersiapkan diri berkuliah di kampus
            impian!
          </h6>
        </SectionFourTestimony>
      </SectionFourTemplate>
      <SectionFourTemplateTestimonies>
        <Carousel
          value={value}
          slides={props.data.map((item) => {
            return (
              <SectionFourSliderTestimonial>
                <TestimonyBox
                  testi={item.description}
                  name={item.name}
                  title={item.position}
                  width="100%"
                  image={item.image.data.attributes.url}
                />
              </SectionFourSliderTestimonial>
            );
          })}
          onChange={setValue}
          plugins={[
            "infinite",
            // {
            //   resolve: autoplayPlugin,
            //   options: {
            //     interval: 5000,
            //   },
            // },
          ]}
          animationSpeed={1000}
        />
      </SectionFourTemplateTestimonies>
      <Dots value={value} onChange={setValue} number={slides.length} />
    </>
  );
};

export default SectionFour;
