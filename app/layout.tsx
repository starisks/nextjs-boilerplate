import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "CubeWeb - Cube Timer & Algorithms",
  description: "Fast cube timer, scrambles, PLL/OLL algorithms and cubing tools.",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="flex gap-6 p-4 border-b border-gray-800">
          <Link href="/">Home</Link>
          <Link href="/timer">Timer</Link>
          <Link href="/scramble">Scramble</Link>
          <Link href="/algorithms">Algs</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
