import React from "react";
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

const ProductType = (props) => {
  return (
    <>
      <ProductTypeCard>
        <ProductTypeHeader>
          <ProductTypeTitle>{props.title}</ProductTypeTitle>
          <ProductTypeBody>{props.body}</ProductTypeBody>
        </ProductTypeHeader>
        <ProductTypeBenefits>
          {props.benefitsData.map((item, index) => (
            <ProductTypeBenefitsList key={index}>
              <ProductTypeBenefitsImage />
              <ProductTypeBenefitsHeader>{item.benefitsHeader}</ProductTypeBenefitsHeader>
              <ProductTypeBenefitsText>{item.benefitsBody}</ProductTypeBenefitsText>
            </ProductTypeBenefitsList>
          ))}
        </ProductTypeBenefits>
        <ProductTypeRegister to="/register">Register</ProductTypeRegister>
      </ProductTypeCard>
    </>
  );
};

export default ProductType;
