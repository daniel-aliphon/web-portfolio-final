import { Menu, X } from "lucide-react";
import { useState } from "react";

export const MenuBtn = () => {
  //
  const [menuVisibility, setMenuVisibility] = useState(false);
  //
  return (
    <>
      <X
        onClick={() => setMenuVisibility(!menuVisibility)}
        size={28}
        className={`text-dark-text/70 hover:cursor-pointer duration-1000 transition-all hover:text-dark-text md:hidden ${
          menuVisibility ? "rotate-90" : "hidden"
        }`}
      />
      <Menu
        onClick={() => setMenuVisibility(!menuVisibility)}
        size={28}
        className={`text-dark-text/70 hover:cursor-pointer duration-1000 transition-all hover:text-dark-text md:hidden ${
          menuVisibility ? "hidden rotate-90" : ""
        }`}
      />
    </>
  );
};
