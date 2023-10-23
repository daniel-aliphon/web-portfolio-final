import { Menu, Sun } from "lucide-react";
import { navLinks } from "..";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 mb-5">
      <div className="bg-[#0066FF]">
        <div className="mx-auto box-border flex w-full max-w-7xl items-center justify-between p-2">
          {/*  */}

          <h1 className="text-3xl font-semibold tracking-wider text-dark-text">
            Daniel Aliphon
          </h1>
          <Menu
            size={28}
            className="text-dark-text/70 hover:cursor-pointer hover:text-dark-text md:hidden"
          />

          <div className="flex items-center space-x-3 text-sm font-semibold max-md:hidden">
            {navLinks.map((navLink) => (
              <a
                key={navLink.name}
                href={navLink.href}>
                <button className="border-b-4 border-dark-text/70 bg-primary px-3 py-2 tracking-widest text-dark-text/70 hover:border-b-dark-text hover:text-dark-text">
                  {navLink.name}
                </button>
              </a>
            ))}

            <button className="text-dark-text/70 hover:text-dark-text">
              <Sun />
            </button>
          </div>
        </div>
      </div>

      <div className="h-[30px] w-full bg-transparent bg-[url('./assets/header-bottom-wave.svg')] bg-cover bg-no-repeat"></div>
    </div>
  );
};

{
  /* <div className="h-[30px] w-full bg-[url('./assets/header-top-wave.svg')] bg-cover bg-top bg-no-repeat"></div> */
}
