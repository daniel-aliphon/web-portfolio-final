import { ArrowDown, FileSpreadsheet, FolderEdit } from "lucide-react";
import { FloatingIcons } from "../../components/FloatingIcons";

export const Hero = () => {
  //

  return (
    <>
      <div className="fixed z-10 w-screen">
        <div
          className="relative bg-dark-background text-center"
          data-hh>
          <div className="flex h-screen flex-col items-center justify-center gap-11 text-5xl max-sm:text-xl">
            <FloatingIcons />

            <div className="flex scale-100 flex-col gap-11 font-primary font-semibold max-sm:gap-1">
              <p className="text-dark-text">HELLO! MY NAME IS</p>
              <h1 className="text-[10rem] text-primary max-sm:text-7xl">
                DANIEL ALIPHON
              </h1>
              <p className="text-dark-text">AND THIS IS MY PORTFOLIO</p>
            </div>

            <div className="flex justify-center gap-28 font-secondary font-medium max-sm:flex-col max-sm:gap-0">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/14d64hEWv3FGhPCcJh4FnvHkba3-JsHjp/view?usp=drive_link">
                <button
                  className={`flex scale-100 gap-2 rounded-full bg-primary p-4 text-center text-4xl leading-normal transition-all hover:scale-105 max-sm:scale-[0.65] hover:max-sm:scale-[0.70]`}>
                  Resume
                  <FileSpreadsheet className="h-8 w-8 self-center" />
                </button>
              </a>

              <a href="#Projects">
                <button
                  className={`flex scale-100 gap-2 rounded-full border-4 border-primary p-4 text-4xl leading-tight text-primary transition-all hover:scale-105 max-sm:scale-[0.65] hover:max-sm:scale-[0.70]`}>
                  <span className="mb-1">Projects</span>
                  <FolderEdit className="h-8 w-8 self-center" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <a
          href="#About"
          className="absolute bottom-5 right-5 rounded-full">
          <button className="grid h-16 w-16 place-content-center rounded-full bg-dark-background/70 text-primary">
            <ArrowDown size={50} />
          </button>
        </a>
      </div>

      {/* filler div */}
      <div className="h-screen w-screen" />
    </>
  );
};
