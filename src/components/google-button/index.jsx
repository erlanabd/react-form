import React from "react";
import styles from "./styles.module.scss";

const GoogleButton = () => {
  return (
    <div className={styles["google-button-wrap"]}>
      <button className={styles['google-btn']}>
        <i className={styles["google-icon"]}></i>
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleButton;
