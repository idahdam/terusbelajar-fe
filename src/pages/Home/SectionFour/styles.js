import styled from "styled-components";

export const SectionFourTemplate = styled.div`
  width: 75%;
  margin: 0 auto;
  margin-top: 100px;
  padding: 70px 0;
  font-family: "Raleway Bold";
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 100%;
  }
`;

export const SectionFourTitle = styled.h2`
  font-family: "Raleway Bold";
  color: ${(props) => props.theme.color.blue.A500};
`;

export const SectionFourTemplateTestimonies = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 80%;
  }
`;

export const SectionFourTestimony = styled.div`
  width: ${(props) => props.width};
  margin: auto;
  text-align: center;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: 100% 0%;
  height: fit-content;
  margin-bottom: auto;
`;

export const SectionFourSliderTestimonial = styled.div`
  width: 720px;
  height: 100%;
  padding-bottom: 50px;
`;
