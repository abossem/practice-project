"use client";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import * as Yup from "yup";

export const LoginForm = () => {
  const formFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Username",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ];

  const initialValues = {
    name: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values: FormikValues) => {
    console.log("data", values);
    toast.loading("Login Error!");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="space-y-4 mx-auto bg-gray-400/20 p-4 rounded min-w-2xl max-w-5xl">
          {formFields.map((field, index) => (
            <div key={index}>
              <Field
                className="w-full p-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
              />

              <ErrorMessage
                name={field.name}
                component="p"
                className="text-red-500"
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-500 text-white px-5 py-2 rounded-2xl hover:bg-blue-400 transition-all duration-300 cursor-pointer "
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};
