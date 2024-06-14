'use client';

import { type MDXComponents } from 'ai-mdxs';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { Alert, AlertDescription, AlertTitle } from 'ai-uis';
import {
  Tabs,
  TabsContent,
  TabsList, 
  TabsTrigger,
} from "ai-uis"

import ImageZoom from '@/components/common/image-zoom';
import Image from './image';
import ItemGrid from './item-grid';
import { FlexGrid, TabGrid, FlexGridTWO } from './flex-grid';
import { ImageGrid, ImageGridTWO, ImageGridTHREE } from './image-grid';
import Link from './link';
import LinkCard from './link-card'; 
import Pre from './pre';
import Tree from './tree';
import Table from './table';
import Video from './video';
import Callout from "./callout"
import MdxCard from "./mdx-card"
import { cn } from 'ai-utilities';

type MdxProps = {
  code: string;
};

const components: MDXComponents = {
  a: Link,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "my-6 scroll-m-20 border-b border-slate-200 dark:border-slate-800 pb-4 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6 text-slate-600 dark:text-slate-400", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<Element>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-4 border-slate-200 dark:border-slate-800 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border border-slate-200 dark:border-slate-800", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t border-slate-200 dark:border-slate-800 p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border border-slate-200 dark:border-slate-800 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border border-slate-200 dark:border-slate-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded-md border border-slate-200 dark:border-slate-800 px-[0.4rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
    <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
  ),
  TabsList: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsList>) => (
    <TabsList
      className={cn(
        "w-full justify-start rounded-none border-b bg-transparent p-0",
        className
      )}
      {...props}
    />
  ),
  TabsTrigger: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
        className
      )}
      {...props}
    />
  ),
  TabsContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn(
        "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
        className
      )}
      {...props}
    />
  ),
  Image: (props: React.ComponentPropsWithoutRef<typeof Image>) => {
    const { alt, src, ...rest } = props;

    return (
      <>
        <ImageZoom>
          <Image
            src={src}
            className="not-prose flex h-full w-full cursor-zoom-in rounded-3xl border border-slate-200 bg-aired object-cover object-center dark:border-slate-800"
            alt={alt}
            {...rest}
          />
        </ImageZoom>
        <figcaption className="mb-2"></figcaption>
      </>
    );
  },
  Alert: (props: React.ComponentPropsWithoutRef<typeof Alert>) => <Alert {...props} />,
  AlertTitle: (props: React.ComponentPropsWithoutRef<typeof AlertTitle>) => (
    <AlertTitle {...props} />
  ),
  AlertDescription: (props: React.ComponentPropsWithoutRef<typeof AlertDescription>) => (
    <AlertDescription {...props} />
  ),
  pre: Pre,
  ItemGrid,
  FlexGrid,
  FlexGridTWO,
  Callout, 
  ImageGridTWO,
  ImageGridTHREE,
  ImageGrid,
  TabGrid,
  Table,
  Tree,
  Video,
  LinkCard,
  Card: MdxCard,
};

const Mdx = (props: MdxProps) => {
  const { code } = props;
  const Component = useMDXComponent(code);

  return (
    <div className="prose w-full max-w-none dark:prose-invert">
      <Component components={{ ...components }} />
    </div>
  );
};

export default Mdx;
