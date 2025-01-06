"use client";

import { useRouter } from "next/navigation";
import Spline from "@splinetool/react-spline";

export default function LandingPage() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <div className="relative w-full h-full">
        <Spline
          scene="https://prod.spline.design/dLu3y-E8wDdh5CMW/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <button
        onClick={() => router.push("/home")}
        className="absolute bottom-8 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
      >
        Explore Now
      </button>
    </section>
  );
}
