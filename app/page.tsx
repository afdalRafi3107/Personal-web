import Image from "next/image";
import Hero from "./components/Hero";

import About from "./components/About";
import Education from "./components/Educations";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-[#0b0c1a] px-4">
        <div className="w-full max-w-[70rem]">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
        </div>
      </main>
    </>
  );
}
