"use client"
import Image from 'next/image';
import About from '@/components/about/about';
import Logos from '@/components/common/logos';
import { Experience } from '@/components/about/experience';
import { DashboardAbout } from '@/components/about/dashboard';
import { Connect } from '@/components/common/connect';

import ImageZoom from '@/components/common/image-zoom';
import { Icons } from 'ai-uis';
import { Avegra } from '../fonts';
import { cn } from 'ai-utilities';

export default function AboutAI() {
  return (
    <>
        <div className="mx-auto mt-40 max-w-3xl px-6 md:max-w-5xl">
            <div className="relative mx-auto mt-10 flex h-[28rem] max-w-sm flex-col items-start border border-slate-100 p-4 dark:border-slate-900">
              <Icons.plus strokeWidth={0.5} className="absolute -left-4 -top-4 h-8 w-8 text-aired" />
              <Icons.plus strokeWidth={0.5} className="absolute -bottom-4 -left-4 h-8 w-8 text-aired" />
              <Icons.plus strokeWidth={0.5} className="absolute -right-4 -top-4 h-8 w-8 text-aired" />
              <Icons.plus strokeWidth={0.5} className="absolute -bottom-4 -right-4 h-8 w-8 text-aired" />
              <ImageZoom>
                <Image
                  src="/ali.jpg"
                  alt="Your Image"
                  height={1000}
                  width={1000}
                  className="h-[404px] object-cover "
                />
                <div className="relative bg-gradient-to-b -mt-24 from-black/0 to-black text-white">
                  <h1 className={cn(
                    Avegra.className, "z-20 items-center text-center text-[70px] ")}>
                    Ali Imam
                  </h1>{' '}
                </div>
              </ImageZoom>
            </div>
        </div>
        <div className="mx-auto mt-20 max-w-3xl  md:max-w-5xl px-6 ">
          <About />
          <Experience />
          <div className="flex flex-col items-center">
            <h3 className="inline-flex items-baseline pb-1 mt-6 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-200 dark:to-slate-600">
              <span className="text-2xl md:text-4xl">AI Dashboard</span>
            </h3>
            <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-aired"></hr>
          </div>
          <p className="mx-auto max-w-3xl px-6 text-center text-sm leading-5 text-slate-600 dark:text-slate-400">
            This is my personal dashboard, built with Next.js API routes deployed as serverless
            functions. I use this dashboard to track various metrics across platforms like YouTube
            and more.
          </p>
          <DashboardAbout />
          <h1 className="my-6 text-center text-xs font-semibold uppercase tracking-[.3em] text-slate-400 ">
          Worked with Brands Like
        </h1>
        <Logos/>
        </div>
        <div className='mb-20'>
        <Connect/>
        </div>
    </>
  );
}
