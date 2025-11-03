"use client";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="border-t border-purple-700/40 text-gray-300 py-8 mt-10">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
          <h2 className="text-xl font-semibold">Muhammad Afdal Rafi</h2>

          <div className="flex space-x-6 text-2xl">
            <Link
              href="mailto:afdalrafi660@mail.com"
              className="hover:text-orange-500 transition duration-300 hover:scale-125"
            >
              <FaEnvelope />
            </Link>

            <Link
              href="https://github.com/afdalrafi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition duration-300 hover:scale-125"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://linkedin.com/in/afdalrafi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition duration-300 hover:scale-125"
            >
              <FaLinkedin />
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            © {new Date().getFullYear()} Muhammad Afdal Rafi. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
