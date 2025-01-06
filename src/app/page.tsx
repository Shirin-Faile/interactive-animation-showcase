"use client";

import { useRouter } from "next/navigation";
import Spline from "@splinetool/react-spline";

export default function LandingPage() {
  const router = useRouter();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Spline
        scene="https://prod.spline.design/dLu3y-E8wDdh5CMW/scene.splinecode"
        className="absolute inset-0 w-full h-full"
      />

      <div className="absolute bottom-8 w-full flex justify-center">
        <button
          onClick={() => router.push("/home")}
          className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Explore Now
        </button>
      </div>
    </section>
  );
}
