import Spline from "@splinetool/react-spline";

export default function HomePage() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100 overflow-auto md:overflow-hidden">

      <div className="flex items-center justify-center w-full md:w-1/2 h-3/4 md:h-full">
        <Spline
          scene="https://prod.spline.design/hTxG0a8FpW2as4wZ/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-auto text-center md:text-left p-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-4 sm:mb-6">
          A playful welcome to your world of interactivity!
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          This page invites you to explore the magic of interactive design. Meet
          our delightful gummy figures, who come alive as they follow your every
          move, adding a spark of wonder to your experience. Here, youll
          discover a showcase of animations that blend creativity with
          technology, promising a playful journey thats both engaging and
          inspiring. Let your curiosity guide you, and expect surprises at every
          click, scroll, and movement!
        </p>
      </div>
    </section>
  );
}





  