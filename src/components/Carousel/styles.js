import styled from "styled-components";
import { Link } from "react-router-dom";

export const CarouselTemplate = styled.div`
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
  height: 400px;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  column-gap: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
  overflow-y: hidden;
  background-color: ${({ color }) => color};
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: ${({ position }) => position};
  background-size: 77% 77%;
  word-wrap: break-word;
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
  }
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

export const CarouselHighlightText = styled.span`
  color: ${({ color }) => color};
  font-family: "Raleway Bold";
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
`;

export const CarouselTitle = styled.div`
  font-family: "Raleway Bold";
`;

export const CarouselDesc = styled.div`
  font-family: "Glacial Bold";
  margin: 8px 0 32px 0;
  color: rgba(0, 0, 0, 0.7);
`;
