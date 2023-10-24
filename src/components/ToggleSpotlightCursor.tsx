export const ToggleSpotlightCursor = () => {
  return (
    <>
      <div className="group relative grid h-16 w-16 place-content-center rounded-full bg-dark-background/70 transition-all duration-300">
        {/*  */}
        <div className="group h-9 w-9 rounded-full border-4 border-primary"></div>

        <div className="absolute left-2 top-2 h-[31px] w-[31px] rounded-full bg-primary duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
      </div>
    </>
  );
};
