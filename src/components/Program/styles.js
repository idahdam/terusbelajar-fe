import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProgramCard = styled.div`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px;
`;

export const ProgramTitle = styled.div`
  font-family: Glacial Bold;
  margin-top: 20px;
  margin-bottom: -7px;
`;

export const ProgramImage = styled.div`
  width: 64px;
  height: 64px;
  background-size: contain;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
`;

export const ProgramCardContainer = styled(Link)`
  cursor: pointer;
`;
