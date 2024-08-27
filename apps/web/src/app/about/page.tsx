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
