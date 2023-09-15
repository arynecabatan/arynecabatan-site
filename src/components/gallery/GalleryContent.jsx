"use client";
import { GalleryContext, useGalleryContext } from "@/libs/context";
import { useState } from "react";
import { GalleryPosterList } from "./GalleryPosterList";
import { GalleryLogofolioList } from "./GalleryLogofolioList";

export const GalleryContent = ({ posterList, logoList }) => {
  const { galleryCategory } = useGalleryContext(GalleryContext);

  switch (galleryCategory) {
    case "Poster":
      return (
        <GalleryPosterList category={galleryCategory} posterList={posterList} />
      );
    case "Logofolio":
    case "Poster":
      return (
        <GalleryLogofolioList
          category={galleryCategory}
          posterList={logoList}
        />
      );
    default:
      return <h3>Loading</h3>;
  }
};
