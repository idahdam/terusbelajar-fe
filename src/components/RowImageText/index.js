import React, { useState, useEffect } from "react";
import {
  RowImageTemplates,
  RowImageBoxItem,
  RowImageBoxContent,
  RowImageButton,
  RowImageImage,
  RowImageBoxText,
  RowImageBoxTitle,
  RowImageBoxDescription,
} from "./styles";

const RowImageText = (props) => {
  const [position, setPosition] = useState("40%");
  const responsive = () => {
    if (window.innerWidth <= 900) {
      setPosition("100%");
    } else {
      setPosition("54%");
    }
  };

  useEffect(() => {
    responsive();
  }, []);

  window.addEventListener("resize", responsive);
  return (
    <RowImageTemplates>
      {/* <h1 style={{ textAlign: "center" }}>Products</h1> */}
      <RowImageBoxContent>
        {props.left ? (
          <>
            <RowImageBoxItem>
              <RowImageImage src={props.image} />
              <RowImageBoxText>
                <RowImageBoxTitle>{props.title}</RowImageBoxTitle>
                <RowImageBoxDescription>
                  {props.description}
                </RowImageBoxDescription>
              </RowImageBoxText>
            </RowImageBoxItem>
          </>
        ) : (
          <>
            <RowImageBoxItem>
              <RowImageBoxText>
                <RowImageBoxTitle>{props.title}</RowImageBoxTitle>
                <RowImageBoxDescription>
                  {props.description}
                </RowImageBoxDescription>
              </RowImageBoxText>
              <RowImageImage src={props.image} />
            </RowImageBoxItem>
          </>
        )}
      </RowImageBoxContent>
    </RowImageTemplates>
  );
};

export default RowImageText;
