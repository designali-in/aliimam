import { allGalleryPosts } from 'contentlayer/generated';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { type Article, type WithContext } from 'schema-dts';

import site from '@/config/site';

import Content from './content';
import Header from './header';
import { MdxPager } from '@/components/mdx/mdx-pager';
import { Separator } from 'ai-uis';
import Link from 'next/link';
import { ChevronLeftIcon } from 'lucide-react';

// export const runtime = 'edge'

type AssetPostPageProps = {
  params: {
    slug: string;
  };
  searchParams: Record<string, never>;
};

export const generateStaticParams = (): Array<AssetPostPageProps['params']> => {
  return allGalleryPosts.map((post) => ({
    slug: post.slug
  }));
};

export const generateMetadata = async (
  props: AssetPostPageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> => {
  const { params } = props;

  const post = allGalleryPosts.find((p) => p.slug === params.slug);

  if (!post) return {};

  const ISOPublishedTime = new Date(post.date).toISOString();
  const ISOModifiedTime = new Date(post.modifiedTime).toISOString();

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `${site.url}/gallery/${params.slug}`
    },
    openGraph: {
      url: `${site.url}/gallery/${params.slug}`,
      type: 'article',
      title: post.title,
      siteName: site.name,
      description: post.summary,
      locale: 'en-US',
      publishedTime: ISOPublishedTime,
      modifiedTime: ISOModifiedTime,
      authors: site.url,
      images: [
        {
          url: `${site.url}/api/og?title=${post.title}&date=${
            post.date.split('T')[0]
          }&url=aliimam.in/gallery`,
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/png'
        }
      ]
    }
  };
};

const AssetPostPage = (props: AssetPostPageProps) => {
  const { slug } = props.params;

  const post = allGalleryPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const { title, summary, date, modifiedTime, download, dimention, size } = post;

  const jsonLd: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',

    headline: title,
    description: summary,
    datePublished: date,
    dateModified: modifiedTime,
    image: `${site.url}/api/og?title=${title}&date=${date.split('T')[0]}&url=aliimam.in/blog`,
    author: {
      '@type': 'Person',
      name: site.name,
      url: site.url
    },
    publisher: {
      '@type': 'Person',
      name: site.name,
      url: site.url
    }
  };

  return (
    <div className="mx-auto my-40 max-w-4xl px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header date={date} title={title} slug={slug} download={download} dimention={dimention} size={size} summary={summary} />
      <Content slug={slug} post={post} />
      <Separator className="my-8" />
      <MdxPager currentItem={post} allItems={allGalleryPosts} />
      <Link
        href="/gallery"
        className="">
        <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
        See all Cities
        <span className="sr-only">See all Cities</span>
      </Link>
    </div>
  );
};

export default AssetPostPage;
