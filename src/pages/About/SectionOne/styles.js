import styled from "styled-components";

export const SectionOneImage = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SectionOneText = styled.h1`
  font-family: "Raleway Bold";
  top: 40%;
  left: 15%;
  text-align: center;
  position: absolute;
`;
