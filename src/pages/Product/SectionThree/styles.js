import styled from "styled-components";

export const SectionThreeTemplate = styled.div`
  width: 75%;
  margin: 0 auto;
  margin-top: 100px;
  padding: 70px 0;
  font-family: "Raleway Bold";
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    width: 80%;
    flex-direction: column;
    margin-top: 70px;
  }
`;

export const SectionThreeTitle = styled.h2`
  font-family: "Raleway Bold";
`;

export const SectionThreeTemplateTestimonies = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 100px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    width: 80%;
    flex-direction: column;
    row-gap: 24px;
  }
  @media screen and (max-width: 1366px) {
    width: 60%;
  }
`;

export const SectionThreeTestimony = styled.div`
  width: ${(props) => props.width};
  margin: auto;
  text-align: center;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: 80% 80%;
  height: fit-content;
  margin-bottom: auto;
`;

export const SectionThreeSliderTestimonial = styled.div`
  max-width: 30%;
  flex: 1;
  height: 100%;
  div.react-multi-carousel-list {
    padding: 10px 10px 30px 10px;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    max-width: 100%;
  }
`;
