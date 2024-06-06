'use client';

import React from 'react';
import useSWR from 'swr';

import ImageZoom from '@/components/common/image-zoom';
import Image from '@/components/mdx/layers/image';
import { Skeleton } from 'ai-uis';
import fetcher from '@/lib/fetcher';
import { type Views } from '@/types';
import LikeButton from '@/components/ui/like-button';
import Link from 'next/link';
import { cn } from 'ai-utilities';
import { buttonVariants } from 'ai-uis';
import { Icons } from 'ai-uis';

type HeaderProps = {
  date: string;
  title: string;
  slug: string;
  download: string;
  dimention: string;
  summary: string;
  size: string;
};

const Header = (props: HeaderProps) => {
  const { title, slug, download, dimention, size, summary } = props;
  const { data: viewsData, isLoading: viewsIsLoading } = useSWR<Views>(
    `/api/views?slug=${slug}`,
    fetcher
  );

  React.useEffect(() => {
    const increment = async () => {
      await fetch('/api/views', {
        method: 'POST',
        body: JSON.stringify({
          slug
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    };

    increment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-center text-3xl font-bold md:text-5xl">{title}</h1>
      <p className='text-center text-slate-600 dark:text-slate-400'>{summary}</p>
      <ImageZoom
        zoomImg={{
          src: `/images/gallery/${slug}/cover.jpg`,
          alt: title
        }}
      >
        <Image
          src={`/images/gallery/${slug}/cover.jpg`}
          className="rounded-3xl"
          width={1280}
          height={720}
          lazy={false}
          alt={title}
        />
      </ImageZoom>

      <div className="grid grid-cols-2 text-sm max-md:gap-8 md:grid-cols-3">
        <div className="space-y-2 md:mx-auto">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Views
          </div>
          {viewsIsLoading ? (
            <Skeleton className="h-6 w-32 rounded-md" />
          ) : (
            <div className="text-lg font-bold">{viewsData?.views}</div>
          )}
        </div>

        <div className="space-y-2 md:mx-auto">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Dimention
          </div>
          <p className="text-lg font-semibold">{dimention}</p>
        </div>

        <div className="space-y-2 md:mx-auto">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Size
          </div>
          <p className="text-lg font-semibold">{size}</p>
        </div>
      </div>
      <div className="grid grid-rows-2 gap-3 md:grid-cols-2">
        <LikeButton slug={slug} />

        <Link
          href={download}
          download={true}
          target='_blank'
          className={cn(
            buttonVariants({
              variant: 'default',
              size: 'lg'
            })
          )}
        >
          <span className="flex gap-2 px-2">
            <Icons.download size={24} />
            <p className="text-lg">Free Download</p>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
