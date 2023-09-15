import { ProjectPageContent } from "@/components/project/ProjectPageContent";
import { ProjectPageHeader } from "@/components/project/ProjectPageHeader";
import { config } from "@/libs/config";
import { getAllProjectList, getSingleProjectBySlug } from "@/libs/notion";

export const dynamicParams = false;
export const revalidate = 60;

export async function generateMetadata({ params }) {
  const post = await getSingleProjectBySlug(params.slug);
  const postHead = post.metadata;

  return {
    title: `${postHead.title}`,
    description: `${postHead.description}`,
    alternates: {
      canonical: `${config.siteUrl}/projects/${postHead.slug}`,
    },
    openGraph: {
      title: postHead.title,
      description: postHead.description,
      url: config.siteUrl,
      siteName: config.siteName,
      images: [
        {
          url: postHead.cover,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: postHead.title,
      description: postHead.description,
      site: "arynecabatan",
      siteId: "2614346772",
      creator: "arynecabatan",
      creatorId: "2614346772",
      images: {
        default: postHead.cover,
      },
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllProjectList();
  const paths = posts.map((p) => ({ slug: p.slug }));
  return paths;
}

export default async function Project({ params }) {
  const project = await getSingleProjectBySlug(params.slug);
  const projectData = project.metadata;

  return (
    <div className="h-full max-w-[960px] w-full px-3 sm:px-4 flex flex-col gap-4 pt-16">
      <ProjectPageHeader projectData={projectData} />
      <ProjectPageContent project={project} />
    </div>
  );
}
