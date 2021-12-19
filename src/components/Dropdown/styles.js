import styled from "styled-components";
// import theme from "../../styles/theme";
import { RiArrowDropDownLine } from "react-icons/ri";

export const DropdownSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
  justify-content: space-between;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.orange.A500};
  color: ${(props) => props.theme.color.white};
  margin-bottom: ${(props) => (props.open ? "0" : "24")}px;
  padding: 4px 48px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    background-color: ${(props) => props.theme.color.orange.A500}EE;
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    padding: 4px 24px;
  }
`;

export const DropDownSymbol = styled(RiArrowDropDownLine)`
  color: ${(props) => props.theme.color.white};
  font-size: 40px;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: 0.3s ease-out;
`;

export const DropDownContent = styled.div`
  background-color: ${(props) => props.theme.color.orange.A500};
  padding: 5px 15px;
  margin-bottom: 24px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  border-radius: 4px;
  animation: ${(props) => (props.open ? "growDown .3s ease-out" : "growUp .3s ease-in")};
  transform-origin: top center;
`;

export const DropDownContentText = styled.h6`
  color: white;
`;
