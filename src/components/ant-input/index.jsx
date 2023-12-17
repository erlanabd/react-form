import { Input } from "antd";
import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import StyledError from "../styled-error-text";

const AntInput = (props) => {

  const { className, value, onChange, hasError, label } = props;

  const antInputWrapClasses = clsx(styles["ant-input-wrap"], {
    [className]: className,
  });
  const labelClasses = clsx(styles['label'], {
    [styles['label-error']]: hasError
  });
  const inputClasses = clsx(styles['input'], {
    [styles['input-error']]: hasError
  })


  return (
    <div className={antInputWrapClasses}>
      <label className={labelClasses} htmlFor={label}>
        {label}
      </label>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClasses}
        id={label}
      />
      {hasError && hasError.type === "pattern" && (
        <StyledError> {hasError.message} </StyledError>
      )}
      {hasError && hasError.type === "required" && (
        <StyledError>{hasError.message}</StyledError>
      )}
      {hasError && hasError.type === "minLength" && (
        <StyledError>{hasError.message}</StyledError>
      )}
    </div>
  );
};

export default AntInput;
