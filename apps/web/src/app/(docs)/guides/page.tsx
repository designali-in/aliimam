import Link from "next/link"
import { allGuides } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import { Cards } from "./cards"

import { formatDate } from "ai-utilities"
import { DocsPageHeader } from "@/components/mdx/doc/page-header"

export const metadata = {
  title: "Guides - Ali Imam",
  description:
    "This section includes end-to-end guides for developing Next.js 13 apps.",
}

export default function GuidesPage() {
  const guides = allGuides
    .filter((guide) => guide.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })


  return (
    <div className="relative lg:gap-10 grid xl:grid-cols-[1fr_260px]">

      <div className="py-6 lg:py-10">
        <DocsPageHeader
          heading="This section is still under construction..."
          text="Welcome to the AI Guides!  "
        />

        <div className="grid pb-10 gap-4 md:grid-cols-2 md:gap-6">
          {guides.map((guide) => (
            <article
              key={guide._id}
              className="group relative rounded-2xl dark:border-slate-800 border-slate-200 border p-6 transition-shadow hover:shadow-lg"
            >
              {guide.featured && (
                <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium">
                  Featured
                </span>
              )}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {guide.title}
                  </h2>
                  {guide.description && (
                    <p className="text-slate-600 dark:text-slate-400">{guide.description}</p>
                  )}
                </div>
                {guide.date && (
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {formatDate(guide.date)}
                  </p>
                )}
              </div>
              <Link href={guide.slug} className="absolute inset-0">
                <span className="sr-only">View</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
      <div className="hidden xl:block sticky top-24 border-l border-slate-400 dark:border-slate-600 h-[calc(100vh-3.5rem)] pt-6 overflow-y-auto">
        <Cards />
      </div>
    </div>
  )
}
