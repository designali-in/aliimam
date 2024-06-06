"use client";

import Logos from "../common/logos";
import { Worklist } from "./worklist";
import React from "react";
import { Graaadients, PeachFuzz, AICV, Insta, Exp, Extra } from "./cards";


const AboutMe = () => {
  return (
    <div className="relative">
      <div className="mx-auto mt-14 max-w-5xl px-6">
        <h1 className="my-6 text-center text-xs font-semibold uppercase tracking-[.3em] text-slate-400 ">
          Worked with Brands Like
        </h1>
        <Logos />
        <div className="grid md:grid-cols-2 mt-4 gap-2">
          <Exp />
          <Graaadients />
        </div>
        <div className="grid md:grid-cols-2 mt-2 gap-2">
          <PeachFuzz />
          <div className="grid grid-cols-2 gap-2">
            <AICV />
            <Insta />
          </div>
          
        </div>
        <div className="grid md:grid-cols-2 mt-2 gap-2">
        <Worklist />
        <Extra/>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
