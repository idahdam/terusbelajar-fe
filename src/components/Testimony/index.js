import React from "react";
import {
  TestimonyBoxWidth,
  TestimonyBoxContainer,
  TestimonyBoxImage,
  WhyUsTitle,
  WhyUsDesc,
} from "./styles";
import backUpImage from "../../assets/images/person.jpg";

const TestimonyBox = (props) => {
  return (
    <TestimonyBoxWidth width={props.width}>
      {props.program ? (
        <>
          <TestimonyBoxImage
            src={props.image === null ? backUpImage : props.image}
          />
          <WhyUsTitle>{props.title}</WhyUsTitle>
          <WhyUsDesc
            dangerouslySetInnerHTML={{ __html: props.text }}
          ></WhyUsDesc>
        </>
      ) : (
        <>
          <TestimonyBoxContainer>
            <TestimonyBoxImage src={props.image} />
            <h6 dangerouslySetInnerHTML={{ __html: props.testi }}></h6>
            <div>
              <h6 className="bold">{props.name}</h6>
              <p>{props.title}</p>
              {/* <TestimonyRatingCenter>
              <ReactStars count={5} size={40} isHalf={true} edit={false} activeColor={theme.color.blue.A500} value={props.rating} />
            </TestimonyRatingCenter> */}
            </div>
          </TestimonyBoxContainer>
        </>
      )}
    </TestimonyBoxWidth>
  );
};

export default TestimonyBox;
