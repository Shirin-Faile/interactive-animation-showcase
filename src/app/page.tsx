export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Playful Pixels</h1>
      <p className="text-lg text-gray-700">
        Dive into a world of interactive and playful animations.
      </p>
      <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
        Explore Now
      </button>
    </section>
  );
}
