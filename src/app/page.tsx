'use client';

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Welcome Animation Placeholder</h1>
      </div>
      <button
        onClick={() => router.push("/home")}
        className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
      >
        Explore Now
      </button>
    </section>
  );
}
