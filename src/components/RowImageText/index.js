import React from "react";
import {
  RowImageTemplates,
  RowImageBoxItem,
  RowImageBoxContent,
  // RowImageButton,
  RowImageImage,
  RowImageBoxText,
  RowImageBoxTitle,
  RowImageBoxDescription,
} from "./styles";
import backUpImage from "../../assets/images/aboutUs2.png";

const RowImageText = (props) => {
  return (
    <RowImageTemplates>
      <RowImageBoxContent>
        <RowImageBoxItem left={props.left}>
          <RowImageImage
            src={props.image === null ? backUpImage : props.image}
          />
          <RowImageBoxText>
            <RowImageBoxTitle
              dangerouslySetInnerHTML={{ __html: props.title }}
            ></RowImageBoxTitle>
            <RowImageBoxDescription
              dangerouslySetInnerHTML={{ __html: props.description }}
            ></RowImageBoxDescription>
          </RowImageBoxText>
        </RowImageBoxItem>
      </RowImageBoxContent>
    </RowImageTemplates>
  );
};

export default RowImageText;
