

import { Graaadients } from "./cards"
import WordCounter from "./wordcount"
import { type Metadata } from 'next';
import { Avegra } from '../fonts';
import { cn } from 'ai-utilities';
import AIConverter from "./aiconverter"

export const metadata: Metadata = {
  title: 'Products - Ali Imam',
  description: 'Explore the latest news and updates from the community'
};

export default function AboutAI() {
  return (
    <>
      <div className='my-40'>
        <p className='text-center my-3 text-xs text-slate-600 dark:text-slate-400 lg:text-md tracking-widest uppercase font-light'>
          Take a look at what’s new right now.
        </p>
        <div className="flex flex-col items-center px-8">
          <h3 className="inline-flex items-baseline pb-1 text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-200 dark:to-slate-600">
            <span className={cn(
              Avegra.className, "text-6xl  md:text-8xl")}>  The latest.</span>
          </h3>
          <hr className="mx-auto my-4 mb-16 h-1 w-6 rounded border-0 bg-aired"></hr>
        </div>
        <Graaadients />
        <AIConverter/>
        <WordCounter/>
      </div>
    </>
  );
}
