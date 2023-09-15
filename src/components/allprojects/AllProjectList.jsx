"use client";
import Link from "next/link";
import { ProjectCard } from "../project/ProjectCard";

export const AllProjectList = ({ projectList }) => {
  return (
    <div className="w-full max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {projectList
        .sort((a, b) => a.idno - b.idno)
        .map((item) => {
          return (
            <Link
              href={`/project/${item.slug}`}
              rel="noopener noreferrer"
              key={item.id}
            >
              <ProjectCard project={item} />
            </Link>
          );
        })}
    </div>
  );
};
