"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function NotFoundPage() {
  return (
    <section className="grid items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <Player className="max-w-[853px]" loop={true} play src={"/404.json"} />
        <Link href="/">
          <button className="ryne-button mt-3 flex items-center gap-3">
            <FiHome className="text-xl" /> Return Home
          </button>
        </Link>
      </div>
    </section>
  );
}
