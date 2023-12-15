import { Input } from "antd";
import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

const AntInput = (props) => {

  const { className } = props;
  const labelClasses = clsx(styles["ant-input-wrap"], {
    [className]: className,
  });
  const { label } = props;
  return (
    <div className={labelClasses}>
      <label className={styles['label']} htmlFor={label}>
        {label}
      </label>
      <Input className={styles["input"]} id={label} />
    </div>
  );
};

export default AntInput;
