import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../main";

export const MenuBtn = () => {
  //
  const [menuVisibility, setMenuVisibility] = useState(false);
  //
  return (
    <div className="md:hidden">
      <X
        onClick={() => setMenuVisibility(!menuVisibility)}
        size={28}
        className={`text-dark-text/70 hover:cursor-pointer duration-1000 transition-all hover:text-dark-text  ${
          menuVisibility ? "rotate-90" : "hidden"
        }`}
      />
      <Menu
        onClick={() => setMenuVisibility(!menuVisibility)}
        size={28}
        className={`text-dark-text/70 hover:cursor-pointer duration-1000 transition-all hover:text-dark-text  ${
          menuVisibility ? "hidden rotate-90" : ""
        }`}
      />
      <div
        className={`absolute flex flex-col justify-between items-center right-0  rounded-lg bg-primary text-dark-text p-7 gap-7 ${
          menuVisibility ? "" : "hidden"
        }`}>
        {navLinks.map((navLink) => (
          <a
            key={navLink.name}
            href={navLink.href}>
            {navLink.name}
          </a>
        ))}
      </div>
    </div>
  );
};
