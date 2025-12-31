import React from "react";
import { CsrLogin } from "../csr/CsrLogin";
import { auth } from "@/src/auth";

export const Login = async () => {
  const session = await auth();

  return <CsrLogin />;
};
