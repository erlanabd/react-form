import React, { useEffect } from "react";
import TitleBar from "../../components/title-bar";
import styles from "./styles.module.scss";
import LogoImage from "../../components/logo-image";
import GoogleButton from "../../components/google-button";
import OrDesign from "../../components/or-design";
import InputPassword from "../../components/my-input";
import Footer from "../../components/footer";
import AntInput from "../../components/ant-input";
import MainButton from "../../components/main-button";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LogIn = () => {
  const schema = yup.object().shape({
    emailAdress: yup
      .string()
      .required("Please enter your email")
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please enter a valid email"
      ),
    userPassword: yup
      .string()
      .min(5, "It must be at least 5 characters")
      .required("Please enter your password"),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      emailAdress: "",
      userPassword: "",
      rememberEmail: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        fullName: "",
        emailAdress: "",
        userPassword: "",
        rememberEmail: false,
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className={styles["login-wrap"]}>
      <LogoImage className={styles["sign-in-logo"]} />
      <TitleBar
        title="Log in to your Account"
        description="Welcome back, please enter your details"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <GoogleButton />
        <OrDesign />
        <Controller
          name="emailAdress"
          control={control}
          render={({ field, fieldState }) => (
            <AntInput
              value={field.value}
              onChange={field.onChange}
              label="Email Adress"
              hasError={fieldState.error}
            />
          )}
        />
        <Controller
          name="userPassword"
          control={control}
          render={({ field, fieldState }) => (
            <InputPassword
              value={field.value}
              onChange={field.onChange}
              hasError={fieldState.error}
            />
          )}
        />
        <Controller
          name="rememberEmail"
          control={control}
          render={({ field }) => (
            <div className={styles["checkbox-forgot-wrap"]}>
              <div className={styles["checkbox-wrap"]}>
                <input
                  className={styles["checkbox"]}
                  id="checkbox"
                  type="checkbox"
                  onChange={field.onChange}
                  value={field.value}
                  checked={field.value}
                />
                <label className={styles["label"]} htmlFor="checkbox">
                  Remember me
                </label>
              </div>
              <span className={styles["text"]}>Forgot password?</span>
            </div>
          )}
        />
        <MainButton disabled={!isDirty} title="Log in" />
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
