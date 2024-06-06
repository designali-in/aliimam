
import { allBlogPosts } from 'contentlayer/generated';
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

type BlogPostPageProps = {
  params: {
    slug: string;
  };
  searchParams: Record<string, never>;
};

export const generateStaticParams = (): Array<BlogPostPageProps['params']> => {
  return allBlogPosts.map((post) => ({
    slug: post.slug
  }));
};

export const generateMetadata = async (
  props: BlogPostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { params } = props;

  const post = allBlogPosts.find((p) => p.slug === params.slug);

  if (!post) return {};

  const ISOPublishedTime = new Date(post.date).toISOString();
  const ISOModifiedTime = new Date(post.modifiedTime).toISOString();
  const previousTwitter = (await parent)?.twitter ?? {};

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `${site.url}/blogs/${params.slug}`
    },
    openGraph: {
      url: `${site.url}/blogs/${params.slug}`,
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
          }&url=aliimam.in/blogs`,
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/png'
        }
      ]
    },
    twitter: {
      ...previousTwitter,
      title: post.title,
      description: post.summary,
      images: [
        `${site.url}/api/og?title=${post.title}&date=${post.date.split('T')[0]}&url=aliimam.in/blog`
      ]
    }
  };
};

const BlogPostPage = (props: BlogPostPageProps) => {
  const { slug } = props.params;

  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const { title, summary, date, modifiedTime } = post;

  const jsonLd: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',

    headline: title,
    description: summary,
    datePublished: date,
    dateModified: modifiedTime,
    image: `${site.url}/api/og?title=${title}&date=${date.split('T')[0]}&url=aliimam.in/blogs`,
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
    <div className="mx-auto my-40 max-w-5xl px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header date={date} title={title} slug={slug} />
      <Content slug={slug} post={post} />
      <Separator className="my-8" />
      <MdxPager currentItem={post} allItems={allBlogPosts} />
      <Link
        href="/blogs"
        className=""
      >
        <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
        See all blog
        <span className="sr-only">See all blogs</span>
      </Link>
    </div>
  );
};

export default BlogPostPage;
