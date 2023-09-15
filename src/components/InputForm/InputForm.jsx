import { forwardRef } from "react";
import { StyleInputForm } from "./StyleInputForm.js";

export const InputForm = forwardRef(
  ({ label, type, id, error, children, ...rest }, ref) => {
    return (
      <StyleInputForm>
        {label ? (
          <label htmlFor={id} className="text1">
            {label}
          </label>
        ) : null}
        <input type={type} id={id} {...rest} ref={ref} />
        {error ? <p className="text2">{error}</p> : null}
        {children}
      </StyleInputForm>
    );
  }
);
