import styled from "styled-components";

export const SectionFiveTemplate = styled.div`
  width: 65%;
  margin: 0 auto;
  margin-top: 100px;
  padding: 70px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    flex-direction: column;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 80%;
    text-align: center;
    padding-bottom: 0;
  }
`;

export const SectionFiveContent = styled.div`
  background-color: ${(props) => props.theme.color.black.A50};
`;

export const SectionFiveApart = styled.div`
  width: 50%;
  margin-left: ${(props) => (props.benefit ? "auto" : "0")};
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const SectionFiveButton = styled.a`
  display: block;
  background: ${(props) => props.theme.color.orange.A500};
  color: ${(props) => props.theme.color.white};
  padding: 12px 24px;
  border-radius: 4px;
  width: fit-content;
  margin-left: ${({ marginLeft }) => marginLeft};
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    margin: 0 auto;
  }
  font-family: "Glacial Bold";
`;

export const SectionFiveTitle = styled.h2`
  font-family: "Raleway Bold";
`;

export const SectionFiveDescription = styled.div`
  max-width: 85%;
  padding: 22px 0;
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    max-width: 100%;
  }
`;
