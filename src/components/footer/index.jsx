import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import clsx from "clsx";

const Footer = (props) => {
  const { text, linkText, className, link } = props;
  const classes = clsx(styles["footer-wrap"], {
    [className]: className,
  });
  return (
    <div className={classes}>
      <span className={styles['text']}>{text}</span>
      <Link className={styles['link']} to={{pathname: `${link}`}}>{linkText}</Link>
    </div>
  );
};

export default Footer;
