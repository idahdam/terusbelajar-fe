import styled from "styled-components";
import { Link } from "react-router-dom";

export const BottomTextContainer = styled.div``;

export const BottomTextTemplate = styled.div`
  width: 65%;
  margin: 0 auto;
  padding-bottom: 150px;
  padding-top: ${(props) => (props.addHeight ? "0px" : "150px")};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: ${(props) => (props.split ? "" : "center")};
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    flex-direction: column;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 80%;
  }
`;

export const BottomTextText = styled.h2`
  font-family: "Raleway Bold";
`;

export const BottomTextTemplateButton = styled.div`
  padding: 35px 0 0 0;
  margin: ${(props) => (props.split ? "" : "auto")};
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.orange};
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    flex-direction: column;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 80%;
  }
`;

export const BottomTextButton = styled(Link)`
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

export const BottomTextLeft = styled.div`
  color: ${(props) => props.theme.color.blue.A500};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const BottomTextRight = styled.div`
  flex: 1;
`;

export const BottomTextRightImage = styled.div`
  margin: 0px 50px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${(props) => (props.addHeight ? "cover" : "contain")};
  height: 388px;
`;
