export const Footer = () => {
  return (
    <>
      <div
        className={`mt-40 h-[30px] w-full bg-transparent bg-[url('../assets/design/header-top-wave.svg')] bg-cover bg-no-repeat`}></div>
      <div className="w-full bg-dark-foreground px-6 max-md:px-4 max-sm:px-2">
        <div className="mx-auto flex max-w-7xl flex-row justify-between bg-dark-foreground text-dark-text">
          {" "}
          <p className="p-1">Made with ❤ & ☕ by Dan</p>
          <p className="p-1">© 2023 All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};
