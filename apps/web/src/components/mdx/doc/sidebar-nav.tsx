"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarNavItem } from "./types"
import { cn } from "ai-utilities"

export interface GuidesSidebarNavProps {
  items: SidebarNavItem[]
}

export function GuidesSidebarNav({ items }: GuidesSidebarNavProps) {
  const pathname = usePathname()

  return items.length ? (
    <div className="w-full mb-10">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-0")}>
          <h4 className="mb-1 rounded-xl px-2 py-1 mt-10 text-md font-medium">
            {item.title}
          </h4>
          {item.items ? (
            <GuidesSidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null
}

interface GuidesSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function GuidesSidebarNavItems({
  items,
  pathname,
}: GuidesSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex w-full items-center text-slate-600 dark:text-slate-400 rounded-xl hover:dark:bg-slate-900 hover:bg-slate-100 p-2 px-4",
              {
                "bg-slate-100 dark:bg-slate-900 text-ali dark:text-ali font-bold text-md": pathname === item.href,
              }
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : (
          // eslint-disable-next-line react/jsx-key
          <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">
            {item.title}
          </span>
        )
      )}
    </div>
  ) : null
}


export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()

  return items.length ? (
    <div className="w-full mb-10">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-0")}>
          <h4 className="mb-1 rounded-xl px-2 py-1 mt-10 text-md font-medium">
            {item.title}
          </h4>
          {item.items ? (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex w-full items-center text-slate-600 dark:text-slate-400 rounded-xl hover:dark:bg-slate-900 hover:bg-slate-100 p-2 px-4",
              {
                "bg-slate-100 dark:bg-slate-900 text-ali dark:text-ali font-bold text-md": pathname === item.href,
              }
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : (
          // eslint-disable-next-line react/jsx-key
          <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">
            {item.title}
          </span>
        )
      )}
    </div>
  ) : null
}
