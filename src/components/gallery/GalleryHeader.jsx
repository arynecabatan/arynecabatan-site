"use client";
import { config } from "@/libs/config";
import { GalleryContext, useGalleryContext } from "@/libs/context";

export const GalleryHeader = () => {
  const { galleryCategory, setGalleryCategory } =
    useGalleryContext(GalleryContext);

  return (
    <section>
      <div className="justify-start flex gap-2 flex-wrap">
        {config.galleryCategory.map((item) => {
          return (
            <button
              key={item.name}
              onClick={() => setGalleryCategory(item.name)}
              className={`py-2 px-3 md:px-5 text-sm ${
                galleryCategory === item.name
                  ? `bg-spacecadet/5 dark:bg-culturedwhite/5 text-sizzlingred dark:text-tartorange rounded-full font-medium`
                  : "text-spacecadet/50 dark:text-culturedwhite/50"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </section>
  );
};
