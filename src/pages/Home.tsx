import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="relative z-10">
        <Header />
        <div className="h-[200vh] bg-dark-background"></div>
      </div>
    </>
  );
};
