import React, { useState } from "react";
import {
  DropdownSection,
  DropDownContent,
  DropDownSymbol,
  DropDownContentText,
} from "./styles";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DropdownSection onClick={() => setOpen(!open)} open={open}>
        <h6
          dangerouslySetInnerHTML={{ __html: props.num + ". " + props.name }}
        ></h6>
        <div>
          <DropDownSymbol open={open} />
        </div>
      </DropdownSection>
      {open && (
        <DropDownContent open={open}>
          <DropDownContentText
            dangerouslySetInnerHTML={{ __html: props.children }}
          ></DropDownContentText>
        </DropDownContent>
      )}
    </>
  );
};

export default Dropdown;
