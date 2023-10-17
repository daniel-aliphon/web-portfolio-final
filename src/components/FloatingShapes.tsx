export const FloatingShapes = () => {
  const shapes = [
    {
      width: "w-[80px]",
      height: "h-[80px]",
      left: "left-[25%]",
      animationDelay: "animation-delay-100",
    },
    {
      width: "w-[20px]",
      height: "h-[20px]",
      left: "left-[95%]",
      animationDelay: "animation-delay-9000",
    },
    {
      width: "w-[70px]",
      height: "h-[70px]",
      left: "left-[75%]",
      animationDelay: "animation-delay-18000",
    },
    {
      width: "w-[30px]",
      height: "h-[30px]",
      left: "left-[10%]",
      animationDelay: "animation-delay-5000",
    },
    {
      width: "w-[40px]",
      height: "h-[40px]",
      left: "left-[60%]",
      animationDelay: "animation-delay-8000",
    },
    {
      width: "w-[90px]",
      height: "h-[90px]",
      left: "left-[85%]",
      animationDelay: "animation-delay-1000",
    },
    {
      width: "w-[50px]",
      height: "h-[50px]",
      left: "left-[50%]",
      animationDelay: "animation-delay-15000",
    },
    {
      width: "w-[100px]",
      height: "h-[100px]",
      left: "left-[40%]",
      animationDelay: "animation-delay-6000",
    },
  ];
  return (
    <ul className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
      {shapes.map((shape) => (
        <li
          key={shape.height}
          className={`animate-float absolute block list-none bg bg-primary -bottom-28 ${shape.width} ${shape.height} ${shape.left} ${shape.animationDelay}`}></li>
      ))}
      <li className="absolute flex list-nones animate-float bg-primary -bottom-28 w-[70px] h-[70px] leading-none line items-start flex-col justify-between left-[93%] animation-delay-2000 text-dark-text/30 text-xl p-[2px]">
        <span>CSS </span> IS<span>AWESOME</span>
      </li>
    </ul>
  );
};

{
  /*  */
}
