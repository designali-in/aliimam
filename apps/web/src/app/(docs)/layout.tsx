
import { docsConfig } from "@/config/docs"
import { MainNav } from "@/components/mdx/doc/main-nav"
import { DocsSearch } from "@/components/mdx/doc/search"
import { DocsSidebarNav } from "@/components/mdx/doc/sidebar-nav"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex mt-14 flex-col">
      <header className="sticky top-14 z-40 border-b border-t border-slate-400 dark:border-slate-600 bg-slate-100/60 dark:bg-slate-900/60 hover:bg-slate-50 hover:dark:bg-slate-950 backdrop-blur-md backdrop-filter">
        <div className="flex px-6 h-14 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={docsConfig.mainNav}>
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </MainNav>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0">
              <DocsSearch />
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1">
        {children}
        </div>
    </div>
  )
}
