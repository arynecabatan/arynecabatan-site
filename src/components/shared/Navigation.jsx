"use client";
import { config } from "@/libs/config";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { BurgerButton } from "./BurgerButton";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export const Navigation = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrollBG, setScrollBG] = useState(true);

  const mobileMenuHandler = () => {
    setMobileMenu(!mobileMenu);
  };

  const scrollUpdateHandler = () => {
    if (window.scrollY > 50) {
      setScrollBG(false); //colored
    } else {
      setScrollBG(true); //transparent
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollUpdateHandler);
    return () => {
      window.removeEventListener("scroll", scrollUpdateHandler);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full z-[999] fixed flex flex-col justify-start h-fit items-center ${
          scrollBG
            ? `backdrop-blur-none border-gray-900`
            : `backdrop-blur-sm bg-culturedwhite/50 dark:bg-spacecadet/30 shadow-sm`
        }`}
      >
        <div className="h-16 max-w-[1440px] w-full flex justify-between items-center px-3 sm:px-4 ">
          <Link href="/">
            <Image
              src="/logo-minified-light.svg"
              alt="logolight"
              width={40}
              height={40}
            />
          </Link>
          <div className="flex gap-4 items-center">
            <div className="hidden sm:flex gap-6">
              {config.navLinks.map((item) => {
                return (
                  <Link href={item.path} key={item.name}>
                    <p
                      className={`${
                        pathname === item.path
                          ? "font-semibold text-sizzlingred dark:text-tartorange"
                          : "text-spacecadet dark:text-culturedwhite font-normal"
                      } `}
                    >
                      {item.name}
                    </p>
                  </Link>
                );
              })}
            </div>
            <ThemeSwitcher />
            <button className="block sm:hidden" onClick={mobileMenuHandler}>
              <BurgerButton mobileMenu={mobileMenu} />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`${
          !mobileMenu ? "hidden" : "grid"
        } z-[998] fixed h-screen w-full bg-culturedwhite/80 dark:bg-spacecadet/80 pt-20 px-3 grid sm:hidden place-items-center backdrop-blur-sm transition`}
      >
        <div className="flex flex-col text-center gap-6">
          {config.navLinks.map((item) => {
            return (
              <Link href={item.path} key={item.name}>
                <p
                  className={`text-xl ${
                    pathname === item.path
                      ? "font-semibold text-sizzlingred dark:text-tartorange"
                      : "text-spacecadet dark:text-culturedwhite font-normal"
                  } `}
                >
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
