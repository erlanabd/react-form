import React from "react";
import styles from "./styles.module.scss";
import TitleBar from "../../components/title-bar";
import LogoImage from "../../components/logo-image";
import GoogleButton from "../../components/google-button";
import OrDesign from "../../components/or-design";
import MyInput from "../../components/my-input";
import Footer from "../../components/footer";
import AntInput from "../../components/ant-input";
import MainButton from "../../components/main-button";

const SignUp = () => {
  return (
    <div className={styles["login-wrap"]}>
      <LogoImage className={styles["sign-in-logo"]} />
      <TitleBar
        title="Create an Account"
        description="Sign up now to get started with an account."
      />
      <form>
        <GoogleButton />
        <OrDesign />
        <AntInput label="Full Name*" />
        <AntInput className={styles["label-input"]} label="Email Adress*" />
        <MyInput labelText='Password*'/>
        <MyInput labelText='Confirm Password*'/>
        <div className={styles["checkbox-forgot-wrap"]}>
          <div className={styles["checkbox-wrap"]}>
            <input
              className={styles["checkbox"]}
              id="checkbox"
              type="checkbox"
            />
            <label className={styles["label"]} htmlFor="checkbox">
              I have read and agree to the
              <a href="#" disabled>Terms of Service</a>
            </label>
          </div>
        </div>
        <MainButton title="Get Started" />
        <Footer
          className={styles["footer-sign-in"]}
          text="Already have an account?"
          linkText="Sign in"
          link="/"
        />
      </form>
    </div>
  );
};

export default SignUp;
