"use client";
import { config } from "@/libs/config";
import { SpoilerText } from "../shared/SpoilerText";
import { GalleryCarousel } from "../shared/GalleryCarousel";
import { LightBoxProvider } from "@/libs/context";

export const GalleryLogofolioList = ({ category, posterList }) => {
  const categoryItem = config.galleryCategory.find(
    (item) => item.name == category
  );

  return (
    <div className="flex flex-col">
      <SpoilerText text={categoryItem.description} />
      <LightBoxProvider>
        <GalleryCarousel category={category} posterList={posterList} />
      </LightBoxProvider>
    </div>
  );
};
