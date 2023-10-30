import { ReactNode } from "react";

export const Tooltip = ({
  tooltipText,
  aboveValue,
  children,
}: {
  tooltipText: string;
  aboveValue: string;
  children: ReactNode;
}) => {
  //
  return (
    <>
      <div className="group/tooltip relative grid place-items-center">
        <span
          className={`invisible absolute bottom-[${aboveValue}] left-2/4 z-[1] ml-[-75px] w-[140px] rounded-md bg-[#00000090] p-[5px] text-center text-white opacity-0 transition-opacity duration-[0.3s] after:absolute after:left-2/4 after:top-full after:ml-[-5px] after:border-[5px] after:border-solid after:border-[#00000090_transparent_transparent_transparent] after:content-[''] group-hover/tooltip:visible group-hover/tooltip:opacity-100`}>
          {tooltipText}
        </span>
        {children}
      </div>
    </>
  );
};
