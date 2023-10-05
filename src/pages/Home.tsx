import "./Home.css";
import gsap from "gsap";

export const Home = () => {
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
        duration: 1.5,
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
        duration: 1.5,
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
      <div
        className="relative text-center bg-gray-900 "
        data-hh>
        <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
          <p className="text-white ">HELLO! MY NAME IS</p>

          <h1 className="font-semibold text-9xl text">DANIEL ALIPHON</h1>

          <p className="text-white">AND THIS IS MY PORTFOLIO</p>
          <div className="flex gap-14">
            <button className="p-4 text-4xl rounded-full btn-txt">
              Resume
            </button>
            <button className="p-4 text-4xl rounded-full btn-txt2">
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

            <h1 className="font-semibold text-white shadow-color text-9xl">
              DANIEL ALIPHON
            </h1>

            <p className="text-slate-900">AND THIS IS MY PORTFOLIO</p>
            <div className="flex text-slate-900 gap-14">
              <button className="p-4 text-4xl bg-white rounded-full ">
                Resume
              </button>
              <button className="p-4 text-4xl bg-white rounded-full">
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

            <h1 className="font-semibold text-white shadow-color text-9xl">
              DANIEL ALIPHON
            </h1>

            <p className="text-slate-900">AND THIS IS MY PORTFOLIO</p>
            <div className="flex text-slate-900 gap-14">
              <button className="p-4 text-4xl bg-white rounded-full ">
                Resume
              </button>
              <button className="p-4 text-4xl bg-white rounded-full">
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

            <h1 className="font-semibold text-white shadow-color text-9xl">
              DANIEL ALIPHON
            </h1>

            <p className="text-slate-900">AND THIS IS MY PORTFOLIO</p>
            <div className="flex text-slate-900 gap-14">
              <button className="p-4 text-4xl bg-white rounded-full ">
                Resume
              </button>
              <button className="p-4 text-4xl bg-white rounded-full">
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

            <h1 className="font-semibold text-white shadow-color text-9xl">
              DANIEL ALIPHON
            </h1>

            <p className="text-slate-900">AND THIS IS MY PORTFOLIO</p>
            <div className="flex text-slate-900 gap-14">
              <button className="p-4 text-4xl bg-white rounded-full ">
                Resume
              </button>
              <button className="p-4 text-4xl bg-white rounded-full">
                Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
