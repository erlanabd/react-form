import React from "react";
import TitleBar from "../../components/title-bar";
import styles from "./styles.module.scss";
import LogoImage from "../../components/logo-image";
import GoogleButton from "../../components/google-button";
import OrDesign from "../../components/or-design";
import MyInput from "../../components/my-input";
import Footer from "../../components/footer";
import AntInput from "../../components/ant-input";
import MainButton from "../../components/main-button";

const LogIn = (props) => {
  const {} = props;
  return (
    <div className={styles["login-wrap"]}>
      <LogoImage className={styles["sign-in-logo"]} />
      <TitleBar
        title="Log in to your Account"
        description="Welcome back, please enter your details"
      />
      <form>
        <GoogleButton />
        <OrDesign />
        <AntInput label="Email Adress" />
        <MyInput />
        <div className={styles["checkbox-forgot-wrap"]}>
          <div className={styles["checkbox-wrap"]}>
            <input
              className={styles["checkbox"]}
              id="checkbox"
              type="checkbox"
            />
            <label className={styles["label"]} htmlFor="checkbox">
              Remember me
            </label>
          </div>
          <span className={styles["text"]}>Forgot password?</span>
        </div>
        <MainButton title="Log in" />
        <Footer
          className={styles["footer-sign-in"]}
          text='Don"t have an account?'
          linkText="Sign Up"
          link="/sign-up"
        />
      </form>
    </div>
  );
};

export default LogIn;
