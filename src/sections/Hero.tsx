import gsap from "gsap";
import { FileSpreadsheet, FolderEdit } from "lucide-react";

export const Hero = () => {
  //

  window.addEventListener("load", () => {
    const hero = document.querySelector("[data-hero]");

    const tl = gsap.timeline();

    tl.to(hero, {
      "--maskSize1": "5%",
      ease: "back.out(2)",
    });

    const hh = document.querySelector("[data-hh]");

    hh?.addEventListener("mousemove", (e: any) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      gsap.to(hero, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.2,
        ease: "sine.out",
      });
    });
  });

  ////////////////////////

  window.addEventListener("load", () => {
    const hero = document.querySelector("[data-hero2]");

    const tl = gsap.timeline();

    tl.to(hero, {
      "--maskSize1": "15%",

      ease: "back.out(2)",
    });

    const hh = document.querySelector("[data-hh]");

    hh?.addEventListener("mousemove", (e: any) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      gsap.to(hero, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.8,
        ease: "sine.out",
      });
    });
  });
  return (
    <>
      <div className="fixed z-[10] w-screen">
        <div
          className="relative text-center bg-dark-background"
          data-hh>
          <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
            <p className="text-dark-text/70 ">HELLO! MY NAME IS</p>

            <h1 className=" text-9xl text-primary">DANIEL ALIPHON</h1>

            <p className="text-dark-text/70">AND THIS IS MY PORTFOLIO</p>

            <div className="flex gap-14">
              {/*  */}

              <button className="flex items-center gap-2 p-4 text-4xl rounded-full bg-primary">
                Resume
                <FileSpreadsheet className="w-8 h-8" />
              </button>

              <button className="box-border flex items-center gap-3 p-4 text-4xl border-4 rounded-full border-primary text-primary">
                Projects
                <FolderEdit className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/*  */}

          <div
            className="absolute top-0 left-0 w-full h-full font-semibold hero--secondary"
            aria-hidden="true"
            data-hero>
            <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
              <p className="text-text ">HELLO! MY NAME IS</p>

              <h1 className="text-text text-9xl">DANIEL ALIPHON</h1>

              <p className="text-text">AND THIS IS MY PORTFOLIO</p>

              <div className="flex gap-14">
                <button className="flex items-center gap-2 p-4 text-4xl rounded-full text-primary bg-text">
                  Resume
                  <FileSpreadsheet className="w-8 h-8" />
                </button>

                <button className="box-border flex items-center gap-3 p-4 text-4xl border-4 rounded-full border-text text-text">
                  Projects
                  <FolderEdit className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>

          {/*  */}

          <div
            className="absolute top-0 left-0 w-full h-full font-semibold hero--tertiary"
            aria-hidden="true"
            data-hero2>
            <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
              <p className="text-text ">HELLO! MY NAME IS</p>

              <h1 className="text-text text-9xl">DANIEL ALIPHON</h1>

              <p className="text-text">AND THIS IS MY PORTFOLIO</p>

              <div className="flex gap-14">
                <button className="flex items-center gap-2 p-4 text-4xl rounded-full text-primary bg-text">
                  Resume
                  <FileSpreadsheet className="w-8 h-8" />
                </button>

                <button className="box-border flex items-center gap-3 p-4 text-4xl border-4 rounded-full border-text text-text">
                  Projects
                  <FolderEdit className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
      <div className="w-screen h-screen" />
    </>
  );
};
