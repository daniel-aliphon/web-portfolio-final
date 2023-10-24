import { ArrowUp } from "lucide-react";
import { Header } from "../components/Header";
import { Hero } from "./Home/Hero";
import { useState } from "react";
import { About } from "./Home/About";
import { TechIcons } from "./Home/Tech";

export const Home = () => {
  //

  window.onscroll = () => {
    scrollFunction();
  };

  const [btnVisibility, setBtnVisibility] = useState(false);
  const viewPortHeight = window.innerHeight;
  function scrollFunction() {
    if (
      document.body.scrollTop > viewPortHeight ||
      document.documentElement.scrollTop > viewPortHeight
    ) {
      setBtnVisibility(true);
    } else {
      setBtnVisibility(false);
    }
  }

  //

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  //

  return (
    <>
      <Hero />
      <div className="relative z-10 bg-dark-background">
        <Header />

        <button
          onClick={() => topFunction()}
          className={`grid sticky top-28 left-[95%] w-16 h-16 rounded-full text-primary place-content-center ${
            btnVisibility ? "" : " invisible"
          }`}>
          <ArrowUp size={50} />
        </button>

        <div className="mx-auto mt-32 max-w-7xl space-y-48 p-6 text-white max-md:overflow-x-hidden max-md:p-4 max-sm:p-2">
          <About />

          <TechIcons />

          <div id="Projects">
            <h1 className="text-5xl">Projects</h1>
            <p className="text-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              veritatis magnam asperiores consequatur nam repellat doloremque
              cupiditate vitae, sed voluptas sint. Numquam, amet et in
              consequatur accusantium est distinctio reprehenderit quas, dolore
              veniam repudiandae vitae, quos sint similique commodi doloremque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              veritatis magnam asperiores consequatur nam repellat doloremque
              cupiditate vitae, sed voluptas sint. Numquam, amet et in
              consequatur accusantium est distinctio reprehenderit quas, dolore
              veniam repudiandae vitae, quos sint similique commodi doloremque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              veritatis magnam asperiores consequatur nam repellat doloremque
              cupiditate vitae, sed voluptas sint. Numquam, amet et in
              consequatur accusantium est distinctio reprehenderit quas, dolore
              veniam repudiandae vitae, quos sint similique commodi doloremque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              veritatis magnam asperiores consequatur nam repellat doloremque
              cupiditate vitae, sed voluptas sint. Numquam, amet et in
              consequatur accusantium est distinctio reprehenderit quas, dolore
              veniam repudiandae vitae, quos sint similique commodi doloremque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              veritatis magnam asperiores consequatur nam repellat doloremque
              cupiditate vitae, sed voluptas sint. Numquam, amet et in
              consequatur accusantium est distinctio reprehenderit quas, dolore
              veniam repudiandae vitae, quos sint similique commodi doloremque.
            </p>
          </div>

          <div id="Contact">
            <h1 className="text-5xl">Contect Me</h1>
            <p className="text-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              veritatis magnam asperiores consequatur nam repellat doloremque
              cupiditate vitae, sed voluptas sint. Numquam, amet et in
              consequatur accusantium est distinctio reprehenderit quas, dolore
              veniam repudiandae vitae, quos sint similique commodi doloremque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              veritatis magnam asperiores consequatur nam repellat doloremque
              cupiditate vitae, sed voluptas sint. Numquam, amet et in
              consequatur accusantium est distinctio reprehenderit quas, dolore
              veniam repudiandae vitae, quos sint similique commodi doloremque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              veritatis magnam asperiores consequatur nam repellat doloremque
              cupiditate vitae, sed voluptas sint. Numquam, amet et in
              consequatur accusantium est distinctio reprehenderit quas, dolore
              veniam repudiandae vitae, quos sint similique commodi doloremque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              veritatis magnam asperiores consequatur nam repellat doloremque
              cupiditate vitae, sed voluptas sint. Numquam, amet et in
              consequatur accusantium est distinctio reprehenderit quas, dolore
              veniam repudiandae vitae, quos sint similique commodi doloremque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              veritatis magnam asperiores consequatur nam repellat doloremque
              cupiditate vitae, sed voluptas sint. Numquam, amet et in
              consequatur accusantium est distinctio reprehenderit quas, dolore
              veniam repudiandae vitae, quos sint similique commodi doloremque.
            </p>
          </div>

          <div id="Footer">
            <h1 className="text-5xl">Footer</h1>
            <p className="text-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              veritatis magnam asperiores consequatur nam repellat doloremque
              cupiditate vitae, sed voluptas sint. Numquam, amet et in
              consequatur accusantium est distinctio reprehenderit quas, dolore
              veniam repudiandae vitae, quos sint similique commodi doloremque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              veritatis magnam asperiores consequatur nam repellat doloremque
              cupiditate vitae, sed voluptas sint. Numquam, amet et in
              consequatur accusantium est distinctio reprehenderit quas, dolore
              veniam repudiandae vitae, quos sint similique commodi doloremque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
