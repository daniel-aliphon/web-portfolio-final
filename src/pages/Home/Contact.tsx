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
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = ({
  visibility,
  handleVisibility,
  handleError,
}: {
  visibility: boolean;
  handleVisibility: any;
  handleError: any;
}) => {
  const form = useRef<HTMLFormElement>(null);

  const ClearForm = () => {
    form.current?.reset();
  };
  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_gc5x9hc",
          "template_rnq2cf9",
          form.current,
          "vpDFJFL3X-XAqlg1P"
        )
        .then(
          (result) => {
            console.log(result.text);
            handleVisibility(!visibility);
          },
          (error) => {
            console.log(error.text);
            handleVisibility(!visibility);
            handleError();
          }
        );
      e.target.reset();
    }
  };
  return (
    <div
      id="Contact"
      className="flex gap-16 rounded-lg max-sm:flex-col">
      <div className="flex w-[45%] flex-col justify-between rounded-lg text-dark-text max-sm:w-full">
        <Heading className="-mb-0">
          Contact <span className="text-dark-text">Me</span>{" "}
        </Heading>
        <Text className="mb-3 flex items-center">
          Send me an Email via the contact form here{" "}
          <span className="inline-flex">
            <ArrowRight size={40} />
          </span>
        </Text>

        <div className="flex flex-col gap-4">
          {" "}
          <SmallText>Or get hold me manually using this info:</SmallText>
          <div className="group flex justify-between">
            <p className="flex gap-2">
              <MapPin />
              South Africa, Kwa-Zulu Natal
            </p>
            <div className="invisible cursor-pointer group-hover:visible max-md:hidden">
              <CopyBtn copyText="South Africa, Kwa-Zulu Natal" />
            </div>
          </div>
          <div className="group flex justify-between">
            <p className="flex gap-2">
              <Phone />
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
            <a
              href="https://www.linkedin.com/in/daniel-aliphon/"
              target="_blank">
              <Linkedin size={30} />
            </a>
            <a
              href="https://github.com/daniel-aliphon"
              target="_blank">
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

      <form
        className="flex h-full w-full flex-col gap-3 text-lg"
        ref={form}
        onSubmit={sendEmail}>
        <div className="grid grid-cols-2 gap-3">
          <input
            className="rounded-lg bg-dark-foreground p-2"
            type="text"
            name="from_firstName"
            placeholder="First Name"
            required
          />
          <input
            className="rounded-lg bg-dark-foreground p-2"
            type="text"
            name="from_lastName"
            placeholder="Last Name (opional)"
          />
          <input
            className="rounded-lg bg-dark-foreground p-2"
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <input
            className="rounded-lg bg-dark-foreground p-2"
            type="tel"
            name="from_tel"
            placeholder="Phone (optional)"
          />
        </div>

        <textarea
          className="w-full resize-none rounded-lg bg-dark-foreground p-2"
          name="message"
          placeholder="Message"
          cols={30}
          rows={10}
          required
        />

        <div className="flex gap-3">
          <input
            className="box-border w-40 rounded-lg border-2 border-primary px-5 py-2 text-primary duration-300 hover:cursor-pointer hover:bg-primary hover:text-dark-text"
            type="submit"
            value="Send"
          />
          <input
            className="bg box-border w-fit rounded-lg border-2 border-dark-text px-5 py-2 text-dark-text duration-300 hover:cursor-pointer hover:bg-dark-text hover:text-text"
            type="button"
            onClick={ClearForm}
            value="Clear"
          />
        </div>
      </form>
    </div>
  );
};
