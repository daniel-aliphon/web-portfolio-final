import { Heading } from "../../components/Heading";
import { techIcons } from "../../main"; //
export const Tech = () => {
  return (
    <>
      <div>
        <Heading>Tech</Heading>

        <div className="maxlg grid grid-cols-5 gap-[5vw] max-sm:grid-cols-3">
          {techIcons.map((icon) => (
            <div
              key={icon.name}
              className="group/tooltip relative grid place-items-center">
              <span
                className={`invisible absolute -bottom-7 left-2/4 z-[1] ml-[-75px] w-[140px] rounded-md bg-[#00000090] p-[5px] text-center text-white opacity-0 transition-opacity duration-[0.3s] group-hover/tooltip:visible group-hover/tooltip:opacity-100`}>
                {icon.description}
              </span>
              <img
                className="rounded-lg transition-all duration-300 hover:scale-125"
                src={icon.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
