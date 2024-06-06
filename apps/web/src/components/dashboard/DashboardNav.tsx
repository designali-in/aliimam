"use client";

import { cn } from "ai-utilities";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/components/layout/header/UserNav";


export function DashboardNav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex justify-center">
    <nav className="flex gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-full">
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}
        className="">
          <span
            className={cn(
              "flex items-center rounded-full px-5 py-3 text-sm ",
              pathname === item.href ? "bg-ali text-white" : ""
            )}
          >
            <item.icon className="mr-1 h-4 w-4" />
            <span>{item.name}</span>
          </span>
        </Link>
      ))}
    </nav>
    </div>
  );
}
