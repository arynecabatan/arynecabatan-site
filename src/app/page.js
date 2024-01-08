import { ProjectList } from "@/components/project/ProjectList";
import { BannerBox } from "@/components/shared/BannerBox";
import { getAllProjectList } from "@/libs/notion";
import Link from "next/link";

export const metadata = {
  title: `Projects | Aryne Cabatan`,
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const projectList = await getAllProjectList();

  return (
    <div className="h-full max-w-[1440px] w-full px-3 sm:px-4 pt-24 pb-16 flex flex-col">
      <BannerBox text={`👋 Hi! I am currently not accepting design work at the moment. Thank you.`} lastUpdate={`January 4, 2024`}/>
      <ProjectList projectList={projectList} />
      <div className="flex justify-center pt-36">
        <Link
          href="/allprojects"
          className="aryne-button text-culturedwhite dark:text-culturedwhite"
        >
          See all projects
        </Link>
      </div>
    </div>
  );
}
