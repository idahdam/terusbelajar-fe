import styled from "styled-components";

export const SectionFourTemplate = styled.div`
  background-color: ${(props) => props.theme.color.black.A50};
  padding: 100px 0;
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    padding: 70px 0;
  }
`;

export const SectionFourContainer = styled.div`
  width: 80%;
  display: flex;
  column-gap: 40px;
  margin: auto;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    flex-direction: column;
    row-gap: 40px;
  }
`;

export const SectionFourText = styled.div``;

export const SectionFourTitle = styled.h2`
  text-align: center;
  font-family: "Raleway Bold";
  color: ${(props) => props.theme.color.blue.A500};
`;

export const SectionFourDesc = styled.h6`
  text-align: center;
  font-family: "Glacial Regular";
`;
