import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white w-full">
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
          <h1 className="text-4xl font-bold text-blue-500">
            Smart Laboratory On Clean River
          </h1>
        </div>
      </div>

      <div className="mx-auto flex justify-between items-center bg-blue-500 text-white pl-10">
        <ul className="flex space-x-10 text-2xl p-3">
          <li>
            <a
              href="#"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Activities
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Event
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Data
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-black hover:underline hover:underline-offset-4"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
