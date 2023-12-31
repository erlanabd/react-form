import React, { useEffect } from "react";
import TitleBar from "../../components/title-bar";
import styles from "./styles.module.scss";
import LogoImage from "../../components/logo-image";
import GoogleButton from "../../components/google-button";
import OrDesign from "../../components/or-design";
import InputPassword from "../../components/input-password";
import Footer from "../../components/footer";
import AntInput from "../../components/ant-input";
import MainButton from "../../components/main-button";
import { Controller, useForm } from "react-hook-form";

const INPUT_EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LogIn = () => {
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
          rules={{
            required: "Please enter an email",
            pattern: {
              value: INPUT_EMAIL_PATTERN,
              message: "Please enter a valid email",
            },
          }}
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
          rules={{
            minLength: {
              value: 8,
              message: "It must be at least 8 characters",
            },
            required: "This field is mandatory",
          }}
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

export { INPUT_EMAIL_PATTERN, LogIn };
