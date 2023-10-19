export const ToggleSpotlightCursor = () => {
  return (
    <>
      <div className="relative grid w-16 transition-all duration-300 h-16 rounded-full outline-[#0000] hover:outline outline-4 bgg bg-dark-background/70 place-content-center">
        {/*  */}
        <div className="border-4 rounded-full border-primary h-9 w-9"></div>

        <div className="circlee top-2 transition-transform duration-300 left-2 absolute w-[30px] h-[30px] rounded-full  bg-primary"></div>
      </div>
    </>
  );
};
