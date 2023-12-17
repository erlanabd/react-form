import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

const MainButton = (props) => {
  const { title, className, disabled } = props;
  const buttonClasses = clsx(
    styles['button'], 
    {
      [styles['button-disabled']]: disabled,
      [className]: className
    }
  )
  return (
    <div className={styles["button-wrap"]}>
      <button disabled={disabled} className={buttonClasses}>{title}</button>
    </div>
  );
};

export default MainButton;
