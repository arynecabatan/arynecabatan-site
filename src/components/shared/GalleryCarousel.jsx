"use client";

import Image from "next/image";
import { useState } from "react";
import { LightBox } from "./LightBox";
import { LightBoxContext, useLightBoxContext } from "@/libs/context";

export const GalleryCarousel = ({ category, posterList }) => {
  const [isLoading, setLoading] = useState(true);
  //console.log(posterList);

  const { lightBox, setLightBox, currentImage, setCurrentImage } =
    useLightBoxContext(LightBoxContext);

  //console.log(currentImage);

  switch (category) {
    case "Poster":
      return (
        <>
          <LightBox posterList={posterList} />
          <div className='flex flex-wrap after:content-[""] after:grow-[999999999] w-full max-w-[1440px] min-w-auto gap-2'>
            {posterList &&
              posterList.map((posterName, index) => (
                <div
                  className="flex-grow relative overflow-hidden cursor-pointer"
                  key={index}
                >
                  <div
                    onClick={() => {
                      setLightBox(!lightBox);
                      setCurrentImage(posterName.idno);
                    }}
                    className="absolute h-[200px] w-full flex items-end transition-all bg-gradient-to-t from-black opacity-0 hover:opacity-90 ease-in-out z-20"
                  >
                    <small className="text-center text-culturedwhite mb-4 w-full h-auto">
                      {posterName.title}
                    </small>
                  </div>
                  <div className="z-19">
                    <Image
                      src={posterName.cover}
                      alt={posterName.title}
                      width={posterName.width}
                      height={posterName.height}
                      priority
                      className={`duration-150 ease-in-out w-full transition object-cover h-[200px] ${
                        isLoading
                          ? "scale-110 blur-2xl grayscale"
                          : "scale-100 blur-0 grayscale-0"
                      }`}
                      onLoadingComplete={() => setLoading(false)}
                    />
                  </div>
                </div>
              ))}
          </div>
        </>
      );
    case "Logofolio":
      return (
        <>
          <LightBox posterList={posterList} />
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 w-full">
            {posterList &&
              posterList.map((posterName, index) => (
                <div
                  className="flex-grow relative overflow-hidden cursor-pointer"
                  key={index}
                >
                  <div
                    onClick={() => {
                      setLightBox(!lightBox);
                      setCurrentImage(posterName.idno);
                    }}
                    className="absolute h-full w-full flex items-end transition-all bg-gradient-to-t from-black opacity-0 hover:opacity-90 ease-in-out z-20"
                  >
                    <small className="text-center text-culturedwhite mb-4 w-full h-auto">
                      {posterName.title}
                    </small>
                  </div>
                  <div className="z-20">
                    <Image
                      src={posterName.cover}
                      alt={posterName.title}
                      width={200}
                      height={200}
                      className={`duration-150 ease-in-out w-full transition object-cover ${
                        isLoading
                          ? "scale-110 blur-2xl grayscale"
                          : "scale-100 blur-0 grayscale-0"
                      }`}
                      onLoadingComplete={() => setLoading(false)}
                    />
                  </div>
                </div>
              ))}
          </div>
        </>
      );
  }
};
