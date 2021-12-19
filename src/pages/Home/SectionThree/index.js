import React from "react";
import { Program } from "../../../components";
import person from "../../../assets/images/person.jpg";
import {
  SectionThreeTemplate,
  SectionThreeApart,
  SectionThreeButton,
  SectionThreeDescription,
  SectionThreeContent,
  SectionThreeTitle,
} from "./styles";

const SectionThree = () => {
  return (
    <SectionThreeContent id="programs">
      <SectionThreeTemplate>
        <SectionThreeApart>
          <SectionThreeTitle>Program</SectionThreeTitle>
          <SectionThreeDescription>
            Mencari tahu kehidupan mahasiswa dan lingkungan dunia perkuliahan di
            berbagai kampus di dalam dan luar negeri kini bisa kamu akses dalam
            genggaman. Yuk lihat program dan layanan yang disediakan oleh
            Terusbelajar!
          </SectionThreeDescription>
          <SectionThreeButton to="/register">
            Daftar Sekarang
          </SectionThreeButton>
        </SectionThreeApart>
        <SectionThreeApart grid={true}>
          <Program
            link="/program/eksplorasi-kampus"
            title="Eksplorasi Kampus"
            image={person}
            text="Dapatkan informasi mengenai lingkungan kampus dan kehidupan mahasiswa di 9 universitas terbaik yang ada di Indonesia sekaligus. Di dalam program ini, kamu juga bisa mengeksplorasi 32 jurusan di rumpun Soshum dan Saintek yang mungkin sesuai dengan potensi dan minat yang kamu miliki!"
          />
          <Program
            link="/program/study-abroad"
            title="Study Abroad: Australia Edition"
            image={person}
            text="Dapatkan informasi mengenai universitas universitas terbaik di Australia dan cerita pengalaman mahasiswa yang berkuliah disana. Melalui program ini, kamu bisa mendapatkan informasi mengenai pilihan kampus, beasiswa, akomodasi, lingkungan, kegiatan mahasiswa, dan banyak hal lainnya yang bisa kamu dapatkan selama berkuliah di Australia."
          />
          <Program
            link="/program/try-out"
            title="Try Out"
            image={person}
            text="Dapatkan kesempatan untuk mengikuti Try Out gratis di Terusbelajar! Kamu juga bisa mendapatkan kunci jawaban, ranking nasional, dan report individual yang dapat memudahkanmu mempersiapkan diri mengikuti ujian dengan mengikuti paket paket Try Out lainnya yang disediakan oleh Terusbelajar."
          />
        </SectionThreeApart>
      </SectionThreeTemplate>
    </SectionThreeContent>
  );
};

export default SectionThree;
