"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export const AdTape = () => {
  const t = useTranslations("home");

  return (
    <p className="my-5 mx-[30px] rounded-lg bg-primary-50 flex items-center justify-center py-2.5 lg:py-3 leading-[150%] text-sm lg:text-lg text-white">
      {t("adTape")}
      <span className="mx-6 ">
        <ArrowRight size={24} />
      </span>
    </p>
  );
};
