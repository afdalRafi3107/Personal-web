"use client";
import Lottie from "lottie-react";
import Dot from "./icon/GreenDot.json";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div id="hero" className="relative overflow-hidden">
        {/* efek cahaya di belakang */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(128,0,255,0.2)_0%,transparent_70%)]"></div>

        <nav className="relative flex flex-row w-full py-5 justify-between bg-none-transparent items-center ">
          <h1 className="text-3xl font-bold text-orange-400">AFDAL.R</h1>
          <div className="flex flex-row gap-15">
            <a
              href="#about"
              className="text-md hover:text-orange-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#education"
              className="text-md hover:text-orange-400 transition-colors duration-300"
            >
              Education
            </a>
            <a
              href="#about"
              className="text-md hover:text-orange-400 transition-colors duration-300"
            >
              About
            </a>
          </div>
        </nav>

        {/* konten */}
        <div className="relative flex flex-col md:flex-row gap-6  justify-between w-full py-20">
          {/* sisi kiri */}
          <div className="w-full md:w-1/2 flex flex-col gap-2 items-left justify-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hello, This is{" "}
              <span className="text-orange-400">Muhammad Afdal Rafi</span>, I'm
              a <span className="text-green-400">Full Stack Developer</span>.
            </h1>
            <h3 className="text-green-400  flex flex-row items-center gap-1 font-bold">
              <Lottie
                animationData={Dot}
                loop={true}
                style={{ width: "40px", height: "40px" }}
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              />
              <span>Open to Work</span>
            </h3>
            {/* social media */}
            <div className="flex flex-row gap-6 w-full px-2">
              {/* git */}
              <Link
                href="https://github.com/afdalRafi3107"
                target="_blank"
                rel="noopener noreferrer"
                className="duration-300 text-orange-500 text-3xl hover:scale-125 hover:text-orange-600 transition-colors"
              >
                <FaGithub />
              </Link>
              {/* linkedin */}
              <Link
                href="www.linkedin.com/in/mafdalrafi  "
                target="_blank"
                rel="noopener noreferrer"
                className="duration-300 text-orange-500 text-3xl hover:scale-125 hover:text-orange-600 transition-colors"
              >
                <FaLinkedin />
              </Link>

              {/* email */}
              <Link
                href="https://github.com/afdalRafi3107"
                target="_blank"
                rel="noopener noreferrer"
                className="duration-300 text-orange-500 text-3xl hover:scale-125 hover:text-orange-600 transition-colors"
              >
                <FaEnvelope />
              </Link>
            </div>
          </div>
          {/* kanan */}
          <div className="w-ful md:w-1/2 flex justify-center items-center">
            <img
              src="/img/Profile.png"
              alt="Hero Illustration"
              className="w-[300px] rounded-2xl max-w-md mx-auto mt-10 md:mt-0 drop-shadow-[0_0_20px_rgba(147,51,234,0.5)]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
