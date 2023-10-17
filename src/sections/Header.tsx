import { Sun } from "lucide-react";
import { navLinks } from "..";

export const Header = () => {
  return (
    <div className="sticky bg-transparent -top-8">
      <div className=" w-full bg-cover bg-no-repeat bg-[url('./assets/header2.svg')] bg-top h-[30px]"></div>
      <div className=" bg-[#0066FF]">
        <div className="box-border flex items-center justify-between p-2 pb-0 mx-auto text-2xl max-w-7xl">
          <h1 className="text-5xl font-semibold tracking-wider text-white">
            Daniel Aliphon
          </h1>

          <div className="flex items-center space-x-2 ">
            {navLinks.map((navLink) => (
              <button
                key={navLink.name}
                className="px-3 py-2 bg-white rounded-full">
                <a href={navLink.href}>{navLink.name}</a>
              </button>
            ))}
            <button className="px-3 h-[48px] py-2 bg-white rounded-full">
              <Sun />
            </button>
          </div>
        </div>
      </div>
      <div className="haha bg-no-repeat bg-cover bg-[url('./assets/header.svg')] w-full absolute h-[31px]"></div>
    </div>
  );
};
