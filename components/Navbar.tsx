export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <h1 className="text-2xl font-bold">LastAI</h1>
      <a href="/wizard" className="bg-white text-black px-4 py-2 rounded hover:opacity-90 transition">
        Launch Wizard
      </a>
    </nav>
  );
}
