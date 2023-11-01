import {
  ArrowRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MailOpen,
  MapPin,
  Phone,
} from "lucide-react";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { SmallText } from "../../components/SmallText";
import { CopyBtn } from "../../components/CopyBtn";

export const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex gap-16 rounded-lg max-sm:flex-col">
      <div className="flex w-[40%] flex-col justify-between rounded-lg text-dark-text max-sm:w-full">
        <Heading className="-mb-0">
          Contact <span className="text-dark-text">Me</span>{" "}
        </Heading>
        <Text className="flex items-center">
          Send me an Email via the contact form here{" "}
          <span className="inline-flex">
            <ArrowRight size={40} />
          </span>
        </Text>

        <div className="flex flex-col gap-4">
          {" "}
          <SmallText className="font-semibold">
            Or get hold me manually using this info:
          </SmallText>
          <div className="group flex justify-between">
            <p className="flex gap-2">
              <MapPin className="" />
              South Africa, Kwa-Zulu Natal
            </p>
            <div className="invisible cursor-pointer group-hover:visible max-md:hidden">
              <CopyBtn copyText="South Africa, Kwa-Zulu Natal" />
            </div>
          </div>
          <div className="group flex justify-between">
            <p className="flex gap-2">
              <Phone className="" />
              +27 71 098 8863
            </p>
            <div className="invisible cursor-pointer group-hover:visible max-md:hidden">
              <CopyBtn copyText="+27 71 098 8863" />
            </div>
          </div>
          <div className="group flex justify-between">
            <a
              href="mailto:daniel.aliphon.juan@gmail.com"
              className="group/mail flex gap-2">
              <Mail className="group-hover/mail:hidden" />
              <MailOpen className="hidden group-hover/mail:block" />
              daniel.aliphon.juan@gmail.com
            </a>
            <div className="invisible cursor-pointer group-hover:visible max-md:hidden">
              <CopyBtn copyText="daniel.aliphon.juan@gmail.com" />
            </div>
          </div>
          <div className="flex justify-around border-t pt-4">
            <a href="">
              <Linkedin size={30} />
            </a>
            <a href="">
              <Github size={30} />
            </a>
            <a href="">
              <Facebook size={30} />
            </a>
            <a href="">
              <Instagram size={30} />
            </a>
          </div>
        </div>

        {/*  */}
      </div>

      <div className="flex h-full w-full flex-col gap-3 text-lg">
        <div className="grid grid-cols-2 gap-3">
          <input
            className="rounded-lg bg-dark-foreground p-2"
            type="text"
            name="Firt Name"
            placeholder="First Name"
          />
          <input
            className="rounded-lg bg-dark-foreground p-2"
            type="text"
            name="Last Name"
            placeholder="Last Name"
          />
          <input
            className="rounded-lg bg-dark-foreground p-2"
            type="text"
            name="Email"
            placeholder="Email"
          />
          <input
            className="rounded-lg bg-dark-foreground p-2"
            type="text"
            name="Phone"
            placeholder="Phone (Optional)"
          />{" "}
        </div>

        <textarea
          className="w-full resize-none rounded-lg bg-dark-foreground p-2"
          name="Message"
          placeholder="Message"
          cols={30}
          rows={10}></textarea>
        <input
          className="box-border w-fit rounded-lg border-2 border-primary px-5 py-2 text-primary duration-300 hover:cursor-pointer hover:bg-primary hover:text-dark-text"
          type="submit"
        />
      </div>
    </div>
  );
};
