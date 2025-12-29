"use client";
import { Link, usePathname } from "@/src/i18n/navigation";

export const NavLinks = () => {
  const pathname = usePathname();

  const navItems: { label: string; href: string }[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Courses",
      href: "/courses",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div>
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`mx-6 text-lg text-gray/15 leading-[150%] ${
            pathname === item.href ? "bg-[#F1F1F3] rounded-lg px-6 py-3.5" : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
