import gsap from "gsap";
import { ArrowDown, FileSpreadsheet, FolderEdit } from "lucide-react";
import { useState } from "react";
import { FloatingIcons } from "../../components/FloatingIcons";
import { ToggleSpotlightCursor } from "../../components/ToggleSpotlightCursor";

export const Hero = () => {
  //

  const [spotlightVisible, setSpotlight] = useState(false);

  //
  // secondary
  //

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

  //
  // tertiary
  //

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

  //

  const [isHovered, setHoverState] = useState(false);
  const [isHovered2, setHoverState2] = useState(false);

  //

  return (
    <>
      <div className="fixed z-10 w-screen">
        <div
          className="relative bg-dark-background text-center font-semibold"
          data-hh>
          <div className="flex h-screen flex-col items-center justify-center gap-11 text-5xl max-sm:text-xl">
            <FloatingIcons />

            <div className="flex scale-100 flex-col gap-11 max-sm:gap-1">
              <p className="text-dark-text">HELLO! MY NAME IS</p>
              <h1 className="text-[10rem] text-primary max-sm:text-7xl">
                DANIEL ALIPHON
              </h1>
              <p className="text-dark-text">AND THIS IS MY PORTFOLIO</p>
            </div>

            <div className="flex justify-center gap-28 max-sm:flex-col max-sm:gap-0">
              <button
                onMouseEnter={() => setHoverState(true)}
                onMouseLeave={() => setHoverState(false)}
                className={`flex text-center leading-normal gap-2 p-4 text-4xl rounded-full bg-primary transition-all ${
                  isHovered
                    ? "scale-105 max-sm:scale-[0.70]"
                    : "scale-100 max-sm:scale-[0.65]"
                }`}>
                Resume
                <FileSpreadsheet className="h-8 w-8 self-center" />
              </button>

              <a href="#Projects">
                <button
                  onMouseEnter={() => setHoverState2(true)}
                  onMouseLeave={() => setHoverState2(false)}
                  className={` leading-tight flex gap-2 p-4 text-4xl border-4 rounded-full transition-all border-primary text-primary ${
                    isHovered2
                      ? "scale-105 max-sm:scale-[0.70]"
                      : "scale-100 max-sm:scale-[0.65]"
                  }`}>
                  <span className="mb-1">Projects</span>
                  <FolderEdit className="h-8 w-8 self-center" />
                </button>
              </a>
            </div>
          </div>

          {/* secondary */}

          <div
            className={`absolute ${
              spotlightVisible ? "visible" : "invisible"
            } top-0 left-0 w-full h-full hero-secondary`}
            aria-hidden="true"
            data-hero>
            <div className="flex h-screen flex-col items-center justify-center gap-11 text-5xl max-sm:text-xl">
              <FloatingIcons />

              <div className="flex scale-100 flex-col gap-11 max-sm:gap-1">
                <p className="text-text">HELLO! MY NAME IS</p>
                <h1 className="hg text-[10rem] text-text max-sm:text-7xl">
                  DANIEL ALIPHON
                </h1>
                <p className="text-text">AND THIS IS MY PORTFOLIO</p>
              </div>

              <div className="flex justify-center gap-28 max-sm:flex-col max-sm:gap-0">
                <button
                  onMouseEnter={() => setHoverState(true)}
                  onMouseLeave={() => setHoverState(false)}
                  className={`flex text-center leading-normal gap-2 p-4 text-4xl rounded-full bg-dark-background text-primary transition-all ${
                    isHovered
                      ? "scale-105 max-sm:scale-[0.70]"
                      : "scale-100 max-sm:scale-[0.65]"
                  }`}>
                  Resume
                  <FileSpreadsheet className="h-8 w-8 self-center" />
                </button>

                <a href="#Projects">
                  <button
                    onMouseEnter={() => setHoverState2(true)}
                    onMouseLeave={() => setHoverState2(false)}
                    className={` leading-tight flex gap-2 p-4 text-4xl border-4 rounded-full transition-all border-dark-background text-text ${
                      isHovered2
                        ? "scale-105 max-sm:scale-[0.70]"
                        : "scale-100 max-sm:scale-[0.65]"
                    }`}>
                    <span className="mb-1">Projects</span>

                    <FolderEdit className="h-8 w-8 self-center" />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* tertiary */}

          <div
            className={`absolute ${
              spotlightVisible ? "visible" : "invisible"
            } top-0 left-0 w-full h-full hero-tertiary`}
            aria-hidden="true"
            data-hero2>
            <div className="flex h-screen flex-col items-center justify-center gap-11 text-5xl max-sm:text-xl">
              <FloatingIcons />

              <div className="flex scale-100 flex-col gap-11 max-sm:gap-1">
                <p className="text-text">HELLO! MY NAME IS</p>
                <h1 className="hg text-[10rem] text-text max-sm:text-7xl">
                  DANIEL ALIPHON
                </h1>
                <p className="text-text">AND THIS IS MY PORTFOLIO</p>
              </div>

              <div className="flex justify-center gap-28 max-sm:flex-col max-sm:gap-0">
                <button
                  onMouseEnter={() => setHoverState(true)}
                  onMouseLeave={() => setHoverState(false)}
                  className={`flex text-center leading-normal gap-2 p-4 text-4xl rounded-full bg-dark-background text-primary transition-all ${
                    isHovered
                      ? "scale-105 max-sm:scale-[0.70]"
                      : "scale-100 max-sm:scale-[0.65]"
                  }`}>
                  Resume
                  <FileSpreadsheet className="h-8 w-8 self-center" />
                </button>

                <a href="#Projects">
                  <button
                    onMouseEnter={() => setHoverState2(true)}
                    onMouseLeave={() => setHoverState2(false)}
                    className={` leading-tight flex gap-2 p-4 text-4xl border-4 rounded-full transition-all border-dark-background text-text ${
                      isHovered2
                        ? "scale-105 max-sm:scale-[0.70]"
                        : "scale-100 max-sm:scale-[0.65]"
                    }`}>
                    <span className="mb-1">Projects</span>

                    <FolderEdit className="h-8 w-8 self-center" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 right-5 flex flex-col space-y-1 max-sm:flex-row">
          <button
            onClick={() => {
              setSpotlight(!spotlightVisible);
            }}>
            <ToggleSpotlightCursor />
          </button>

          <a href="#AboutMe">
            <button className="grid h-16 w-16 place-content-center rounded-full bg-dark-background/70 text-primary">
              <ArrowDown size={50} />
            </button>
          </a>
        </div>
      </div>

      {/* filler div */}
      <div className="h-screen w-screen" />
    </>
  );
};
