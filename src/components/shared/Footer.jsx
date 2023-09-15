import { config } from "@/libs/config";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="h-36 w-full flex justify-center px-3 md:px-4">
      <div className="flex max-w-[1440px] w-full flex-col justify-center items-center gap-3 md:flex-row-reverse md:justify-between">
        <div className="gap-2 flex flex-row md:gap-4">
          {config.socialLinks.map((item) => {
            return (
              <Link href={item.path} key={item.name} target="_blank">
                {
                  <item.icon className="text-lg text-spacecadet dark:text-culturedwhite hover:text-sizzlingred hover:dark:text-tartorange transition-all" />
                }
              </Link>
            );
          })}
        </div>
        <small>© Aryne Cabatan, 2023</small>
      </div>
    </footer>
  );
};
