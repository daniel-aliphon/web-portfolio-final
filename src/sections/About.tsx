import { useState } from "react";

export const About = () => {
  const [ReadMoreState, setReadMoreState] = useState(false);
  return (
    <div id="AboutMe">
      <h1 className="mb-5 text-6xl font-semibold text-primary max-md:text-5xl max-sm:text-4xl">
        <span className="inline-block text-dark-text">About</span> Me
      </h1>

      <div className="">
        <img
          className="hdd float-left mr-4 h-[300px] rounded-md border-4 border-primary max-sm:h-[200px]"
          src="src\assets\pfp.jpg"
        />
        <p className="text-[1.875rem] max-md:text-2xl max-md:leading-9 max-sm:text-xl">
          Im <span className="font-bold text-primary">Daniel</span>, a{" "}
          <span className="font-bold text-primary"> UX/UI Designer </span> and{" "}
          <span className="font-bold text-primary">Frontend Developer </span>{" "}
          based in South Africa. I am passionate about crafting digital
          experiences that captivate and engage users. With a strong foundation
          in HTML, CSS, and JavaScript, I possess the technical skills needed to
          bring websites to life.{" "}
          <span className={ReadMoreState ? "" : "max-sm:hidden"}>
            I thrive on the challenge of turning creative ideas into functional,
            user-friendly websites and enjoy staying up-to-date with the latest
            web development trends and technologies. My attention to detail and
            commitment to delivering high-quality code makes me a valuable asset
            in the ever-evolving world of web development. I am eager to
            collaborate with teams, learn new skills, and contribute to building
            innovative online solutions that leave a lasting impression.
          </span>
        </p>{" "}
        <div
          onClick={() => setReadMoreState(!ReadMoreState)}
          className="inline-block text-[1.875rem] text-primary hover:cursor-pointer max-md:text-2xl max-md:leading-9 max-sm:text-xl sm:hidden">
          Read {ReadMoreState ? <span> Less</span> : <span>More</span>}...
        </div>
      </div>
    </div>
  );
};
