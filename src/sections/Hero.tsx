import gsap from "gsap";
import { FileSpreadsheet, FolderEdit } from "lucide-react";
import { useState } from "react";
import { FloatingShapes } from "../components/FloatingShapes";

export const Hero = () => {
  ////////////////////

  window.addEventListener("load", () => {
    const hero = document.querySelector("[data-hero]");

    const tl = gsap.timeline();

    tl.to(hero, {
      "--maskSize1": "0%",
      ease: "back.out(2)",
    }).to(hero, {
      "--maskSize2": "13%",
      "--maskSize3": "14%",
      duration: 0.5,
      delay: 0.5,
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
      "--maskSize1": "13%",
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
  ////////////////////////

  const [isHovered, setHoverState] = useState(false);
  const [isHovered2, setHoverState2] = useState(false);

  //////////////////////
  return (
    <>
      <div className="fixed z-10 w-screen">
        <div
          className="relative text-center bg-dark-background"
          data-hh>
          <FloatingShapes />
          <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
            <div className="flex flex-col scale-100 gap-11 ">
              {" "}
              <p className="hero-text text-dark-text">HELLO! MY NAME IS</p>
              <h1 className=" text-9xl hg text-primary">
                <span className="daniel"> DANIEL </span>
                <span className=" aliphon">ALIPHON</span>
              </h1>
              <p className="hero-text text-dark-text">
                AND THIS IS MY PORTFOLIO
              </p>
            </div>

            <div className="flex gap-14 ">
              <button
                className={`flex items-center gap-2 p-4 text-4xl rounded-full hero-p-btn hero-btn bg-primary transition-all ${
                  isHovered ? "scale-105" : "scale-100"
                }`}>
                Resume
                <FileSpreadsheet className="w-8 h-8" />
              </button>

              <button
                className={`box-border flex items-center gap-3 p-4 text-4xl border-4 rounded-full hero-p-btn transition-all hero-btn border-primary text-primary ${
                  isHovered2 ? "scale-105" : "scale-100"
                }`}>
                Projects
                <FolderEdit className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* secondary */}

          <div
            className="absolute top-0 left-0 w-full h-full font-semibold hero-secondary"
            aria-hidden="true"
            data-hero>
            <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
              <p className="text-text ">HELLO! MY NAME IS</p>

              <h1 className="text-text text-9xl">DANIEL ALIPHON</h1>

              <p className="text-text">AND THIS IS MY PORTFOLIO</p>

              <div className="flex gap-14">
                <button
                  onMouseLeave={() => setHoverState(false)}
                  onMouseEnter={() => setHoverState(true)}
                  className={`flex items-center gap-2 p-4 text-4xl rounded-full hero-t-btn hero-btn text-primary transition-all bg-dark-background ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}>
                  Resume
                  <FileSpreadsheet className="w-8 h-8" />
                </button>

                <button
                  onMouseLeave={() => setHoverState2(false)}
                  onMouseEnter={() => setHoverState2(true)}
                  className={`box-border flex items-center gap-3 p-4 text-4xl border-4 rounded-full ${
                    isHovered2 ? "scale-105" : "scale-100"
                  } hero-t-btn hero-btn transition-all border-dark-background text-text`}>
                  Projects
                  <FolderEdit className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>

          {/* tertiary */}

          <div
            className="absolute top-0 left-0 w-full h-full font-semibold hero-tertiary"
            aria-hidden="true"
            data-hero2>
            <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
              <p className="text-text ">HELLO! MY NAME IS</p>

              <h1 className="text-text text-9xl">DANIEL ALIPHON</h1>

              <p className="text-text">AND THIS IS MY PORTFOLIO</p>

              <div className="flex gap-14">
                <button
                  onMouseLeave={() => setHoverState(false)}
                  onMouseEnter={() => setHoverState(true)}
                  className={`flex items-center transition-all gap-2 p-4 text-4xl rounded-full hero-t-btn hero-btn text-primary bg-dark-background ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}>
                  Resume
                  <FileSpreadsheet className="w-8 h-8" />
                </button>

                <button
                  onMouseLeave={() => setHoverState2(false)}
                  onMouseEnter={() => setHoverState2(true)}
                  className={`box-border transition-all flex items-center gap-3 p-4 text-4xl border-4 rounded-full ${
                    isHovered2 ? "scale-105" : "scale-100"
                  } hero-t-btn hero-btn border-dark-background text-text`}>
                  Projects
                  <FolderEdit className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen" />
    </>
  );
};

{
  /* <h1 className="absolute p-1 text-2xl border-4 border-background  w-[90px] left-2 bottom-2 text-dark-text">
              CSS IS AWESOME
            </h1> */
}
