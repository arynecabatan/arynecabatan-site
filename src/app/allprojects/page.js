import { AllProjectHeader } from "@/components/allprojects/AllProjectHeader";
import { AllProjectList } from "@/components/allprojects/AllProjectList";
import { getAllProjectList } from "@/libs/notion";

export default async function AllProjectPage() {
  const projectList = await getAllProjectList();
  return (
    <div className="h-full w-full px-3 sm:px-4 flex flex-col gap-16 items-center">
      <AllProjectHeader />
      <AllProjectList projectList={projectList} />
    </div>
  );
}
