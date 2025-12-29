import { Link } from "@/src/i18n/navigation";

export const NavLinks = () => {
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
          className="mx-6 text-lg text-gray/15 leading-[150%]"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
