import React from "react";
import styles from "./styles.module.scss";
import LoginImg from "./../../assets/images/Logo.svg";
import { clsx } from "clsx";

const LogoImage = (props) => {
  const { className } = props;
  const classes = clsx(styles["logo-image-wrap"], {
    [className]: className,
  });
  return (
    <div className={classes}>
      <img className={styles["logo-image"]} src={LoginImg} alt="LogoImage" />
    </div>
  );
};

export default LogoImage;
