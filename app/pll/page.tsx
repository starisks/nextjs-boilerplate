export const metadata = {
  title: "PLL Algorithms List",
  description: "Complete PLL algorithms for Rubik's Cube.",
};

export default function PLL(){
  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl mb-4">PLL Algorithms</h1>

      <p className="mb-4">
        PLL (Permutation of the Last Layer) is the final step in CFOP.
      </p>

      <ul className="space-y-2 font-mono">
        <li>Ua: R U' R U R U R U' R' U' R2</li>
        <li>Ub: R2 U R U R' U' R' U' R' U R'</li>
      </ul>
    </main>
  );
}
