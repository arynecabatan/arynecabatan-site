"use client";
import { LightBoxContext, useLightBoxContext } from "@/libs/context";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";

export const LightBox = ({ posterList }) => {
  const { lightBox, setLightBox, currentImage, setCurrentImage } =
    useLightBoxContext(LightBoxContext);
  const posterData =
    posterList &&
    posterList
      .sort((a, b) => a.idno - b.idno)
      .find((item) => item.idno === currentImage);
  const [isLoading, setLoading] = useState(true);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  //console.log(posterData);

  const showNext = () => {
    if (currentImage >= posterList.length) {
      setCurrentImage(1);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const showPrev = () => {
    if (currentImage <= 1) {
      setCurrentImage(posterList.length);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowRight":
        return nextButtonRef.current.click();
      case "ArrowLeft":
        return prevButtonRef.current.click();
      case "Escape":
        return closeButtonRef.current.click();
    }
  };

  // const handleKeyDown = useCallback((event) => {
  //   switch (event.key) {
  //     case "ArrowRight":
  //       break;
  //     case "ArrowLeft":
  //       break;
  //     case "Escape":
  //       setSwitchBox("close");
  //       break;
  //     default:
  //       break;
  //   }
  // }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (lightBox) {
    return (
      <div
        className={`${
          !lightBox ? "hidden" : "block"
        } fixed h-screen w-screen bg-black/90 top-0 left-0 z-[1000]`}
      >
        <div className="grid items-center h-full relative">
          <div className="h-5/6 w-full grid place-items-center">
            <Image
              alt={posterData.title}
              src={posterData.fullres}
              width={posterData.width}
              height={posterData.height}
              priority
              placeholder="blur"
              blurDataURL={
                !posterData.blururl ? "/seo-image/blur.jpg" : posterData.blururl
              }
              className={`object-contain h-[80vh] ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              }`}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
          <button
            onClick={showNext}
            ref={nextButtonRef}
            className={`bg-black/10 h-10 w-10 absolute top-1/2 right-2 grid items-center justify-center rounded-lg shadow-sm z-50`}
          >
            <FiArrowRight className="text-culturedwhite w-6 h-6" />
          </button>
          <button
            onClick={showPrev}
            ref={prevButtonRef}
            className={`bg-black/10 h-10 w-10 absolute top-1/2 left-2 grid items-center justify-center rounded-lg shadow-sm z-50`}
          >
            <FiArrowLeft className="text-culturedwhite w-6 h-6" />
          </button>
          <div className="absolute bottom-0 py-6 grid place-items-center w-full">
            <button
              ref={closeButtonRef}
              onClick={() => {
                setLightBox(!lightBox);
              }}
              className={`bg-black/10 h-10 w-10 border-[1px] border-white rounded-full top-2 right-2 grid items-center justify-center shadow-sm z-50`}
            >
              <FiX className="text-culturedwhite w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    );
  }
};
