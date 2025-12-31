"use client";
import { useTranslations } from "next-intl";

import * as Yup from "yup";

export const LoginForm = () => {
  const t = useTranslations("auth.login");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return <div>LoginForm</div>;
};
