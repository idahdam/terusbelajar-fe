import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionOneTemplate = styled.div`
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  column-gap: 10px;
  padding: 50px 0;
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

export const SectionOneHeader = styled.div`
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

export const HighlightText = styled.span`
  color: ${({ color }) => color};
`;

export const SectionOneButton = styled(Link)`
  display: block;
  background: ${(props) => props.theme.color.blue.A900};
  color: ${(props) => props.theme.color.white};
  padding: 12px 24px;
  border-radius: 4px;
  width: fit-content;
  margin-left: ${({ marginLeft }) => marginLeft};
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    margin: 0 auto;
  }
`;
