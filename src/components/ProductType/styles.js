import styled from "styled-components";

export const ProductTypeCard = styled.div`
  width: ${(props) => (props.modal ? "65%" : "20%")};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 4px;
  flex-direction: column;
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    width: ${(props) => (props.modal ? "90%" : "100%")};
  }
`;

export const ProductTypeHeader = styled.div`
  background-color: ${(props) => props.theme.color.orange.A50};
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 4px;
`;

export const ProductTypeTitle = styled.h3`
  font-family: Raleway Bold;
  color: ${(props) => props.theme.color.blue.A500};
  width: 80%;
`;

export const ProductTypeBody = styled.h6`
  font-family: "Glacial Regular";
  padding-bottom: 0;
  width: 80%;
  color: black;
`;

export const ProductTypeBenefits = styled.div`
  height: ${(props) => (props.modal ? "45vh" : "500px")};
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  @media screen and (max-width: 1366px) {
    height: ${(props) => (props.modal ? "30vh" : "")};
  }
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    height: ${(props) => (props.modal ? "fit-content" : "")};
    overflow: visible;
  }
`;

export const ProductTypeBenefitsList = styled.div`
  padding-top: 24px;
  width: 80%;
  display: grid;
  font-family: Glacial Bold;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: flex-start;
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

export const ProductTypeRegister = styled.button`
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
