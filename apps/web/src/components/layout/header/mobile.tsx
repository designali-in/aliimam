'use client';
import { Disclosure, Transition } from '@headlessui/react';
import Link from 'next/link';
import CommandMenu from './search';

import {
  Icons,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from 'ai-uis';
import { Fragment } from 'react';

const navigation = [
  { name: 'About AI', href: '/about', current: true  },
  { name: 'Gallery', href: '/gallery', current: true },
  { name: 'Portfolio', href: '/portfolio', current: true },
  { name: 'Products', href: '/products', current: true },
  { name: 'Blogs', href: '/blogs', current: true },
  { name: 'Designs', href: '/designs', current: true }
];

const helps = [
  { name: 'Contact', href: '/contact', current: true },
  { name: 'Privacy', href: '/privacy', current: true },
  { name: 'Terms', href: '/terms', current: true },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="w-full">
      {({ open }) => (
        <>
          <header className="">
            <div className="fixed right-2 top-2 flex flex-1 items-center justify-end">
              <div className="mr-2 md:px-8 flex transition ease-in-out lg:hidden">
                <Disclosure.Button className="items-center justify-center p-2 text-center text-slate-600 dark:text-slate-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Icons.close strokeWidth={1.5} className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Icons.menu strokeWidth={1.5} className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Disclosure.Panel className="lg:hidden mx-auto md:max-w-3xl px-6">
                  <div className="flex flex-col py-4 ">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="py-2 text-xl font-semibold"
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <p className="flex items-center gap-3">
                          <span>{item.name}</span>
                        </p>
                      </Disclosure.Button>
                    ))}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Others</AccordionTrigger>
                        <AccordionContent>
                          {helps.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="flex px-4 py-2 text-xl font-semibold"
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="mt-6">
                      <CommandMenu />
                      <Link
                        href="/Ali-CV.pdf" 
                        target="_blank"
                        className="mt-4 flex gap-3 text-aired"
                        download={true}
                      >
                        <p className="text-xl font-semibold">Download CV</p>
                        <Icons.download className="w-5" />
                      </Link>
                    </div>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          </header>
        </>
      )}
    </Disclosure>
  );
}
