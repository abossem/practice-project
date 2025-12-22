"use client";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";

export const SignUpForm = () => {
  const formFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "password",
    },
  ];

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values: FormikValues) => {
    console.log("Form data", values);
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
        </Form>
      )}
    </Formik>
  );
};
