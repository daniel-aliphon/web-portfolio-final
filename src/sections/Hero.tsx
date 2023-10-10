import gsap from "gsap";

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
          {/*  */}

          <div className="flex flex-col items-center justify-center h-screen text-5xl font-semibold gap-11">
            <p className="text-dark-text/70 ">HELLO! MY NAME IS</p>

            {/* <h1
              className=" text-transparent text-9xl bg-clip-text
            bg-[linear-gradient(45deg,orange,#40e0d0,#ff1493,#9932cc)]">
              DANIEL ALIPHON
            </h1> */}

            <h1 className=" text-9xl text-primary">DANIEL ALIPHON</h1>

            <p className="text-dark-text/70">AND THIS IS MY PORTFOLIO</p>

            <div className="flex gap-14">
              <button className="w-40 p-4 text-4xl rounded-full bg-primary">
                Resume
              </button>

              <button className="box-border w-40 p-4 text-4xl border-4 rounded-full border-primary text-primary">
                Projects
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

              {/* <h1
              className=" text-transparent text-9xl bg-clip-text
            bg-[linear-gradient(45deg,orange,#40e0d0,#ff1493,#9932cc)]">
              DANIEL ALIPHON
            </h1> */}

              <h1 className="text-text text-9xl">DANIEL ALIPHON</h1>

              <p className="text-text">AND THIS IS MY PORTFOLIO</p>

              <div className="flex gap-14">
                <button className="w-40 p-4 text-4xl rounded-full text-primary bg-text">
                  Resume
                </button>

                <button className="box-border w-40 p-4 text-4xl border-4 rounded-full border-text text-text">
                  Projects
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

              {/* <h1
              className=" text-transparent text-9xl bg-clip-text
            bg-[linear-gradient(45deg,orange,#40e0d0,#ff1493,#9932cc)]">
              DANIEL ALIPHON
            </h1> */}

              <h1 className="text-text text-9xl">DANIEL ALIPHON</h1>

              <p className="text-text">AND THIS IS MY PORTFOLIO</p>

              <div className="flex gap-14">
                <button className="w-40 p-4 text-4xl rounded-full text-primary bg-text">
                  Resume
                </button>

                <button className="box-border w-40 p-4 text-4xl border-4 rounded-full border-text text-text">
                  Projects
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
