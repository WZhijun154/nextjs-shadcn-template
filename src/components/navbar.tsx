"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { LogoIcon } from "@/components/icons";
import {
  ThemeSwitch,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  LocaleSwitcher,
} from "@/components/dynamics";
import { LocalizeLink } from "./localize-link";
// import { ScrollProgress } from "@/components/dynamics";
import { Dictionary } from "@/lib/dictionaries";
import { useIsMobile } from "@/hooks/use-is-mobile";

export const Navbar = ({ dictionary }: { dictionary: Dictionary }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* <ScrollProgress /> */}
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center relative">
          <NavigationMenuItem className="font-bold flex">
            <LocalizeLink
              rel="noreferrer noopener"
              href="/"
              lang={dictionary.lang}
              className="ml-2 font-bold text-xl flex"
            >
              <LogoIcon />
              {(!isMobile || dictionary.brandName.length <= 15) &&
                dictionary.brandName}
            </LocalizeLink>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden items-center">
            <LocaleSwitcher />
            <ThemeSwitch />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2" aria-label="Menu">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"right"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    {dictionary.brandName}
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col justify-center items-center gap-2 mt-4">
                  {dictionary.navbar.RouteList.map(({ href, label }) => (
                    <LocalizeLink
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      lang={dictionary.lang}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </LocalizeLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <div className="hidden md:flex gap-2 absolute left-1/2 transform -translate-x-1/2">
            {dictionary.navbar.RouteList.map((route, i) => (
              <LocalizeLink
                rel="noreferrer noopener"
                href={route.href}
                lang={dictionary.lang}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </LocalizeLink>
            ))}
          </div>

          <div className="hidden md:flex gap-2 items-center">
            {/* <LocalizeLink
              rel="noreferrer noopener"
              href={AUTHOR_GITHUB_URL}
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </LocalizeLink> */}

            <LocaleSwitcher />
            <ThemeSwitch />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
