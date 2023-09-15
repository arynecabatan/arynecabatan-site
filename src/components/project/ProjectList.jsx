"use client";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = ({ projectList }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {projectList
        .filter((item) => {
          return item.highlight === true;
        })
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

// sorts: [
//   {
//     property: "IDNo",
//     direction: "ascending",
//   },
// ],
