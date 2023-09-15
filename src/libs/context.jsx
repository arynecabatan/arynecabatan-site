"use client";
import { createContext, useContext, useState } from "react";

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [galleryCategory, setGalleryCategory] = useState("Poster");
  return (
    <GalleryContext.Provider value={{ galleryCategory, setGalleryCategory }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  return useContext(GalleryContext);
};

export const LightBoxContext = createContext();

export const LightBoxProvider = ({ children }) => {
  const [lightBox, setLightBox] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  return (
    <LightBoxContext.Provider
      value={{ lightBox, setLightBox, currentImage, setCurrentImage }}
    >
      {children}
    </LightBoxContext.Provider>
  );
};

export const useLightBoxContext = () => {
  return useContext(LightBoxContext);
};
