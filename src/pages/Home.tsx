import { ArrowUp } from "lucide-react";
import { Header } from "../components/Header";
import { Hero } from "./Home/Hero";
import { useState } from "react";
import { About } from "./Home/About";
import { Tech } from "./Home/Tech";
import { Footer } from "./Home/Footer";
import { Projects } from "./Home/Projects";
import { Contact } from "./Home/Contact";
import { Notification } from "../components/Notification";
import { SmallText } from "../components/SmallText";

export const Home = () => {
  //

  window.onscroll = () => {
    scrollFunction();
  };
  const [errorNotification, setErrorNotification] = useState(false);
  const handleError = () => {
    setErrorNotification(!errorNotification);
  };

  const [notificationVisible, setNotificationVisible] = useState(false);
  const notification = (visibility: boolean) => {
    setNotificationVisible(visibility);
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
        <Notification
          handleVisibility={notification}
          visibility={notificationVisible}>
          {errorNotification ? (
            <>
              <SmallText>Something went Wrong!</SmallText>
              <p>Please try again.</p>
            </>
          ) : (
            <>
              <SmallText className="underline underline-offset-4">
                Message sent!
              </SmallText>
              <p>Please check your email for confirmation.</p>
            </>
          )}
        </Notification>

        <button
          onClick={() => topFunction()}
          className={`grid sticky top-28 left-[95%] max-md:invisible w-16 h-16 rounded-full text-primary place-content-center ${
            btnVisibility ? "" : " invisible"
          }`}>
          <ArrowUp size={50} />
        </button>

        <div className="mx-auto mt-32 max-w-7xl space-y-48 overflow-x-hidden p-6 text-white max-md:p-4 max-sm:p-2">
          <About />

          <Tech />

          <Projects />

          <Contact
            handleError={handleError}
            handleVisibility={notification}
            visibility={notificationVisible}
          />
        </div>

        <Footer />
      </div>
    </>
  );
};
