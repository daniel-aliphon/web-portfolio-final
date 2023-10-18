export const ToggleSpotlightCursor = () => {
  return (
    <>
      <div className="relative grid w-16 h-16 rounded-full bg-dark-background/70 place-content-center">
        {/*  */}
        <div className="border-4 rounded-full border-primary h-9 w-9"></div>

        <div className="absolute w-8 h-8 rounded-full top-2 left-2 bg-primary"></div>
      </div>
    </>
  );
};
