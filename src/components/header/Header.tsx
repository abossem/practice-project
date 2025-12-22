"use client";
import { Link, usePathname } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations("header");

  const pathname = usePathname();

  const pageRoute = pathname === "/login" ? "/signup" : "/login";

  return (
    <div className="flex justify-between items-center w-full container mx-auto pt-4">
      <p>Image</p>
      <Link href={pageRoute} className="px-3 py-2 bg-green-600/20 rounded-xl">
        {t(pathname === "/login" ? "signup" : "login")}
      </Link>
    </div>
  );
};
