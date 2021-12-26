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
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  let pathname = "";
  let navigate = useNavigate();
  if (window.location.pathname === "/program/eksplorasi-kampus") {
    pathname = "form-eksplorasis";
  } else if (window.location.pathname === "/program/try-out") {
    pathname = "form-try-outs";
  } else if (window.location.pathname === "/program/study-abroad") {
    pathname = "form-study-abroads";
  }
  const [name, setName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
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

  const areYouSure = async () => {
    if (
      name === null ||
      !name.trim() ||
      email === null ||
      !email.trim() ||
      !email.match(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/
      ) ||
      phoneNumber === null ||
      !phoneNumber.trim() ||
      !phoneNumber.match(/\+?(?:[ -]?\d+)+|(\d+)(?:[ -]\d+)/) ||
      files.length === 0
    ) {
      alert("Please fill all the details!");
    } else {
      Swal.fire({
        title: "Submit all of the data?",
        text: "Make sure you have checked all of the data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Submit",
      }).then((result) => {
        if (result.isConfirmed) {
          onSubmit();
        }
      });
    }
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("files", files[0]);
    try {
      Swal.fire({
        icon: "info",
        title: "Uploading...",
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      await axios
        .post(`${process.env.REACT_APP_API_URL}/upload`, formData)
        .then(async (res) => {
          console.log(res);
          console.log(pathname);
          await axios.post(`${process.env.REACT_APP_API_URL}/${pathname}`, {
            data: {
              status: "unpaid",
              name: name,
              email: email,
              phone_number: phoneNumber,
              receipt: res.data[0],
              type: data.title,
            },
          });
        })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Submitted!",
            html: "Thank you! Your ticket will be processed via email.",
            showConfirmButton: true,
          }).then((result) => {
            if (result.isConfirmed || result.isDismissed) {
              navigate("/");
            }
          });
        });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err,
        text: "Something bad happened.",
        footer: '<a href="https://google.com">Why do I have this issue?</a>',
      });
    }
  };

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
            <ModalFormInput
              type="text"
              placeholder="Contoh: Nama Lengkap"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <ModalFormLabel>Email</ModalFormLabel>
            <ModalFormInput
              type="text"
              placeholder="Contoh: email@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <ModalFormLabel>No Hp/Whatsapp</ModalFormLabel>
            <ModalFormInput
              type="text"
              placeholder="Contoh: 081289099092"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
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
          <ConfirmButton
            style={{ marginTop: "10px" }}
            onClick={() => areYouSure()}
          >
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
