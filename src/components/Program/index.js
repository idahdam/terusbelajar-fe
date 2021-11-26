import React, { useState } from "react";
import {
  DropdownSection,
  DropDownContent,
  DropDownSymbol,
  DropDownContentText,
} from "./styles";

const Program = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DropdownSection onClick={() => setOpen(!open)} open={open}>
        <h6>
          {props.num}
          {". "}
          {props.name}
        </h6>
        <div style={{ marginLeft: "auto" }}>
          <DropDownSymbol open={open} />
        </div>
      </DropdownSection>
      {open && (
        <DropDownContent open={open}>
          <DropDownContentText>{props.children}</DropDownContentText>
        </DropDownContent>
      )}
    </>
  );
};

export default Program;