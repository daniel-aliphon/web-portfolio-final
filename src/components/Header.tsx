import { navLinks } from "../main";
import { MenuBtn } from "./MenuBtn";
import { SmallText } from "./SmallText";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#0066FF]">
        <div className="mx-auto box-border flex w-full max-w-7xl items-center justify-between px-6 py-2 max-md:p-4 max-sm:p-2">
          <SmallText className="font-semibold text-dark-text">
            DANIEL ALIPHON
          </SmallText>
          <MenuBtn />

          <div className="flex items-center space-x-3 font-semibold max-md:hidden">
            {navLinks.map((navLink) => (
              <a
                key={navLink.name}
                href={navLink.href}>
                <SmallText className="bg-primary px-3 py-2 font-semibold text-dark-text/70 hover:text-dark-text">
                  {navLink.name}
                </SmallText>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`h-[30px] w-full bg-transparent bg-[url('../assets/design/header-bottom-wave.svg')] bg-cover bg-no-repeat`}></div>
    </div>
  );
};
