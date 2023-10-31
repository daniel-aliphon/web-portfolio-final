import { Code2, Eye } from "lucide-react";
import { Button } from "./Button";
import { SmallText } from "./SmallText";
import { Text } from "./Text";

export const ProjectCard = ({
  techIcons,
  description,
  thumbnail,
  name,
  i,
}: {
  techIcons: string[];
  name: string;
  thumbnail: string;
  description: string;
  i: number;
}) => {
  return (
    <div
      className={`flex ${
        i % 2 === 0 ? "flex-row-reverse" : ""
      } justify-between gap-7 rounded-lg bg-dark-foreground max-md:flex-col max-md:gap-0 max-sm:gap-2`}>
      <div className="flex w-full flex-col justify-between pb-7 max-md:p-0 lg:pb-0">
        <div
          style={{ backgroundImage: `url(${thumbnail})` }}
          className={`h-full w-full rounded-lg bg-cover bg-center bg-no-repeat p-7 outline outline-primary max-lg:h-60 max-md:h-96 max-sm:h-52`}></div>
        <div className="flex justify-center gap-7 text-primary max-md:hidden lg:hidden">
          <Button>
            View Live Demo <Eye />
          </Button>
          <Button>
            View Source Code <Code2 />
          </Button>
        </div>
      </div>

      <div
        className={`flex h-full w-full flex-col justify-between rounded-lg p-7 max-md:gap-7 max-sm:p-2 md:gap-7 ${
          i % 2 === 0 ? "md:pr-0" : " md:pl-0"
        }`}>
        <Text>{name}</Text>
        <SmallText>{description}</SmallText>
        <div className="space-y-1 max-sm:h-36">
          <SmallText>Tech/Tools Used:</SmallText>
          <div className="flex h-12 justify-between max-sm:grid max-sm:grid-cols-5 max-sm:gap-y-1">
            {techIcons.map((techIcon: string) => (
              <img
                key={techIcon}
                className="h-12 w-12"
                src={techIcon}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-7 text-primary max-lg:hidden max-md:flex max-sm:flex-col">
          <Button>
            <SmallText>View Live Demo</SmallText> <Eye />
          </Button>
          <Button>
            <SmallText>View Source Code</SmallText> <Code2 />
          </Button>
        </div>
      </div>
    </div>
  );
};
