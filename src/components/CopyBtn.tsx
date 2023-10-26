import { Copy } from "lucide-react";
import { useState } from "react";

export const CopyBtn = ({ text }: { text: string }) => {
  //

  const copy = () => {
    navigator.clipboard.writeText(text);
    console.log(text);
  };

  //

  const [tooltipText, setToolTipText] = useState("copy to clipboard");

  //
  return (
    <>
      <div className="group/tooltip relative">
        <span className="invisible absolute bottom-[150%] left-2/4 z-[1] ml-[-75px] w-[140px] rounded-md bg-[#555555af] p-[5px] text-center text-white opacity-0 transition-opacity duration-[0.3s] after:absolute after:left-2/4 after:top-full after:ml-[-5px] after:border-[5px] after:border-solid after:border-[#555_transparent_transparent_transparent] after:content-[''] group-hover/tooltip:visible group-hover/tooltip:opacity-100">
          {tooltipText}
        </span>
        <Copy
          onClick={() => {
            copy();
            setToolTipText("copied!");
            setTimeout(() => setToolTipText("copy to clipboard"), 3000);
          }}
        />
      </div>
    </>
  );
};
