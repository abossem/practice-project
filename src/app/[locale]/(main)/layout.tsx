import { MainLayoutHeader } from "@/src/components";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MainLayoutHeader />
      <main>{children}</main>
    </div>
  );
};

export default layout;
