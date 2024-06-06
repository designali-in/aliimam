'use client'

import { HighlighterItem, HighlightGroup } from "../ui/highlighter";
import Link from "next/link";
import { Particles } from "../ui/particles";

import { useAnimate } from 'framer-motion'
import * as React from 'react'
import { Icons, buttonVariants } from "ai-uis";
import { cn } from "ai-utilities";



export const Connect: React.FC = () => {
    const [scope, animate] = useAnimate()
   


    React.useEffect(() => {
        animate(
            [
                ['#pointer', { left: 200, top: 60 }, { duration: 0 }],
                ['#javascript', { opacity: 1 }, { duration: 0.3 }],
                [
                    '#pointer',
                    { left: 50, top: 102 },
                    { at: '+0.5', duration: 0.5, ease: 'easeInOut' }
                ],
                ['#javascript', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
                ['#react-js', { opacity: 1 }, { duration: 0.3 }],
                [
                    '#pointer',
                    { left: 224, top: 170 },
                    { at: '+0.5', duration: 0.5, ease: 'easeInOut' }
                ],
                ['#react-js', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
                ['#typescript', { opacity: 1 }, { duration: 0.3 }],
                [
                    '#pointer',
                    { left: 88, top: 198 },
                    { at: '+0.5', duration: 0.5, ease: 'easeInOut' }
                ],
                ['#typescript', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
                ['#next-js', { opacity: 1 }, { duration: 0.3 }],
                [
                    '#pointer',
                    { left: 200, top: 60 },
                    { at: '+0.5', duration: 0.5, ease: 'easeInOut' }
                ],
                ['#next-js', { opacity: 0.5 }, { at: '-0.3', duration: 0.1 }]
            ],
            {
                repeat: Number.POSITIVE_INFINITY
            }
        )
    }, [animate])
    return (
        <section className="relative mb-10 mx-auto max-w-5xl mt-10 px-6">
            <HighlightGroup className="h-full group">
                <div className="h-full md:col-span-6 lg:col-span-12  group/item" data-aos="fade-down">
                    <HighlighterItem className='rounded-3xl'>
                        <div className="relative h-full bg-slate-100/50 border border-slate-200 dark:border-slate-800 dark:bg-black rounded-3xl z-20 overflow-hidden">
                            <Particles
                                className="absolute inset-0 -z-10 opacity-10 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
                                quantity={50}
                            />
                            <div className='flex justify-center'>
                                <div className='flex gap-10 p-4 flex-col md:flex-row justify-center h-full md:h-[300px]'>

                                    <div className='mx-auto relative h-[270px] w-[300px] md:h-[270px] md:w-[300px]' ref={scope}>
                                        <Icons.Logo className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10' />
                                        <div
                                            id='next-js'
                                            className='absolute bottom-12 left-14 rounded-3xl bg-slate-200 border border-slate-400 dark:border-slate-600 dark:bg-slate-800 px-2 py-1.5 text-xs opacity-50'
                                        >
                                            UI-UX
                                        </div>
                                        <div
                                            id='react-js'
                                            className='absolute left-2 top-20 rounded-3xl bg-slate-200 border border-slate-400 dark:border-slate-600 dark:bg-slate-800 px-2 py-1.5 text-xs opacity-50'
                                        >
                                            Graphic Design
                                        </div>
                                        <div
                                            id='typescript'
                                            className='absolute bottom-20 right-1 rounded-3xl bg-slate-200 border border-slate-400 dark:border-slate-600 dark:bg-slate-800 px-2 py-1.5 text-xs opacity-50'
                                        >
                                            Video Editing
                                        </div>
                                        <div
                                            id='javascript'
                                            className='absolute right-12 top-10 rounded-3xl bg-slate-200 border border-slate-400 dark:border-slate-600 dark:bg-slate-800 px-2 py-1.5 text-xs opacity-50'
                                        >
                                            Branding
                                        </div>

                                        <div id='pointer' className='absolute'>
                                            <svg
                                                width='16.8'
                                                height='18.2'
                                                viewBox='0 0 12 13'
                                                className='fill-red-500'
                                                stroke='white'
                                                strokeWidth='1'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    clipRule='evenodd'
                                                    d='M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z'
                                                />
                                            </svg>
                                            <span className='relative left-3 -top-1 text-white rounded-3xl bg-aired px-2 py-1 text-xs'>
                                                Ali
                                            </span>
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-center -mt-20 md:-mt-4 p-2 h-full md:w-[400px] md:ml-10'>
                                        <div className="flex flex-col items-center">
                                            <h3 className="inline-flex items-baseline pb-1 mt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-200 dark:to-slate-600">
                                                <span className="text-2xl md:text-4xl">Any questions about Design?</span>
                                            </h3>
                                        </div>
                                        <p className='text-slate-400 mb-4'>
                                            Feel free to reach out to me!

                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                        <Link
                                                href="mailto:imam30114@gmail.com"
                                                target="_blank"
                                                className={cn(
                                                    buttonVariants({
                                                        variant: 'default',
                                                        size: 'lg'
                                                    })
                                                )}
                                            >
                                                <span className="flex gap-1 items-center">
                                                    <Icons.mail className="w-3 h-3" />
                                                    Contact AI
                                                </span>
                                            </Link>
                                            <Link
                                                href="https://chat.whatsapp.com/LWsNPcz5BlWDVOha41vzuh"
                                                target="_blank"
                                                className={cn(
                                                    buttonVariants({
                                                        variant: 'default',
                                                        size: 'lg'
                                                    })
                                                )}
                                            >
                                                <span className="flex gap-1 items-center">
                                                    <Icons.whatsapp className="w-3 " />
                                                    Join Whatsapp
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </HighlighterItem>
                </div>
            </HighlightGroup>
        </section>
    );
};