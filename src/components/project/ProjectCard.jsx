"use client";

import Image from "next/image";

export const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="max-w-[600px] overflow-hidden rounded-xl">
        <Image
          src={project.cover}
          alt={project.title}
          className="rounded-2xl shadow-sm hover:bg-black hover:scale-105 transition duration-500 cursor-pointer"
          width={600}
          height={400}
        />
      </div>
      <div className="my-2 flex flex-col gap-0">
        <h4 className="text-spacecadet dark:text-culturedwhite">
          {project.title}
        </h4>
        <small className="text-gray-600 dark:text-gray-400 font-normal">
          {project.subtitle}
        </small>
      </div>
    </>
  );
};
