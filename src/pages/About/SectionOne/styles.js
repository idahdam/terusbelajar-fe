import styled from "styled-components";

export const SectionOneImage = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1366px) {
    height: 500px;
  }
`;

export const SectionOneText = styled.h1`
  font-family: "Raleway Bold";
  width: 50%;
  text-align: center;
`;
