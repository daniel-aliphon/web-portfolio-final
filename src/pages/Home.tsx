import "./Home.css";
import gsap from "gsap";

export const Home = () => {
  //
  const hero = document.querySelector("[data-hero]");

  const tl = gsap.timeline();

  tl.to(hero, {
    "--maskSize1": "35%",
    duration: 0.2,
    ease: "back.out(2)",
  });

  const hanndleMouseMouve = (e: any) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    gsap.to(hero, {
      "--x": `${x}%`,
      "--y": `${y}%`,
      duration: 1.5,
      ease: "sine.out",
    });
  };

  ///////////////////////

  return (
    <>
      <div
        className="relative bg-gray-900"
        onMouseMove={hanndleMouseMouve}>
        <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
          <p className="text-white ">HELLO! MY NAME IS</p>

          <h1 className="font-bold text-transparent text-9xl text">
            DANIEL ALIPHON
          </h1>

          <p className="text-white">AND THIS IS MY PORTFOLIO</p>
          <div className="flex gap-14">
            <button className="p-4 text-4xl bg-white rounded-full ">
              Resume
            </button>
            <button className="p-4 text-4xl bg-white rounded-full ">
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

            <h1 className="font-bold text-slate-900 text-9xl">
              DANIEL ALIPHON
            </h1>

            <p className="text-slate-900">AND THIS IS MY PORTFOLIO</p>
            <div className="flex text-white gap-14">
              <button className="p-4 text-4xl rounded-full btn-txt bg-slate-900 ">
                Resume
              </button>
              <button className="p-4 text-4xl rounded-full btn-txt bg-slate-900 ">
                Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
