import gsap from "gsap";

export const Hero = () => {
  //

  window.addEventListener("load", () => {
    const hero = document.querySelector("[data-hero]");

    const tl = gsap.timeline();

    tl.to(hero, {
      "--maskSize1": "15%",
      duration: 0.2,
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
        duration: 1.4,
        ease: "sine.out",
      });
    });
  });

  ///////////////////////

  window.addEventListener("load", () => {
    const hero = document.querySelector("[data-hero2]");

    const tl = gsap.timeline();

    tl.to(hero, {
      "--maskSize1": "15%",
      duration: 0.2,
      ease: "back.out(2)",
    });

    const hh = document.querySelector("[data-hh]");

    hh?.addEventListener("mousemove", (e: any) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 90);
      const y = Math.round((clientY / window.innerHeight) * 90);

      gsap.to(hero, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 1.4,
        ease: "sine.out",
      });
    });
  });

  ////////////////////////////

  window.addEventListener("load", () => {
    const hero = document.querySelector("[data-hero3]");

    const tl = gsap.timeline();

    tl.to(hero, {
      "--maskSize1": "15%",
      duration: 0.2,
      ease: "back.out(2)",
    });

    const hh = document.querySelector("[data-hh]");

    hh?.addEventListener("mousemove", (e: any) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 90);
      const y = Math.round((clientY / window.innerHeight) * 110);

      gsap.to(hero, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 1.5,
        ease: "sine.out",
      });
    });
  });
  ////////////////////////

  window.addEventListener("load", () => {
    const hero = document.querySelector("[data-hero4]");

    const tl = gsap.timeline();

    tl.to(hero, {
      "--maskSize1": "5%",
      duration: 2,
      ease: "back.out(2)",
    });

    const hh = document.querySelector("[data-hh]");

    hh?.addEventListener("mousemove", (e: any) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 110);

      gsap.to(hero, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 5,
        ease: "sine.out",
      });
    });
  });
  return (
    <>
      <div className="fixed z-[10] w-screen">
        <div
          className="relative text-center bg-gray-900 "
          data-hh>
          <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
            <p className="text-white ">HELLO! MY NAME IS</p>

            <h1
              className=" text-transparent text-9xl bg-clip-text
            bg-[linear-gradient(45deg,orange,#40e0d0,#ff1493,#9932cc)]">
              DANIEL ALIPHON
            </h1>

            <p className="text-white">AND THIS IS MY PORTFOLIO</p>
            <div className="flex gap-14">
              <button className="p-4 text-4xl rounded-full bg-[linear-gradient(45deg,#ff1493,orange);]">
                Resume
              </button>
              <button className="p-4 text-4xl rounded-full bg-[linear-gradient(45deg,#40e0d0,#9932cc);]">
                Projects
              </button>
            </div>
          </div>

          <div
            className="absolute top-0 left-0 w-full h-full hero--secondary"
            aria-hidden="true"
            data-hero>
            <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
              <p className="text-slate-900">HELLO! MY NAME IS</p>

              <h1 className="font-semibold text-slate-900 text-9xl">
                DANIEL ALIPHON
              </h1>

              <p className="text-slate-900">AND THIS IS MY PORTFOLIO</p>
              <div className="flex text-white gap-14">
                <button className="p-4 text-4xl rounded-full bg-slate-900 ">
                  Resume
                </button>
                <button className="p-4 text-4xl rounded-full bg-slate-900">
                  Projects
                </button>
              </div>
            </div>
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full hero--secondary"
            aria-hidden="true"
            data-hero2>
            <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
              <p className="text-slate-900">HELLO! MY NAME IS</p>

              <h1 className="font-semibold text-slate-900 text-9xl">
                DANIEL ALIPHON
              </h1>

              <p className="text-slate-900">AND THIS IS MY PORTFOLIO</p>
              <div className="flex text-white gap-14">
                <button className="p-4 text-4xl rounded-full bg-slate-900 ">
                  Resume
                </button>
                <button className="p-4 text-4xl rounded-full bg-slate-900">
                  Projects
                </button>
              </div>
            </div>
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full hero--secondary"
            aria-hidden="true"
            data-hero3>
            <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
              <p className="text-slate-900">HELLO! MY NAME IS</p>

              <h1 className="font-semibold text-slate-900 text-9xl">
                DANIEL ALIPHON
              </h1>

              <p className="text-slate-900">AND THIS IS MY PORTFOLIO</p>
              <div className="flex text-white gap-14">
                <button className="p-4 text-4xl rounded-full bg-slate-900 ">
                  Resume
                </button>
                <button className="p-4 text-4xl rounded-full bg-slate-900">
                  Projects
                </button>
              </div>
            </div>
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full hero--secondary"
            aria-hidden="true"
            data-hero4>
            <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
              <p className="text-slate-900">HELLO! MY NAME IS</p>

              <h1 className="font-semibold text-slate-900 text-9xl">
                DANIEL ALIPHON
              </h1>

              <p className="text-slate-900">AND THIS IS MY PORTFOLIO</p>
              <div className="flex text-white gap-14">
                <button className="p-4 text-4xl rounded-full bg-slate-900 ">
                  Resume
                </button>
                <button className="p-4 text-4xl rounded-full bg-slate-900">
                  Projects
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
