export const FloatingShapes = ({ color }: { color: string }) => {
  // Rest of the code...
  const shapes = [
    {
      left: "left-[5%]",
      width: "w-[30px]",
      height: "h-[30px]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-23000",
    },
    {
      left: "left-[10%]",
      width: "w-[30px]",
      height: "h-[30px]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-5000",
    },
    {
      left: "left-[15%]",
      width: "w-[130px]",
      height: "h-[130px]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-9000",
    },
    {
      left: "left-[90%]",
      width: "w-[90px]",
      height: "h-[90px]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-18000",
    },
    {
      left: "left-[25%]",
      width: "w-[80px]",
      height: "h-[80px]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-21000",
    },
    {
      left: "left-[40%]",
      width: "w-[100px]",
      height: "h-[100px]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-6000",
    },
    {
      left: "left-[50%]",
      width: "w-[50px]",
      height: "h-[50px]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-15000",
    },
    {
      left: "left-[60%]",
      width: "w-[40px]",
      height: "h-[40px]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-8000",
    },
    {
      left: "left-[75%]",
      width: "w-[70px]",
      height: "h-[70px]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-18000",
    },
    {
      left: "left-[70%]",
      width: "w-[40px]",
      height: "h-[40px]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-0",
    },
    {
      left: "left-[85%]",
      width: "w-[90px]",
      height: "h-[90px]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-1000",
    },
    {
      left: "left-[95%]",
      width: "w-[20px]",
      height: "h-[20px]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-9000",
    },
  ];
  return (
    <ul className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
      {shapes.map((shape) => (
        <li
          key={shape.height + shape.left}
          className={`absolute block text-sm list-none bg -bottom-[130px] ${color} ${shape.animation} ${shape.width} ${shape.height} ${shape.left} ${shape.animationDelay}`}></li>
      ))}
      <li
        className={`absolute flex list-nones animate-float-clockwise ${color} -bottom-[130px] w-[70px] h-[70px] leading-none line items-start flex-col justify-between left-[10%] animation-delay-18000 text-dark-text/70 text-xl p-[2px]`}>
        <span>CSS </span> IS<span>AWESOME</span>
      </li>
    </ul>
  );
};
