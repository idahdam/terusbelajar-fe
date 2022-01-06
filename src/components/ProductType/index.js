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
<<<<<<< HEAD
=======
  // console.log(props.benefitsData[0].image.data.attributes.url);
>>>>>>> af0e6407d8c69e907259d80a739a9f5b139816ef
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
              <ProductTypeBenefitsImage src={item.image.data.attributes.url} />
              <ProductTypeBenefitsHeader
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></ProductTypeBenefitsHeader>

              <ProductTypeBenefitsText
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></ProductTypeBenefitsText>
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
