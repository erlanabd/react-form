import { clsx } from "clsx";
import { useState } from "react";
import StyledError from "../styled-error-text";
import styles from "./styles.module.scss";

const InputPassword = (props) => {
  const [typeInput, setTypeInput] = useState("password");

  const { labelText = "Password", value, onChange, hasError } = props;

  const inputClasses = clsx(styles["input-wrap"], {
    [styles["input-wrap-error"]]: hasError,
  });

  const labelClasses = clsx(styles["label"], {
    [styles["label-error"]]: hasError,
  });

  const handleClickInputType = () => {
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };

  return (
    <div className={styles["my-input-wrap"]}>
      <label className={labelClasses} htmlFor={labelText}>
        {labelText}
      </label>
      <div className={inputClasses}>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles["input"]}
          id={labelText}
          type={typeInput}
        />
        <i onClick={handleClickInputType} className={styles["eye-icon"]}></i>
      </div>
      {hasError && hasError.message && (
        <StyledError>{hasError.message}</StyledError>
      )}
      {hasError && hasError.type === "validate" && (
        <StyledError>Password and Confirm Password must be mutch</StyledError>
      )}
    </div>
  );
};

export default InputPassword;
