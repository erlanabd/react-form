import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import TitleBar from "../../components/title-bar";
import LogoImage from "../../components/logo-image";
import GoogleButton from "../../components/google-button";
import OrDesign from "../../components/or-design";
import InputPassword from "../../components/my-input";
import Footer from "../../components/footer";
import AntInput from "../../components/ant-input";
import MainButton from "../../components/main-button";
import { Controller, useForm } from "react-hook-form";
import { clsx } from "clsx";
import StyledError from "../../components/styled-error-text";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp = () => {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .min(5, "It must be at least 5 characters")
      .required("Please enter your fullname"),
    emailAdress: yup
      .string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email")
      .required("Please enter your email address"),
    userPassword: yup
      .string()
      .required("Please enter your password.")
      .min(8, "Your password is too short."),
    confirmUserPassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("userPassword")], "Your passwords do not match."),
    agreement: yup
      .string()
      .required("Please confirm that you have read and agree with Terms"),
  });

  const {
    control,
    handleSubmit,
    formState: { isDirty, isSubmitSuccessful, errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      emailAdress: "",
      userPassword: "",
      confirmUserPassword: "",
      agreement: "",
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
        confirmUserPassword: "",
        agreement: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  const checkboxClasses = clsx(styles["checkbox"], {
    [styles["checkbox-error"]]: errors,
  });

  return (
    <div className={styles["login-wrap"]}>
      <LogoImage className={styles["sign-in-logo"]} />
      <TitleBar
        title="Create an Account"
        description="Sign up now to get started with an account."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <GoogleButton />
        <OrDesign />
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <AntInput
                value={field.value}
                onChange={field.onChange}
                label="Full Name*"
                hasError={fieldState.error}
              />
            );
          }}
        />
        <Controller
          name="emailAdress"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <AntInput
                value={field.value}
                onChange={field.onChange}
                className={styles["label-input"]}
                label="Email Adress*"
                hasError={fieldState.error}
              />
            );
          }}
        />
        <Controller
          name="userPassword"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <InputPassword
                value={field.value}
                onChange={field.onChange}
                labelText="Password*"
                hasError={fieldState.error}
              />
            );
          }}
        />
        <Controller
          name="confirmUserPassword"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <InputPassword
                value={field.value}
                onChange={field.onChange}
                labelText="Confirm Password*"
                hasError={fieldState.error}
              />
            );
          }}
        />
        <Controller
          name="agreement"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <div className={styles["checkbox-forgot-wrap"]}>
                <div className={styles["checkbox-wrap"]}>
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    checked={field.value}
                    className={checkboxClasses}
                    id="checkbox"
                    type="checkbox"
                  />
                  <label className={styles["label"]} htmlFor="checkbox">
                    I have read and agree to the
                    <a href="google.com" disabled>
                      Terms of Service
                    </a>
                  </label>
                </div>
                {fieldState.error && (
                  <StyledError>{fieldState.error.message}</StyledError>
                )}
              </div>
            );
          }}
        />

        <MainButton disabled={!isDirty} title="Get Started" />
        <Footer
          className={styles["footer-sign-in"]}
          text="Already have an account?"
          linkText="Sign in"
          link="/log-in"
        />
      </form>
    </div>
  );
};

export default SignUp;
