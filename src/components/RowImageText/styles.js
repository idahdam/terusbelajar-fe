import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";

export const RowImageTemplates = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 70px 0;
  background-color: ${(props) =>
    props.white ? `${theme.color.white}` : `${theme.color.black.A50}`};
`;

export const RowImageBoxContent = styled.div`
  width: 75%;
  margin: 0 auto;
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    width: 80%;
  }
`;

export const RowImageBoxItem = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  width: 100%;
  align-items: center;
  margin: 64px 0;
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
    row-gap: 24px;
    column-gap: 0;
  }
`;

export const RowImageImage = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 45%;
  height: 388px;
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    width: 100%;
    height: 450px;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 100%;
    height: 320px;
  }
`;

export const RowImageButton = styled(Link)`
  display: block;
  text-align: center;
  background: ${(props) => props.theme.color.blue.A900};
  color: ${(props) => props.theme.color.white};
  padding: 8px 24px;
  border-radius: 4px;
  width: 220px;
`;

export const RowImageBoxText = styled.div`
  width: 50%;
  color: ${(props) => props.theme.color.blue.A500};
`;

export const RowImageBoxTitle = styled.h2`
  font-family: "Raleway Bold";
`;

export const RowImageBoxDescription = styled.h6`
  font-family: "Glacial Regular";
  color: ${(props) => props.theme.color.black.A900};
`;
