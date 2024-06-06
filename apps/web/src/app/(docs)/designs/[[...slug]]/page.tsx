import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"
import Mdx from "@/components/mdx/layers"
import { DocsPageHeader } from "@/components/mdx/doc/page-header"
import { DocsPager } from "@/components/mdx/doc/pager"
import { DashboardTableOfContents } from "@/components/mdx/doc/toc"

import "@/styles/mdx.css"

import { Separator } from "ai-uis"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams(params: { slug: any }) {
  const slug = params.slug?.join("/") || ""
  const doc = allDocs.find((doc: { slugAsParams: any }) => doc.slugAsParams === slug)

  if (!doc) {
    null
  }

  return doc
}


export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc: { slugAsParams: string }) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params)

  if (!doc) {
    notFound()
  } 

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className="relative lg:gap-10 grid xl:grid-cols-[1fr_260px]">
      <div className="mx-auto w-full py-10 min-w-0">
        <DocsPageHeader heading={doc.title} text={doc.description} />
        <Mdx code={doc.body.code} />
        <Separator className="my-8"/>
        <DocsPager doc={doc}/>
      </div>
      <div className="hidden text-sm xl:block">
      <div className="sticky top-24 border-l border-slate-400 dark:border-slate-600 h-[calc(100vh-3.5rem)] p-12 overflow-y-auto">
            <DashboardTableOfContents toc={toc} />
          </div>
      </div>
    </main>
  )
}
