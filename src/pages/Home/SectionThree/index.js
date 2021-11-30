import React from "react";
import { Program } from "../../../components";
import person from "../../../assets/images/person.jpg";
import { SectionThreeTemplate, SectionThreeApart, SectionThreeButton, SectionThreeDescription, SectionThreeContent, SectionThreeTitle } from "./styles";

const SectionThree = () => {
  return (
    <SectionThreeContent>
      <SectionThreeTemplate>
        <SectionThreeApart>
          <SectionThreeTitle>Program</SectionThreeTitle>
          <SectionThreeDescription>Condimentum leo tincidunt malesuada enim, sagittis, vestibulum amet in. Lorem sed sit lectus massa risus, nibh.</SectionThreeDescription>
          <SectionThreeButton to="/">Register</SectionThreeButton>
        </SectionThreeApart>
        <SectionThreeApart grid={true}>
          <Program title="Lorem Ipsum Sit Dolor" image={person} text="Cursus odio nisi turpis eros. Amet pharetra tempor enim, est viverra. Pretium nisl aliquam posuere lectus." />
          <Program title="Lorem Ipsum Sit Dolor" image={person} text="Cursus odio nisi turpis eros. Amet pharetra tempor enim, est viverra. Pretium nisl aliquam posuere lectus." />
          <Program title="Lorem Ipsum Sit Dolor" image={person} text="Cursus odio nisi turpis eros. Amet pharetra tempor enim, est viverra. Pretium nisl aliquam posuere lectus." />
          <Program title="Lorem Ipsum Sit Dolor" image={person} text="Cursus odio nisi turpis eros. Amet pharetra tempor enim, est viverra. Pretium nisl aliquam posuere lectus." />
          <Program title="Lorem Ipsum Sit Dolor" image={person} text="Cursus odio nisi turpis eros. Amet pharetra tempor enim, est viverra. Pretium nisl aliquam posuere lectus." />
          <Program title="Lorem Ipsum Sit Dolor" image={person} text="Cursus odio nisi turpis eros. Amet pharetra tempor enim, est viverra. Pretium nisl aliquam posuere lectus." />
        </SectionThreeApart>
      </SectionThreeTemplate>
    </SectionThreeContent>
  );
};

export default SectionThree;
