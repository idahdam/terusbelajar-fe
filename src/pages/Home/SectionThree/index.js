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

const SectionThree = (props) => {
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
          <SectionThreeButton to="/">Daftar Sekarang</SectionThreeButton>
        </SectionThreeApart>
        <SectionThreeApart grid={true}>
          {props.data.map((item) => {
            return (
              <Program
                link={item.link}
                title={item.title}
                image={item.image.data.attributes.url}
                text={item.description}
              />
            );
          })}
        </SectionThreeApart>
      </SectionThreeTemplate>
    </SectionThreeContent>
  );
};

export default SectionThree;
