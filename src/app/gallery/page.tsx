"use client";

import Spline from "@splinetool/react-spline";
import { useRouter } from "next/navigation";

export default function GalleryPage() {
  const router = useRouter();

  const handleCardClick = (cardName: string) => {
    if (cardName === "Keyboard - Card") {
      router.push("/keyboard");
    } else if (cardName === "Bee-Card") {
      router.push("/bee");
    } else if (cardName === "ShapeBlend - Card") {
      router.push("/shapeblend");
    }
  };

  return (
    <section className="h-screen bg-gray-100 flex items-center justify-center">
      <Spline
        scene="https://prod.spline.design/Il8TmxQ9Z2feztZm/scene.splinecode"
        onMouseDown={(event) => {
          const clickedObject = (event.target as HTMLDivElement).getAttribute('name');
          if (clickedObject) {
            handleCardClick(clickedObject);
          }
        }}
      />
    </section>
  );
}


