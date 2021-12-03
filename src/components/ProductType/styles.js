import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductTypeCard = styled.div`
  height: 720px;
  width: 380px;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 4px;
  flex-direction: column;
  display: flex;
`;

export const ProductTypeHeader = styled.div`
  background-color: ${(props) => props.theme.color.orange.A50};
  width: 100%;
  height: 182px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const ProductTypeTitle = styled.h3`
  font-family: Raleway Bold;
  color: ${(props) => props.theme.color.blue.A500};
`;

export const ProductTypeBody = styled.h6`
  font-family: "Glacial Regular";
  padding-bottom: 0;
`;

export const ProductTypeBenefits = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductTypeBenefitsList = styled.div`
  padding-top: 24px;
  width: 80%;
  display: grid;
  font-family: Glacial Bold;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  grid-column-gap: 5%;
`;

export const ProductTypeBenefitsImage = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.color.orange.A400};
`;

export const ProductTypeBenefitsHeader = styled.div`
  font-family: "Glacial Bold";
`;

export const ProductTypeBenefitsText = styled.div`
  font-family: "Glacial Regular";
  color: rgba(0, 0, 0, 0.7);
`;

export const ProductTypeRegister = styled(Link)`
  height: 40px;
  width: 80%;
  background-color: ${(props) => props.theme.color.orange.A500};
  color: ${(props) => props.theme.color.white};
  display: flex;
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 24px;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  font-family: "Glacial Bold";
  border-radius: 4px;
`;
