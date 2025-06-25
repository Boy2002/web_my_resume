"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("Nav");
  const [hidden, setHidden] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const otherLocale = currentLocale === "en" ? "th" : "en";
  const switchLocalePath = `/${otherLocale}${pathname.replace(
    /^\/(en|th)/,
    ""
  )}`;

  const roles = [
    "Front-end Developer",
    "Back-end Developer",
    "Full Stack Developer",
  ];

  const [text] = useTypewriter({
    words: roles,
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 3000,
  });

  useEffect(() => {
    const handleScroll = () => {
      setHidden(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setHidden(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-[#111827]/50 backdrop-blur-sm text-white flex flex-row justify-between items-center px-60 py-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }  shadow-md`}
    >
      <div className="space-x-2">
        <Link href="/" className="hover:text-gray-900">
          <h1 className="text-xl font-semibold">BoyToDev</h1>
          <p className="pressStart text-[10px]">
            {text}
            <Cursor cursorStyle="|" />
          </p>
        </Link>
      </div>

      <div className="flex flex-row items-center space-x-4">
        <NavigationMenu>
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about-me" className="hover:text-gray-900">
                  {t("nav1")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/skills" className="hover:text-gray-900">
                  {t("nav2")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/projects" className="hover:text-gray-900">
                  {t("nav3")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link
          href={switchLocalePath}
          className="ml-6 px-3 py-1 rounded border border-white hover:bg-white hover:text-gray-900 transition"
        >
          {otherLocale.toUpperCase()}
        </Link>
      </div>
    </header>
  );
}
