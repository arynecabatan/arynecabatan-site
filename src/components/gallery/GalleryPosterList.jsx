"use client";
import { config } from "@/libs/config";
import { SpoilerText } from "../shared/SpoilerText";
import { useState } from "react";
import Image from "next/image";
import { GalleryCarousel } from "../shared/GalleryCarousel";
import { LightBox } from "../shared/LightBox";
import { LightBoxProvider } from "@/libs/context";

export const GalleryPosterList = ({ category, posterList }) => {
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
