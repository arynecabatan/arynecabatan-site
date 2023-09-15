import { getAllProjectList } from "@/libs/notion";

export default async function sitemap() {
  const allProjectList = await getAllProjectList();

  return [
    ...allProjectList.map((item) => ({
      url: `https://www.arynecabatan.com/project/${item.slug}`,
      lastModified: `${item.date}`,
    })),
  ];
}
