"use client";

import {
  Avatar, AvatarFallback, AvatarImage ,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "ai-uis";
import { CreditCard, Home, Settings } from "lucide-react";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import Link from "next/link";

export const navItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
];

export function UserNav({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Avatar>
              <AvatarImage
                className="flex justify-center items-center rounded-full bg-ali"
                src={image}
                alt="AI"
              />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-6 mx-auto lg:grid-cols-2 max-w-5xl md:px-6">
              <li className="row-span-3">
                <NavigationMenuLink>
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    
                    <div className="mb-2 mt-4 text-lg font-medium">{name}</div>
                    <p className="text-xs leading-tight text-muted-foreground">
                      {email}
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <div className="text-xs text-slate-600 dark:text-slate-400 ">
                {navItems.map((item, ) => (
                  // eslint-disable-next-line react/jsx-key
                  <div className="grid ">
                    <Link href={item.href}>
                      <p className="grid space-y-6 pb-4 hover:text-black hover:dark:text-white">{item.name}</p>
                    </Link>
                  </div>
                ))}
                <LogoutLink>
                  <p className="hover:text-black hover:dark:text-white">Logout</p>
                </LogoutLink>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function LoginNav() {
  return (
    <div className="">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className="h-6 w-6 bg-ali rounded-full"></div>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 md:px-6 mx-auto max-w-5xl text-xs text-slate-600 dark:text-slate-400 ">
                <LoginLink className="flex gap-2">
                  <p className="hover:text-black hover:dark:text-white">Login</p>
                </LoginLink>
                <RegisterLink className="flex gap-2">
                  <p className="hover:text-black hover:dark:text-white">Registration</p>
                </RegisterLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
