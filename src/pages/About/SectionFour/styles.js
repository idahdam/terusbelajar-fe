import styled from "styled-components";

export const SectionFourTemplate = styled.div`
  background-color: ${(props) => props.theme.color.black.A50};
  display: grid;
  grid-template-columns: auto auto auto;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 100px 350px;
  grid-column-gap: 80px;
`;

export const SectionFourTitle = styled.h2`
  text-align: center;
  font-family: "Raleway Bold";
  color: ${(props) => props.theme.color.blue.A500};
`;

export const SectionFourDesc = styled.h6`
  text-align: center;
  font-family: "Glacial Regular";
`;
