"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let i: any;
    if (running) {
      i = setInterval(() => setTime(t => t + 10), 10);
    }
    return () => clearInterval(i);
  }, [running]);

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-6xl font-mono">
        {(time / 1000).toFixed(2)}
      </h1>

      <button
        onClick={() => setRunning(!running)}
        className="mt-6 px-6 py-3 bg-white text-black rounded-xl"
      >
        {running ? "Stop" : "Start"}
      </button>
    </div>
  );
}
