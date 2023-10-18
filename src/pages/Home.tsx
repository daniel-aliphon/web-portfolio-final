import { ArrowUp } from "lucide-react";
import { Header } from "../components/Header";
import { Hero } from "../sections/Hero";
import { useState } from "react";

export const Home = () => {
  //

  // When the user scrolls down 20px from the top of the document, show the button
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
  //s
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-dark-background">
        <Header />
        <div className={`sticky h-16 flex justify-end top-28 `}>
          <button
            onClick={() => topFunction()}
            className={`grid w-16 h-16 rounded-full text-primary place-content-center ${
              btnVisibility ? "" : " hidden"
            }`}>
            <ArrowUp size={50} />
          </button>
        </div>

        <div className="mx-auto mt-32 space-y-48 text-white max-w-7xl">
          <div id="AboutMe">
            <h1 className="text-5xl">About Me</h1>

            <p className="text-xl leading-relaxed ">
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

          <div id="Skills">
            <h1 className="text-5xl">Tech/Skills</h1>
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
