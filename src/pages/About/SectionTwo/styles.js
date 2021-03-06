import styled from "styled-components";

export const SectionTwoTemplate = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 80%;
  }
`;

export const SectionTwoText = styled.h2`
  margin-top: 150px;
  font-family: "Raleway Bold";
  color: ${(props) => props.theme.color.orange.A500};
`;

export const SectionTwoDesc = styled.div`
  margin-top: 24px;
  font-family: "Glacial Regular";
  text-align: center;
  font-size: 40px;
`;
