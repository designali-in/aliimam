"use client";

import Link from "next/link";
import { Icons } from "ai-uis";
import { Coffee } from "./coffee";
import ThemeToogle from "./theme";
import NowPlaying from "./now-playing";

export interface Menus {
  text: string;
  href: string;
  target: string;
}

export const items: Menus[] = [
  {
    text: "About AI",
    href: "/about",
    target: "",
  },
  {
    text: "Gallery",
    href: "/gallery",
    target: "",
  },
  {
    text: "Portfolio",
    href: "/portfolio",
    target: "",
  },
  
  {
    text: "Contact",
    href: "/contact",
    target: "",
  },
  
];

const Underline = `hover:-translate-y-1 border border-slate-100 dark:border-slate-900 rounded-xl p-2.5 transition-transform text-slate-600 hover:border-slate-200 dark:hover:border-slate-800 hover:text-ali hover:dark:text-ali dark:text-slate-400 `;

export function Footer() {
  return (
    <footer className="mx-auto w-full border-t border-ali/50 px-2 sm:px-4">
      <div className="-mt-10 flex flex-wrap justify-center gap-8 ">
        <Link href="/">
          <p className="flex h-20 w-20 items-center justify-center rounded-full bg-white dark:bg-black">
            <Icons.Logo className="mb-2 w-10" />
          </p>
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-8 px-12">
        <NowPlaying />
      </div>

      <div className="mx-auto max-w-4xl ">
        <div className="mt-4 flex flex-wrap justify-center gap-x-10 gap-y-6 p-8">
          {items.map((Menus) => (
            <figure key={Menus.text}>
              <div className="md:text-xs text-sm text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white">
                <span className="">
                  <Link href={Menus.href} target={Menus.target}>
                    {Menus.text}
                  </Link>
                </span>
              </div>
            </figure>
          ))}
          <Link
            href="/Ali-CV.pdf"
            target="_blank"
            className="text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
            download={true}
          >
            <p className="md:text-xs text-sm">Download CV</p>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <Coffee />
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            href="tel:+919650133705"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Icons.phone strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:contact@aliimam.in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Icons.mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            href="https://wa.me/message/6XOEA2NCD5OFB1"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Icons.whatsapp className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.instagram.com/aliimam.in/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Icons.instagram strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com/aliimam_in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Icons.twitterx className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.facebook.com/aliimam.in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Icons.facebook className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aliimam-in/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Icons.linked className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.youtube.com/@aliimam_in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Icons.youtube className="h-5 w-5" />
          </Link>
        </div>
        <ThemeToogle />
      </div>

      <div className="d mx-auto mb-10 mt-10 flex  flex-col justify-between text-center md:max-w-5xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <Icons.heart className="mx-1 h-4 w-4  animate-pulse text-ali" />
          <span> by </span>
          <span className="cursor-pointer font-bold text-black hover:text-ali dark:text-white dark:hover:text-ali">
            <a href="/">Ali Imam</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
