"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen max-w-[1440px] w-full px-3 sm:px-4 flex flex-col justify-center gap-6 text-center items-center">
      <h2>Something went wrong!</h2>
      <button
        className="aryne-button"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
