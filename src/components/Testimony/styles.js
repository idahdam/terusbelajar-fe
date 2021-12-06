import styled from "styled-components";

export const TestimonyBoxWidth = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  background-color: ${(props) => props.theme.color.white};
  .bottom-text {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const TestimonyBoxImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  object-fit: contain;
`;

export const TestimonyRatingCenter = styled.div`
  margin: auto;
`;

export const WhyUsTitle = styled.div`
  font-family: Raleway Bold;
  color: ${(props) => props.theme.color.blue.A500};
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const WhyUsDesc = styled.div`
  font-family: "Glacial Regular";
  color: rgba(0, 0, 0, 0.7);
`;
