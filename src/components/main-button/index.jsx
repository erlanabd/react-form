import React from "react";
import styles from "./styles.module.scss";

const MainButton = (props) => {
  const { title } = props;
  return (
    <div className={styles["button-wrap"]}>
      <button className={styles["button"]}>{title}</button>
    </div>
  );
};

export default MainButton;
