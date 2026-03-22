export default function Home() {
  return (
    <main className="p-10 max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-4">
        Cube Timer Online 🧊
      </h1>

      <p className="text-gray-400 mb-6">
        Free Rubik's Cube timer with scrambles, stats, and algorithm trainers.
      </p>

      <div className="flex justify-center gap-4">
        <a href="/timer" className="px-6 py-3 bg-white text-black rounded-xl">
          Start Timer
        </a>
      </div>
    </main>
  );
}
