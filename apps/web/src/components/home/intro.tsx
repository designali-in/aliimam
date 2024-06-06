'use client';

import { Icons, Separator  } from 'ai-uis';

import { HighlighterItem, HighlightGroup } from "@/components/ui/highlighter";



export default function Intro() {
 
  return (
    <>
      <div  className="mx-auto max-w-5xl my-10 md:mt-16 mt-10 px-6 z-10" >
        <div className="relative flex flex-col items-center border border-slate-200 dark:border-slate-800">
          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-ali text-white" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-ali text-white" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-ali text-white" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-ali text-white" />
          <div className="absolute -bottom-1.5 left-1/2 z-30 border border-slate-200 dark:border-slate-800 h-3 w-3 bg-black dark:bg-white text-white" />
          <div className="absolute -top-1.5 left-1/2 z-30 border border-slate-200 dark:border-slate-800 h-2.5 w-2.5 bg-black dark:bg-white text-white" />

          <HighlightGroup className="h-full group">
            <div className="h-full group/item" data-aos="fade-down">
              <HighlighterItem className=' rounded-[40px]'>
                <div className="relative py-10 w-full h-full rounded-[40px] dark:bg-black z-20 ">
                  <div className="flex flex-col gap-10 leading-[1.2] md:gap-10 justify-center text-center text-xl font-extrabold tracking-tighter md:text-6xl ">
                    <div
                      className="introText flex items-center justify-center px-8 "
                    >
                      <p className='opacity-10'> Design is my {' '}</p>
                     
                      <Icons.heart
                        fill="#f50537"
                        className="mx-1 h-4 w-4 animate-pulse text-ali md:mx-3 md:h-12 md:w-12"
                      />{' '}
                      <p className='opacity-10'>language.</p>
                      
                    </div>
                    <Separator />
                    <span
                      className="introText inline-block after:content-['_'] px-8 opacity-10"
                      
                    >
                      I leverage my passion and skills to create digital products and experiences.
                    </span>
                    <Separator />
                    <span
                      className="introText inline-block px-8 opacity-10"
                      
                    >
                      I&apos;m passionate about graphic design, pixel perfect UI and 3D.
                    </span>
                  </div>
                </div>

              </HighlighterItem>
            </div>
          </HighlightGroup>
        </div>
      </div>
    </>
  );
}


