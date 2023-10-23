import gsap from "gsap";
import { ArrowDown, FileSpreadsheet, FolderEdit } from "lucide-react";
import { useState } from "react";
import { FloatingIcons } from "../components/FloatingIcons";
import { ToggleSpotlightCursor } from "../components/ToggleSpotlightCursor";

export const Hero = () => {
  ////////////////////
  const [spotlightVisible, setSpotlight] = useState(false);

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
        duration: 0.5,
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
          className="relative text-center bgbg bg-dark-background"
          data-hh>
          <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold max-sm:text-xl gap-11">
            <FloatingIcons />

            <div className="flex flex-col scale-100 max-sm:gap-1 gap-11 ">
              <p className="hero-text text-dark-text">HELLO! MY NAME IS</p>
              <h1 className="max-sm:text-7xl text-[10rem] hg text-primary">
                <span className="daniel"> DANIEL </span>
                <span className=" aliphon">ALIPHON</span>
              </h1>
              <p className="hero-text text-dark-text">
                AND THIS IS MY PORTFOLIO
              </p>
            </div>

            <div className="flex justify-center gap-28 max-sm:flex-col max-sm:gap-0">
              <button
                onMouseEnter={() => setHoverState(true)}
                onMouseLeave={() => setHoverState(false)}
                className={`flex leading-tight items-center gap-2 p-4 text-4xl rounded-full bg-primary transition-all ${
                  isHovered
                    ? "scale-105 max-sm:scale-[0.70]"
                    : "scale-100 max-sm:scale-[0.65]"
                }`}>
                Resume
                <FileSpreadsheet className="w-8 h-8" />
              </button>
              <a href="#Projects">
                <button
                  onMouseEnter={() => setHoverState2(true)}
                  onMouseLeave={() => setHoverState2(false)}
                  className={`box-border leading-tight flex items-center gap-3 p-4 text-4xl border-4 bg-transparent rounded-full transition-all border-primary text-primary ${
                    isHovered2
                      ? "scale-105 max-sm:scale-[0.70]"
                      : "scale-100 max-sm:scale-[0.65]"
                  }`}>
                  Projects
                  <FolderEdit className="w-8 h-8" />
                </button>
              </a>
            </div>
          </div>

          {/* secondary */}

          <div
            className={`absolute ${
              spotlightVisible ? "" : "hiddenn"
            } top-0 left-0 w-full h-full font-semibold hero-secondary`}
            aria-hidden="true"
            data-hero>
            <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold max-sm:text-xl gap-11">
              <FloatingIcons />

              <div className="flex flex-col scale-100 max-sm:gap-1 gap-11 ">
                <p className="hero-text text-text">HELLO! MY NAME IS</p>
                <h1 className="max-sm:text-7xl text-[10rem] hg text-text">
                  DANIEL ALIPHON
                </h1>
                <p className="hero-text text-text">AND THIS IS MY PORTFOLIO</p>
              </div>

              <div className="flex justify-center max-sm:flex-col max-sm:gap-0 gap-28 ">
                <button
                  onMouseEnter={() => setHoverState(true)}
                  onMouseLeave={() => setHoverState(false)}
                  className={`flex text-primary leading-tight items-center gap-2 p-4 text-4xl rounded-full bg-dark-background transition-all ${
                    isHovered
                      ? "scale-105 max-sm:scale-[0.70]"
                      : "scale-100 max-sm:scale-[0.65]"
                  }`}>
                  Resume
                  <FileSpreadsheet className="w-8 h-8" />
                </button>
                <a href="#Projects">
                  <button
                    onMouseEnter={() => setHoverState2(true)}
                    onMouseLeave={() => setHoverState2(false)}
                    className={`box-border leading-tight flex items-center gap-3 p-4 text-4xl border-4 bg-transparent rounded-full transition-all border-dark-background text-text ${
                      isHovered2
                        ? "scale-105 max-sm:scale-[0.70]"
                        : "scale-100 max-sm:scale-[0.65]"
                    }`}>
                    Projects
                    <FolderEdit className="w-8 h-8" />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* tertiary */}

          <div
            className={`absolute ${
              spotlightVisible ? "" : "hiddenn"
            } top-0 left-0 w-full h-full font-semibold hero-tertiary`}
            aria-hidden="true"
            data-hero2>
            <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold max-sm:text-xl gap-11">
              <FloatingIcons />

              <div className="flex flex-col scale-100 max-sm:gap-1 gap-11 ">
                <p className="hero-text text-text">HELLO! MY NAME IS</p>
                <h1 className="max-sm:text-7xl text-[10rem] hg text-text">
                  DANIEL ALIPHON
                </h1>
                <p className="hero-text text-text">AND THIS IS MY PORTFOLIO</p>
              </div>

              <div className="flex justify-center max-sm:flex-col max-sm:gap-0 gap-28 ">
                <button
                  onMouseEnter={() => setHoverState(true)}
                  onMouseLeave={() => setHoverState(false)}
                  className={`flex text-primary leading-tight items-center gap-2 p-4 text-4xl rounded-full bg-dark-background transition-all ${
                    isHovered
                      ? "scale-105 max-sm:scale-[0.70]"
                      : "scale-100 max-sm:scale-[0.65]"
                  }`}>
                  Resume
                  <FileSpreadsheet className="w-8 h-8" />
                </button>
                <a href="#Projects">
                  <button
                    onMouseEnter={() => setHoverState2(true)}
                    onMouseLeave={() => setHoverState2(false)}
                    className={`box-border leading-tight flex items-center gap-3 p-4 text-4xl border-4 bg-transparent rounded-full transition-all border-dark-background text-text ${
                      isHovered2
                        ? "scale-105 max-sm:scale-[0.70]"
                        : "scale-100 max-sm:scale-[0.65]"
                    }`}>
                    Projects
                    <FolderEdit className="w-8 h-8" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col space-y-1 max-sm:flex-row bottom-5 right-5">
          <button
            onClick={() => {
              setSpotlight(!spotlightVisible);
            }}>
            <ToggleSpotlightCursor />
          </button>
          <a href="#AboutMe">
            <button className="grid w-16 h-16 rounded-full bg-dark-background/70 text-primary place-content-center">
              <ArrowDown size={50} />
            </button>
          </a>
        </div>
      </div>

      <div className="w-screen h-screen" />
    </>
  );
};
