import { useEffect, useState } from "react";
import "./Tooltip.css"; // Create a CSS file for styling

const Tooltip = ({ text }: any) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the text after 2 seconds
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`fading-text ${isVisible ? "visible" : "hidden"}`}>
      {text}
    </div>
  );
};

export default Tooltip;
