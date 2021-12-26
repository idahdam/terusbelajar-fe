import React, { useState } from "react";
import {
  ProductTypeCard,
  ProductTypeHeader,
  ProductTypeBenefits,
  ProductTypeBenefitsList,
  ProductTypeTitle,
  ProductTypeBody,
  ProductTypeBenefitsHeader,
  ProductTypeBenefitsImage,
  ProductTypeBenefitsText,
  ProductTypeRegister,
} from "./styles";
import RegisterModal from "../RegisterModal";

const ProductType = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ProductTypeCard modal={props.modal}>
        <ProductTypeHeader>
          <ProductTypeTitle>{props.title}</ProductTypeTitle>
          <ProductTypeBody>{props.price}</ProductTypeBody>
        </ProductTypeHeader>
        <ProductTypeBenefits modal={props.modal}>
          {props.benefitsData.map((item, index) => (
            <ProductTypeBenefitsList key={index} modal={props.modal}>
              <ProductTypeBenefitsImage />
              <ProductTypeBenefitsHeader
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></ProductTypeBenefitsHeader>
              {props.modal ? null : (
                <ProductTypeBenefitsText
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></ProductTypeBenefitsText>
              )}
            </ProductTypeBenefitsList>
          ))}
        </ProductTypeBenefits>
        {props.modal ? null : (
          <ProductTypeRegister onClick={() => setOpen(true)}>
            Register
          </ProductTypeRegister>
        )}
        <RegisterModal
          isOpen={isOpen}
          close={() => setOpen(false)}
          data={props}
        ></RegisterModal>
      </ProductTypeCard>
    </>
  );
};

export default ProductType;
