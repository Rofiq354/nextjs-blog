import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center mx-auto justify-between max-w-2xl max-auto px-4 py-5 mt-0 sm:mt-5">
      <Link href="/" className="font-bold text-3xl">
        Ainur<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
