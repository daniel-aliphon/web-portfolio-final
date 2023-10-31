import { Copy } from "lucide-react";
import { Tooltip } from "./Tooltip";
import { useState } from "react";

export const CopyBtn = ({ copyText }: { copyText: string }) => {
  //

  const copy = () => {
    navigator.clipboard.writeText(copyText);
  };

  const [tooltipText, setToolTipText] = useState("Copy to clipboard");
  //
  return (
    <>
      <Tooltip tooltipText={tooltipText}>
        <Copy
          onClick={() => {
            copy();
            setToolTipText("Copied!");
            setTimeout(() => setToolTipText("Copy to clipboard"), 3000);
          }}
        />
      </Tooltip>
    </>
  );
};
