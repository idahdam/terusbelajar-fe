import React from "react";

import {
  TestimonyBoxWidth,
  TestimonyBoxImage,
  TestimonyRatingCenter,
} from "./styles";
import ReactStars from "react-rating-stars-component";
import theme from "../../styles/theme";

const TestimonyBox = (props) => {
  return (
    <TestimonyBoxWidth width={props.width}>
      <div style={{ height: "100%" }}>
        <TestimonyBoxImage src={props.image} />
        <h6 style={{ height: "calc(84% - 50px)" }}>"{props.testi}"</h6>
        <div className="bottom-text">
          <h6 className="bold">{props.name}</h6>
          <p>{props.title}</p>

          {props.need ? null : (
            <TestimonyRatingCenter>
              <ReactStars
                count={5}
                size={40}
                isHalf={true}
                edit={false}
                activeColor={theme.color.blue.A500}
                value={props.rating}
              />
            </TestimonyRatingCenter>
          )}
        </div>
      </div>
    </TestimonyBoxWidth>
  );
};

export default TestimonyBox;