"use client";
import { useTranslations } from "next-intl";

export const CsrLogin = () => {
  const t = useTranslations("auth.login");

  return (
    <div className="flex flex-col bg-white">
      <div className="flex items-center justify-center flex-col gap-3">
        <h2 className="text-[28px] md:text-4xl lg:text-5xl font-semibold ">
          {t("login")}
        </h2>

        <p className="text-sm md:text-base lg:text-lg text-[#4C4C4D]">
          {t("welcome")}
        </p>
      </div>
    </div>
  );
};
