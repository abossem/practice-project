import { StudentTestimonials } from "@/src/components/modules/auth/StudentTestimonials";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container flex items-center justify-between mt-[100px] mb-[150px] gap-[100px]">
      <StudentTestimonials />

      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
};

export default layout;
