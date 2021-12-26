import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { MdOutlineCloudUpload } from "react-icons/md";

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
`;

export const ModalContentLeft = styled.div`
  width: 50%;
  background: ${(props) => props.theme.color.orange.A500};
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalContentRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  justify-content: space-between;
`;

export const CloseIcon = styled(GrClose)`
  color: black;
  position absolute;
  top: 15px;
  right 15px;
  font-size: 24px;
  cursor: pointer;
`;

export const ContentRightTitle = styled.h2`
  color: ${(props) => props.theme.color.blue.A600};
  font-family: "Raleway Bold";
`;

export const ContentLeftTitle = styled.h3`
  color: ${(props) => props.theme.color.white};
  font-size: 30px;
  font-family: "Raleway Bold";
  padding-bottom: 40px;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalFormTitle = styled.h3`
  color: ${(props) => props.theme.color.black};
  font-family: "Raleway Bold";
`;

export const ModalFormLabel = styled.label`
  font-family: "Glacial Bold";
  color: ${(props) => props.theme.color.blue.A500};
  padding: 5px 0px;
`;

export const ModalFormInput = styled.input`
  height: 40px;
  text-indent: 10px;
  border-radius: 4px;
  border-color: rgba(0; 0; 0; 0.15);
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

export const ModalFileInput = styled.div``;

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
`;

export const ConfirmButton = styled.button`
  height: 40px;
  width: 100%;
  background-color: ${(props) => props.theme.color.orange.A500};
  color: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Glacial Bold";
  border-radius: 4px;
`;

export const CancelButton = styled.button`
  height: 40px;
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
