import React from "react";
import styles from "./styles.module.scss";

const TitleBar = (props) => {
  const { title, description } = props;
  return (
    <div className={styles["title-bar-wrap"]}>
      <h3 className={styles["title"]}>{title}</h3>
      <p className={styles["description"]}>{description}</p>
    </div>
  );
};

export default TitleBar;
