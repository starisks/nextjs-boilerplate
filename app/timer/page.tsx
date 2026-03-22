"use client";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Cube Timer Online",
  description: "Fast cube timer with scramble generator and stats.",
};

export default function TimerPage() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [ready, setReady] = useState(false);
  const [solves, setSolves] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("solves");
    if (saved) setSolves(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("solves", JSON.stringify(solves));
  }, [solves]);

  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => setTime(t => t + 10), 10);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    const down = (e: any) => {
      if (e.code === "Space") {
        e.preventDefault();
        if (!running) setReady(true);
        else stop();
      }
    };

    const up = (e: any) => {
      if (e.code === "Space") {
        e.preventDefault();
        if (ready && !running) start();
        setReady(false);
      }
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [running, ready]);

  function start() {
    setTime(0);
    setRunning(true);
  }

  function stop() {
    setRunning(false);
    setSolves([time, ...solves]);
  }

  function avg(n: number) {
    if (solves.length < n) return "-";
    return (
      solves.slice(0, n).reduce((a, b) => a + b, 0) / n / 1000
    ).toFixed(2);
  }

  return (
    <main className="flex flex-col items-center p-10 gap-6">
      <div className={`text-7xl font-mono ${ready && "text-green-500"}`}>
        {(time / 1000).toFixed(2)}
      </div>

      <p>Hold SPACE → release to start → press to stop</p>

      <div className="flex gap-6">
        <div>Ao5: {avg(5)}</div>
        <div>Ao12: {avg(12)}</div>
      </div>
    </main>
  );
}
