import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export const ProjectPageContent = ({ project }) => {
  return (
    <ReactMarkdown
      className="my-10"
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        img: function ({ ...props }) {
          return (
            <div className="grid place-items-center gap-2">
              <Image
                className={`rounded-xl object-cover w-full max-w-[960px]`}
                src={props.src}
                alt={props.alt ? props.alt : "Rynn.io image"}
                width="960"
                height="640"
              />
              {/* <figcaption className="w-full max-w-[720px] text-center break-keep">
                {props.alt ? props.alt : ""}
              </figcaption> */}
            </div>
          );
        },
        h2: function ({ children }) {
          return (
            <h2 className="font-bold text-sizzlingred dark:text-tartorange pt-4">
              {children}
            </h2>
          );
        },
        h3: function ({ children }) {
          return <h3 className="my-3 pt-4 font-semibold">{children}</h3>;
        },
        p: function ({ children }) {
          return (
            <div className="my-5 text-base font-normal whitespace-pre-wrap">
              {children}
            </div>
          );
        },
        a: function ({ children, ...props }) {
          return (
            <a
              href={props.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline hover:text-bittersweet"
            >
              {children}
            </a>
          );
        },
      }}
    >
      {project.mdString.parent}
    </ReactMarkdown>
  );
};
