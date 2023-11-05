import { Code2, Eye } from "lucide-react";
import { Button } from "../components/Button";
import { SmallText } from "../components/SmallText";
import { Text } from "../components/Text";
import { projects } from ".";

import "./Test.css";

export const Test = () => {
  return (
    <div className="mx-auto flex h-[100vh] max-w-7xl items-center justify-center text-dark-text">
      <div
        className={`flex justify-between gap-7 rounded-lg bg-dark-foreground max-md:flex-col max-md:gap-0 max-sm:gap-2`}>
        <div className="flex w-full flex-col justify-between pb-7 max-md:p-0 lg:pb-0">
          {/*  */}
          <div className="mad relative hidden h-full w-full rounded-t-lg bg-slate-950 p-4 outline outline-1">
            <div className="h-full w-full bg-cover"></div>
          </div>{" "}
          <div className="monitor">
            <div
              className="square-display bg-center bg-no-repeat max-lg:h-60 max-md:h-96 max-sm:h-52"
              style={{
                backgroundImage: `url(${projects[1].thumbnail})`,
              }}></div>
          </div>
          <div className="keyboard"></div>
          <div className="keyboard-backpart"></div>
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          <div className="flex justify-center gap-7 text-primary max-md:hidden lg:hidden">
            <Button href={projects[1].demoUrl}>
              View Live Demo <Eye />
            </Button>
            <Button href={projects[1].sourceCodeUrl}>
              View Source Code <Code2 />
            </Button>
          </div>
        </div>

        <div
          className={`flex h-full w-full flex-col justify-between rounded-lg p-7 max-md:gap-7 max-sm:p-2 md:gap-7`}>
          <Text>{projects[1].name}</Text>
          <SmallText>{projects[1].description}</SmallText>
          <div className="space-y-1 max-sm:h-36">
            <SmallText>Tech/Tools Used:</SmallText>
            <div className="flex h-12 justify-between max-sm:grid max-sm:grid-cols-5 max-sm:gap-y-1">
              {projects[1].techIcons.map((techIcon: string) => (
                <img
                  key={techIcon}
                  className="h-12 w-12"
                  src={techIcon}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-7 text-primary max-lg:hidden max-md:flex max-sm:flex-col">
            <Button href={projects[1].demoUrl}>
              <SmallText>View Live Demo</SmallText> <Eye />
            </Button>
            <Button href={projects[1].sourceCodeUrl}>
              <SmallText>View Source Code</SmallText> <Code2 />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
