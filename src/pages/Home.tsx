import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { Test } from "./Test";

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="relative z-10">
        <Header />
        <div className="h-screen bg-slate-100"></div>
      </div>
    </>
  );
};
