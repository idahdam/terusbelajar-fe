import styled from "styled-components";

export const Footers = styled.footer`
  min-height: 20px;
  padding: 5px 0;
  width: 100%;
  background-color: ${(props) => props.theme.color.orange.A50};
`;

export const FooterTemplate = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 10px 0;
  display: grid;
  grid-template-columns: ${(props) =>
    props.need ? "repeat(4, 1fr)" : "repeat(2, 1fr)"};
  justify-content: center;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: ${(props) => (props.need ? "repeat(3, 1fr)" : null)};
    grid-gap: 20px;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 90%;
    grid-template-columns: ${(props) =>
      props.need ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
    justify-content: ${(props) => (props.need ? null : "center")};
    text-align: ${(props) => (props.need ? null : "center")};
    grid-gap: 5px;
  }
`;

export const FooterLogo = styled.img`
  display: block;
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    width: 60%;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 342px;
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    width: 200px;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    width: 100%;
    justify-content: center;
    align-items: center;
    align-self: center;
    text-align: justify;
  }
`;

export const FooterMoreInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  align-items: center;
  column-gap: 10px;
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: repeat(2, 1fr);
    word-wrap: break-word;
    width: 60%;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    svg {
      margin: 0 auto;
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  justify-content: flex-end;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    justify-content: flex-start;
    margin-left: 0;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    margin: 0 auto;
  }
`;

export const FooterLine = styled.hr`
  border-top: 1px solid ${(props) => props.theme.color.A50}66;
  width: 75%;
  margin: 20px auto;
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    width: 90%;
  }
`;

export const FooterSocmed = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  padding: 10px 0;
  column-gap: 23px;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    margin: 0 auto;
  }
`;
