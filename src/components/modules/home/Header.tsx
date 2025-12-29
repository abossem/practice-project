import React from "react";
import { Logo } from "../../common/Logo";
import { NavLinks } from "./NavLinks";

export const Header = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[50px]">
          <Logo />

          <NavLinks />
        </div>

        <div>Action buttons</div>
      </div>
    </div>
  );
};
