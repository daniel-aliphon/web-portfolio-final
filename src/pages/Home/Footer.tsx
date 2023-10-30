import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MailOpen,
  MapPin,
  Phone,
} from "lucide-react";
import { CopyBtn } from "../../components/CopyBtn";

export const Footer = () => {
  return (
    <>
      <div
        className={`mt-40 h-[30px] w-full bg-transparent bg-[url('../assets/design/header-top-wave.svg')] bg-cover bg-no-repeat`}></div>
      <div className="w-full bg-primary">
        <div className="mx-auto grid max-w-7xl grid-cols-3 text-dark-text max-md:grid-cols-2 max-sm:grid-cols-1">
          {/*
           */}

          <div className="flex flex-col justify-between p-8 max-sm:gap-3">
            <h1 className="">DANIEL ALIPHON</h1>
            <div className="flex w-fit gap-3">
              <a href="">
                <Linkedin />
              </a>{" "}
              <a href="">
                <Github />
              </a>
              <a href="">
                <Facebook />
              </a>{" "}
              <a href="">
                <Instagram />
              </a>
            </div>
            <p>© 2023 Daniel Juan Aliphon, All Rights Reserved.</p>
          </div>

          {/*
           */}

          <div className="flex flex-col justify-between border-x p-8 max-md:border-x-0 max-sm:gap-4 max-sm:border-y">
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
          </div>

          {/*
           */}

          <div className="grid-area flex flex-col justify-center p-8">
            <p className="w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              excepturi ducimus, libero vel quisquam illum dicta aliquid esse
              exercitationem porro? Soluta doloribus cum consequatur optio.
              SOURCE CODE
            </p>
          </div>

          {/*
           */}
        </div>
      </div>
    </>
  );
};
