import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";

export const BottomTextTemplate = styled.div`
  width: 65%;
  margin: 0 auto;
  padding-bottom: 150px;
  padding-top: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: ${(props) => (props.split ? "" : "center")};
  @media screen and (max-width: ${theme.screen.sm}) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    padding-top: 50px;
    padding-bottom: 70px;
    text-align: center;
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
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    justify-content: center;
  }
`;

export const BottomTextButton = styled(Link)`
  background: ${(props) => props.theme.color.orange.A500};
  color: ${(props) => props.theme.color.white};
  padding: 12px 24px;
  border-radius: 4px;
  width: fit-content;
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
  width: 400px;
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 250px;
  }
`;
