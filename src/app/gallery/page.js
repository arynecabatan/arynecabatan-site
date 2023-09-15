import { GalleryContent } from "@/components/gallery/GalleryContent";
import { GalleryHeader } from "@/components/gallery/GalleryHeader";
import { GalleryProvider } from "@/libs/context";
import { getAllLogo, getAllPosters } from "@/libs/notion";

export const metadata = {
  title: `Gallery`,
  alternates: {
    canonical: "/gallery",
  },
};

export default async function GalleryPage() {
  const posterList = await getAllPosters();
  const logoList = await getAllLogo();

  return (
    <GalleryProvider>
      <div className="h-full max-w-[1440px] w-full px-3 sm:px-4 pt-24 pb-16 flex flex-col">
        <GalleryHeader />
        <GalleryContent posterList={posterList} logoList={logoList} />
      </div>
    </GalleryProvider>
  );
}
