import React, { useState } from "react";
import "pretty-checkbox/dist/pretty-checkbox.min.css";

interface CheckboxProps extends React.PropsWithChildren {
  checked: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  handleChange,
  children,
}) => {
  return (
    <div className="pretty p-default p-curve p-thick">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <div className="state p-warning">
        <label>{children}</label>
      </div>
    </div>
  );
};

export default Checkbox;
