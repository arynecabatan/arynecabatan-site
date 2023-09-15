import { StackIcon } from "@/libs/config";
import Image from "next/image";
import Link from "next/link";
import { FiEye } from "react-icons/fi";

export const ProjectPageHeader = ({ projectData }) => {
  return (
    <div className="flex gap-3 flex-col md:flex-row-reverse md:gap-6 items-center mt-8">
      <Image
        src={projectData.cover}
        alt={"Ryne Design Image"}
        width="600"
        height="400"
        className="rounded-xl md:w-1/2"
      />
      <div className="text-center md:text-left w-full flex flex-col justify-center gap-2">
        <h1 className="text-4xl gradient-text">{projectData.title}</h1>
        <h4 className="font-normal">{projectData.subtitle}</h4>
        <span className="flex gap-2 text-spacecadet/40 dark:text-culturedwhite/40 justify-center md:justify-start text-lg">
          {projectData.stack.map((stack) => (
            <StackIcon key={stack.id} iconName={stack.name} />
          ))}
        </span>
        <div className="flex justify-center md:justify-start py-3">
          <Link
            href={projectData.url}
            target="_blank"
            className={`aryne-button w-fit my-2 text-spacecadet gap-2 items-center ${
              projectData.url !== "nourl" ? `flex` : `hidden`
            }`}
          >
            <FiEye className="text-culturedwhite" />
            <p className="text-culturedwhite text-sm">Live Preview</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
