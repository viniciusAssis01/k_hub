import { forwardRef } from "react";
import { StyleSelectForm } from "./styleSelectForm";

export const SelectForm = forwardRef(
  ({ label, type, id, error, children, ...rest }, ref) => {
    return (
      <StyleSelectForm>
        {label ? (
          <label htmlFor={id} className="text1">
            {label}
          </label>
        ) : null}
        <select className="text1" id={id} {...rest} ref={ref}>
          {children}
        </select>
        {error ? <p className="erroSelect text2">{error}</p> : null}
      </StyleSelectForm>
    );
  }
);
