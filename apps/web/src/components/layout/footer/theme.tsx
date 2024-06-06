'use client';

import { useTheme } from 'next-themes';
import { Icons } from 'ai-uis';

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

const Footer = () => {
  const { setTheme } = useTheme();
  // eslint-disable-next-line no-unused-vars
  return (
    <div className="flex justify-center">
      <div className="rounded-full border border-slate-100 dark:border-slate-900 p-1">
        <button
          onClick={() => setTheme('light')}
          className="mr-3 rounded-full bg-ali p-2 text-white dark:bg-black dark:text-slate-400"
        >
          <Icons.sun className='h-5 w-5' strokeWidth={1} />
          <span className="sr-only">T</span>
        </button>

        <button type="button" onClick={handleScrollTop}>
          <Icons.arrowup className='h-5 w-5' strokeWidth={1}/>
          <span className="sr-only">Top</span>
        </button>

        <button
          onClick={() => setTheme('dark')}
          className="ml-3 rounded-full p-2 text-slate-600 dark:bg-ali dark:text-white"
        >
          <Icons.moon className='h-5 w-5' strokeWidth={1} />
          <span className="sr-only">T</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
