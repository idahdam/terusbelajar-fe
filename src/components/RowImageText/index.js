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

const RowImageText = (props) => {
  return (
    <RowImageTemplates>
      <RowImageBoxContent>
        <RowImageBoxItem left={props.left}>
          <RowImageImage src={props.image} />
          <RowImageBoxText>
            <RowImageBoxTitle>{props.title}</RowImageBoxTitle>
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
