import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionThreeTemplate = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 70px 10%;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    flex-direction: column;
  }
`;

export const SectionThreeContent = styled.div`
  background-color: ${(props) => props.theme.color.black.A50};
`;

export const SectionThreeApart = styled.div`
  display: ${({ grid }) => (grid ? "grid" : null)};
  grid-template-columns: auto auto auto;
  grid-gap: 24px;
  width: ${({ grid }) => (grid ? "60%" : "40%")};
  margin-left: ${(props) => (props.benefit ? "auto" : "0")};
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    width: ${({ grid }) => (grid ? "80%" : "100%")};
    margin-left: ${(props) => (props.benefit ? "0" : "0")};
  }
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: auto;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    text-align: ${({ grid }) => (grid ? "" : "center")};
  }
`;

export const SectionThreeButton = styled(Link)`
  display: block;
  background: ${(props) => props.theme.color.orange.A500};
  color: ${(props) => props.theme.color.white};
  padding: 12px 24px;
  border-radius: 4px;
  width: fit-content;
  font-family: "Glacial Bold";
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    margin: 0 auto;
    margin-bottom: 72px;
  }
`;

export const SectionThreeTitle = styled.h2`
  font-family: "Raleway Bold";
  color: ${(props) => props.theme.color.blue.A500};
`;

export const SectionThreeDescription = styled.h6`
  width: 85%;
  padding: 22px 0;
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 100%;
  }
`;
