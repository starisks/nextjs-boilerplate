"use client";
import { useState } from "react";

const moves = ["R","L","U","D","F","B"];
const mods = ["","'","2"];

function gen() {
  let res = [];
  let last = "";
  for (let i=0;i<20;i++){
    let m;
    do { m = moves[Math.random()*6|0]; } while (m===last);
    last=m;
    res.push(m + mods[Math.random()*3|0]);
  }
  return res.join(" ");
}

export default function ScramblePage(){
  const [s,setS]=useState(gen());
  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl mb-6">Scramble</h1>
      <div className="font-mono text-2xl mb-6">{s}</div>
      <button onClick={()=>setS(gen())} className="px-4 py-2 bg-white text-black rounded">
        New
      </button>
    </main>
  );
}
