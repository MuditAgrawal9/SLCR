import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white w-full sticky top-0 z-10">
      <div className="flex p-1 items-center">
        <a href="#">
          <Image
            src="/Logo_edited.png"
            alt="SLCR Logo"
            width={220}
            height={50}
          />
        </a>
        <div className="flex-grow text-center">
          <h1 className="text-5xl font-bold text-blue-500">
            Smart Laboratory On Clean River
          </h1>
        </div>
      </div>

      <div className="mx-auto flex justify-between items-center bg-blue-500 text-white pl-10">
        <ul className="flex space-x-10 text-2xl p-3">
          <li>
            <Link
              href="/"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/activities"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Activities
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Event
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Data
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
