import { getTranslations } from "next-intl/server";
import { Logo } from "../../common/Logo";
import { NavLinks } from "./NavLinks";
import { Link } from "@/src/i18n/navigation";

export const Header = async () => {
  const t = await getTranslations("home");

  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[50px]">
          <Logo />

          <NavLinks />
        </div>

        <div className="flex items-center">
          <Link href={"/signup"} className="px-[34px] py-3.5">
            {t("signUp")}
          </Link>

          <Link
            href={"/login"}
            className="bg-primary-50 text-white rounded-lg px-[34px] py-3.5"
          >
            {t("login")}
          </Link>
        </div>
      </div>
    </div>
  );
};
