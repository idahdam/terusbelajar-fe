import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionThreeTemplate = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 70px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  // background-color: ${(props) => props.theme.color.black.A50};
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    flex-direction: column;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 80%;
  }
`;

export const SectionThreeContent = styled.div`
  background-color: ${(props) => props.theme.color.black.A50};
`;

export const SectionThreeApart = styled.div`
  display: ${({ grid }) => (grid ? "grid" : null)};
  grid-template: auto / 230px 230px 230px;
  grid-gap: 24px;
  width: 50%;
  margin-left: ${(props) => (props.benefit ? "auto" : "0")};
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    width: 100%;
    margin-left: ${(props) => (props.benefit ? "0" : "0")};
  }
`;

export const SectionThreeButton = styled(Link)`
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

export const SectionThreeTitle = styled.h2`
  font-family: "Raleway Bold";
  color: ${(props) => props.theme.color.blue.A500};
`;

export const SectionThreeDescription = styled.div`
  max-width: 85%;
  padding: 22px 0;
`;
