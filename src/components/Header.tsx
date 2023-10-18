import { Menu, Sun } from "lucide-react";
import { navLinks } from "..";

export const Header = () => {
  return (
    <div className="sticky top-0 mb-5">
      <div className=" bg-[#0066FF]">
        <div className="box-border flex items-center justify-between w-full p-2 mx-auto max-w-7xl">
          {/*  */}

          <h1 className="text-3xl font-semibold tracking-wider text-dark-text">
            Daniel Aliphon
          </h1>
          <Menu
            size={28}
            className="md:hidden hover:cursor-pointer text-dark-text/70 hover:text-dark-text"
          />

          <div className="flex items-center space-x-3 text-sm font-semibold max-md:hidden ">
            {navLinks.map((navLink) => (
              <a
                key={navLink.name}
                href={navLink.href}>
                <button className="px-3 py-2 tracking-widest border-b-4 hover:text-dark-text hover:border-b-dark-text text-dark-text/70 border-dark-text/70 bg-primary ">
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

      <div className=" bg-[url('./assets/header-bottom-wave.svg')] bg-no-repeat bg-cover w-full h-[30px] bg-transparent"></div>
    </div>
  );
};

{
  /* <div className=" w-full bg-cover bg-no-repeat bg-[url('./assets/header-top-wave.svg')] bg-top h-[30px]"></div> */
}
