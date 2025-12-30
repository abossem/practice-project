"use client";

import { useTranslations } from "next-intl";

export const StudentTestimonials = () => {
  const t = useTranslations("auth.testimonials");

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-1.5">
        <h1 className="leading-[150%] text-4xl">{t("title")}</h1>

        <p className="text-lg text-dark/15 leading-[150%]">
          {t("description")}
        </p>
      </div>
    </div>
  );
};
