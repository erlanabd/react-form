import React from "react";
import styles from "./styles.module.scss";

const MyInput = (props) => {
  const { type = "password", labelText='Password' } = props;
  return (
    <div className={styles["my-input-wrap"]}>
      <label className={styles["label"]} htmlFor="pass">
        {labelText}
      </label>
      <div className={styles["input-wrap"]}>
        <input className={styles["input"]} id="pass" type={type} />
        <i className={styles["eye-icon"]}></i>
      </div>
    </div>
  );
};

export default MyInput;
