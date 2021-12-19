import styled from "styled-components";

export const SectionThreeCard = styled.div`
  display: flex;
  column-gap: 30px;
  justify-content: center;
  background-color: ${(props) => props.theme.color.orange.A500};
  padding-top: 90px;
  padding-bottom: 90px;
  padding-left: 2%;
  padding-right: 2%;
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    flex-direction: column;
    row-gap: 30px;
  }
`;
