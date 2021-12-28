import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineCloudUpload } from "react-icons/md";
import theme from "../../styles/theme";

export const BackgroundBlur = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 60%;
  margin-top: 5vh;
  height: 80vh;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  @media screen and (max-width: ${theme.screen.sm}) {
    flex-direction: column;
    width: 80%;
    overflow: auto;
    justify-content: flex-start;
  }
`;

export const ModalContentLeft = styled.div`
  width: 50%;
  background: ${(props) => props.theme.color.orange.A500};
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${theme.screen.sm}) {
    width: 100%;
    overflow: visible;
  }
  padding: 50px 20px;
`;

export const ModalContentRight = styled.div`
  margin-top: 50px;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  overflow: auto;
  @media screen and (max-width: ${theme.screen.sm}) {
    width: 100%;
    overflow: visible;
    padding: 20px 30px;
    text-align: center;
    margin-top: 0px;
  }
`;

export const CloseIcon = styled(MdOutlineClose)`
  color: black;
  position: absolute;
  top: 15px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  @media screen and (max-width: ${theme.screen.sm}) {
    color: white;
  }
`;

export const ModalTitle = styled.h2`
  width: 42%;
  margin-left: 50%;
  background: ${(props) => props.theme.color.white};
  margin-top: 15px;
  color: ${(props) => props.theme.color.blue.A600};
  font-family: "Raleway Bold";
  position: absolute;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: ${theme.screen.sm}) {
    margin-top: 0;
    margin-left: 0;
    align-items: center;
    width: 100%;
    padding: 15px;
    color: white;
    border-bottom: 2px solid white;
    background: transparent;
  }
`;

export const ContentLeftTitle = styled.h3`
  color: ${(props) => props.theme.color.white};
  font-size: 30px;
  font-family: "Raleway Bold";
  margin-bottom: 10px;
  @media screen and (max-width: ${theme.screen.sm}) {
    margin-top: 30px;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalFormTitle = styled.h3`
  color: ${(props) => props.theme.color.black};
  font-family: "Raleway Bold";
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const ModalFormLabel = styled.label`
  font-family: "Glacial Bold";
  color: ${(props) => props.theme.color.blue.A500};
  text-align: left;
`;

export const ModalFormInput = styled.input`
  height: 40px;
  text-indent: 10px;
  border-radius: 4px;
  border-color: rgba(0; 0; 0; 0.15);
  margin-top: 5px;
  margin-bottom: 10px;
  &:focus {
    border-color: ${(props) => props.theme.color.blue.A500};
  }
`;

const getColor = (props) => {
  if (props.isDragAccept) {
    return props.theme.color.green.A500;
  }
  if (props.isDragReject) {
    return props.theme.color.orange.A500;
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return props.theme.color.blue.A500;
};

export const ModalFileInput = styled.div`
  margin-top: 10px;
`;

export const ContainerInput = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 2px;
  border-radius: 4px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #e8e9eb;
  outline: none;
  transition: border 0.24s ease-in-out;
  padding-bottom: 20px;
  padding-top: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const UploadIcon = styled(MdOutlineCloudUpload)`
  color: ${(props) => props.theme.color.blue.A500};
  font-size: 80px;
`;

export const ModalPrice = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e8e9eb;
  border-width: 2px;
  border-radius: 4px;
  border-color: ${(props) => props.theme.color.blue.A500};
  border-style: solid;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
`;

export const ConfirmButton = styled.button`
  padding: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.color.orange.A500};
  color: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Glacial Bold";
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CancelButton = styled.button`
  padding: 10px;
  width: 100%;
  color: ${(props) => props.theme.color.blue.A500};
  background-color: ${(props) => props.theme.color.white};
  border-width: 1px;
  border-radius: 4px;
  border-color: ${(props) => props.theme.color.blue.A500};
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Glacial Bold";
  border-radius: 4px;
`;

export const ThumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Thumb = styled.div`
  display: flex;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  height: 125px;
  box-sizing: border-box;
`;

export const ThumbImg = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;
