import styled from "styled-components";
import { Link } from "react-router-dom";

export const CarouselTemplate = styled.div`
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
  height: 600px;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  column-gap: 10px;
  padding-left: 200px;
  overflow-y: hidden;
  background-color: ${({ color }) => color};
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: ${({ position }) => position};
  background-size: 77% 77%;
  word-wrap: break-word;
`;

export const CarouselHeader = styled.div`
  width: ${({ width }) => width};
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-left: ${({ marginLeft }) => marginLeft};
  text-align: ${({ textAlign }) => textAlign};
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    margin-left: 0;
    text-align: left;
  }
`;

export const CarouselText = styled.h1`
  @media screen and (max-width: 1366px) {
    font-size: 40px;
    line-height: 116%;
  }
`;

export const CarouselHighlightText = styled.span`
  color: ${({ color }) => color};
  font-family: "Raleway Bold";
  @media screen and (max-width: 1366px) {
    font-size: 40px;
    line-height: 116%;
  }
`;

export const CarouselButton = styled(Link)`
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

export const CarouselTitle = styled.div`
  font-family: "Raleway Bold";
`;

export const CarouselDesc = styled.div`
  font-family: "Glacial Bold";
  margin: 8px 0 32px 0;
  color: rgba(0, 0, 0, 0.7);
`;
