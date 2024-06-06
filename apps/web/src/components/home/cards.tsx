'use client'

import React from 'react'

import { Icons } from 'ai-uis';
import Image from 'next/image';
import { cn } from 'ai-utilities';
import { Avegra } from '@/app/fonts';
import Link from 'next/link';
import { AIExp } from '@/components/common/exp';


export const Graaadients = () => {
    return (
        <>
            <Link href="/products/graaadients">
                <div className='flex gap-2 w-full'>
                    <div className='group w-full relative p-2 overflow-hidden bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-900 transition-colors duration-150 hover:bg-accent'>
                        <div className='flex flex-col items-center justify-center gap-1 transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24'>
                            <Image
                                src="/images/products/grad-full.jpg"
                                alt="Your Image"
                                height={300}
                                width={500}
                                className="h-[70px] rounded-sm object-cover "
                            />
                            <h1 className={cn(
                                Avegra.className,
                                'absolute mt-2 text-4xl text-white'
                            )}>
                                Graaadients
                            </h1>
                        </div>
                        <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                            Free Download
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const PeachFuzz = () => {
    return (
        <>
            <Link href="/">
                <div className='flex gap-2 w-full'>
                    <div className='group w-full relative p-2 overflow-hidden bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-900 transition-colors duration-150 hover:bg-accent'>
                        <div className='flex flex-col items-center justify-center gap-1 transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24'>
                            <Image
                                src="/images/products/shapes.jpg"
                                alt="Your Image"
                                height={300}
                                width={500}
                                className="h-[70px] rounded-sm object-cover "
                            />
                            <h1 className={cn(
                                Avegra.className,
                                'absolute mt-2 text-4xl text-white'
                            )}>
                                Shapes
                            </h1>
                        </div>
                        <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                            
                        Coming Soon
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const AICV = () => {
    return (
        <>
            <Link href="/Ali-CV.pdf"
                download={true}
                target="_blank">
                <div className='flex gap-2 w-full'>
                    <div className='group w-full relative p-2 py-4 overflow-hidden bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-900 transition-colors duration-150 hover:bg-accent'>
                        <div className='flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24'>
                            <div className='flex gap-2 py-[13px] items-center justify-center'>
                                <Icons.download className='h-4 w-4 text-slate-400 dark:slate-600' />
                                <p className='text-lg text-ali font-semibold'>Resume AI</p>
                            </div>
                        </div>
                        <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                            
                            Download
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const Insta = () => {
    return (
        <>
            <Link href="https://www.instagram.com/aliimam.in/"
                download={true}
                target="_blank">
                <div className='flex gap-2 w-full'>
                    <div className='group w-full relative p-2 py-4 overflow-hidden bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-900 transition-colors duration-150 hover:bg-accent'>
                        <div className='flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24'>
                            <div className='flex gap-2 py-[13px] items-center justify-center'>
                                <Icons.instagram className='h-4 w-4 text-slate-400 dark:slate-600' />
                                <p className='text-lg text-ali font-semibold'>aliimam.in</p>
                            </div>
                        </div>
                        <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                            
                            Instagram
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const Exp = () => {
    return (
        <>
            <Link href="/about">
                <div className='flex gap-2 w-full h-full'>
                    <div className='group w-full relative p-2 py-4 overflow-hidden bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-900 transition-colors duration-150 hover:bg-accent'>
                        <div className='flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24'>
                            <div className='flex gap-1 py-[9px] items-center justify-center'>
                                <p className='text-slate-400 dark:slate-600 text-center text-xs'>Experience</p>
                                <AIExp />
                                <p className='text-slate-400 dark:slate-600 text-center text-xs'>Years</p>
                            </div>
                        </div>
                        <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                            About Me
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const Extra = () => {
    return (
        <>
            <Link href="/products/3dicons">
                <div className='flex gap-2 w-full h-full'>
                    <div className='group w-full relative p-2  overflow-hidden bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-900 transition-colors duration-150 hover:bg-accent'>
                        <div className='flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-64 group-focus:-translate-y-24'>
                            <div className='flex  items-center justify-center'>
                            <Image
                                src="/images/products/3dicons.jpg"
                                alt="Your Image"
                                height={300}
                                width={500}
                                className="h-[240px] rounded-sm object-cover "
                            />
                            </div>
                        </div>
                        <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                            Free Download
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

