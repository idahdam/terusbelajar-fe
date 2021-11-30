import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionSixTemplate = styled.div`
  width: 65%;
  margin: 0 auto;
  padding-top: 150px;
  text-align: center;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.orange};
  color: ${(props) => props.theme.color.blue.A500};
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    flex-direction: column;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 80%;
  }
`;

export const SectionSixText = styled.h2`
  font-family: "Raleway Bold";
`;

export const SectionSixTemplateButton = styled.div`
  width: 65%;
  margin: auto;
  padding: 35px 0 150px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.orange};
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    flex-direction: column;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 80%;
  }
`;

export const SectionSixButton = styled(Link)`
  // display: block;
  background: ${(props) => props.theme.color.orange.A500};
  color: ${(props) => props.theme.color.white};
  padding: 12px 24px;
  border-radius: 4px;
  width: fit-content;
  margin-left: ${({ marginLeft }) => marginLeft};
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    margin: 0 auto;
  }
`;
