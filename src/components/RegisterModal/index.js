import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
  BackgroundBlur,
  ModalContent,
  ModalContentLeft,
  ModalContentRight,
  CloseIcon,
  ContentRightTitle,
  ModalForm,
  ModalFormTitle,
  ModalFormLabel,
  ModalFormInput,
  ContentLeftTitle,
  ContainerInput,
  UploadIcon,
  ModalFileInput,
  ModalPrice,
  ConfirmButton,
  CancelButton,
} from "./styles";
import { ProductType } from "..";
import { useDropzone } from "react-dropzone";

const portalRoot = document.getElementById("portal-root");

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const RegisterModal = ({ isOpen, close, data }) => {
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    maxFiles: 1,
    accept: "image/jpg, image/png, image/jpeg",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(e.target)) {
        return close();
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <BackgroundBlur>
      <ModalContent ref={modalRef}>
        <CloseIcon onClick={close} />
        <ModalContentLeft>
          <ContentLeftTitle>Plan</ContentLeftTitle>
          <ProductType
            title={data.title}
            price={data.price}
            benefitsData={data.benefitsData}
            modal={true}
          />
        </ModalContentLeft>
        <ModalContentRight>
          <ContentRightTitle>Pembayaran</ContentRightTitle>
          <ModalForm>
            <ModalFormTitle>Data Diri</ModalFormTitle>
            <ModalFormLabel>Nama Lengkap</ModalFormLabel>
            <ModalFormInput type="text" />
            <ModalFormLabel>Email</ModalFormLabel>
            <ModalFormInput type="text" />
            <ModalFormLabel>No Hp/Whatsapp</ModalFormLabel>
            <ModalFormInput type="text" />
          </ModalForm>
          <ModalFileInput style={{ marginTop: "10px" }}>
            <ModalFormTitle>Upload Bukti Transfer</ModalFormTitle>
            <ContainerInput
              {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
            >
              <input {...getInputProps()} />
              {files.length === 0 ? (
                <>
                  <UploadIcon />
                  <h6 style={{ padding: 0 }}>
                    Klik untuk menjelajahi dokumen anda
                  </h6>
                  <h6 style={{ padding: 0 }}>Mendukung .jpg dan .png.</h6>
                </>
              ) : (
                <div style={thumbsContainer}>
                  {files.map((file) => (
                    <div style={thumb} key={file.name}>
                      <div style={thumbInner}>
                        <img src={file.preview} style={img} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ContainerInput>
          </ModalFileInput>
          <ModalPrice style={{ marginBottom: "10px" }}>
            <h6>Total</h6>
            <h6>Rp {data.price}</h6>
          </ModalPrice>
          Lakukan pembayaran sesuai harga yang tertera melalui transfer bank ke
          nomor rekening berikut: BNI 123124231 a.n. SALMAN
          <ConfirmButton style={{ marginTop: "10px" }}>
            Lakukan Pembayaran
          </ConfirmButton>
          <CancelButton onClick={close}>Batal</CancelButton>
        </ModalContentRight>
      </ModalContent>
    </BackgroundBlur>,
    portalRoot
  );
};

export default RegisterModal;
