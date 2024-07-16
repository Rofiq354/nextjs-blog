import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full bg-secondary relative flex items-center justify-evenly max-w-2xl max-auto px-4 py-5">
      <Link href="/" className="font-bold text-3xl">
        Ainur<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
