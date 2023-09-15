"use client";
import { useState } from "react";

export const SpoilerText = ({ text }) => {
  const [showMoreText, setShowMoreText] = useState(false);
  return (
    <div className="max-w-[960px] py-8">
      <small className="text-spacecadet/75 dark:text-culturedwhite/50">
        {showMoreText ? `${text} ` : `${text.substring(0, 280)}... `}
        <button
          className="font-medium text-sizzlingred dark:text-tartorange"
          onClick={() => setShowMoreText(!showMoreText)}
        >
          {showMoreText ? "Show less" : "Show more"}
        </button>
      </small>
    </div>
  );
};
