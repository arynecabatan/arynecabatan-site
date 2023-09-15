import { config } from "@/libs/config";
import { FiDownload } from "react-icons/fi";

export const metadata = {
  title: `About`,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className='w-full flex justify-center dark:bg-[url("/patternpad-dark-about.svg")] bg-[url("/patternpad-light-about.svg")] bg-no-repeat bg-cover max-h-screen relative z-20 before:z-10 before:absolute before:h-screen before:w-full before:bg-gradient-to-t before:from-culturedwhite before:dark:from-spacecadet before:overflow-y-hidden px-3 md:px-4'>
      <div className="z-30 w-full max-w-[1440px] flex flex-col justify-center gap-2 md:px-20 lg:px-25">
        <h1 className="text-6xl md:text-8xl text-sizzlingred">{`Hi! I'm Aryne`}</h1>
        <p className="font-normal italic text-lg md:text-3xl lg:text-4xl">
          {`— A multidisciplinary designer`}
        </p>
        <p className="leading-loose whitespace-pre-line max-w-[700px] md:pt-4">
          I focus on creating <strong>visually appealing</strong> yet
          <strong> functional</strong> user experiences. My design is heavily
          influenced by &quot;keep-it-simple&quot; principle, however as a
          designer I believe that an effective design goes beyond aesthetic and
          should drive mutual connections. Throughout my design career, I thrive
          in translating complex ideas into simple and engaging designs that
          meet both
          <strong> user needs</strong> and <strong>business goals.</strong>
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href={config.resume}
          className="mt-3 aryne-button flex items-center gap-3 w-fit"
        >
          Download CV <FiDownload className="text-xl" />
        </a>
      </div>
    </section>
  );
}
