import React, { Ref } from "react";
import "./index.scss";
import { IInputFieldProps } from "../../utils/models";

const InputField = ({onHandleChange, label}: IInputFieldProps, ref: Ref<HTMLInputElement>): React.ReactElement => {
  const hanldeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {    
    onHandleChange(e.target.value);
  };

  return (
    <div className="input-group has-validation">
      <div className="form-floating">
        <input
          type="number"
          className="form-control"
          id="floatingInput"
          placeholder={label}
          required
          onChange={(e) => hanldeInputChange(e)}
          step="any"
          ref={ref}
        />
        <label htmlFor="floatingInput">{label}</label>
      </div>
    </div>
  );
}

const forwaredInput = React.forwardRef(InputField)

export default forwaredInput;
