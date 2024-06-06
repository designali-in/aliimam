import Link from "next/link";
import { Logo, Separator } from "ai-uis";
import { ThemeToggle } from "./themetoggle";
import { Menu } from "./navmenu";
import CommandMenu from "./search";
import SiteHeader from './mobile';
import { UserNav, LoginNav } from "./UserNav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-100/60 dark:bg-slate-900/60 hover:bg-slate-50 hover:dark:bg-slate-950 backdrop-blur-md backdrop-filter">
      <div className="mx-auto flex items-center md:px-20">
        <div className="mx-auto flex h-14 max-w-5xl flex-1 items-center">
          <Link href="/" className="flex items-center justify-center lg:flex px-6">
            <Logo className="w-7" />
          </Link>
          <Menu />
          <div className="mx-auto flex h-12 flex-1 items-center justify-end gap-2">
            <ThemeToggle />
            <CommandMenu />
            <Separator
              orientation="vertical"
              className="h-6 bg-slate-400 dark:bg-slate-600 "
            />
            <div className="md:flex items-center mr-12 md:mr-0">
              {(await isAuthenticated()) ? (
                <UserNav
                  email={user?.email as string}
                  image={user?.picture as string}
                  name={user?.given_name as string}
                />
              ) : (
                <LoginNav />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex flex-1 items-center">
        <SiteHeader />
      </div>
    </nav>
  );
}
