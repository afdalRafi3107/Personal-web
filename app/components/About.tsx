"use client";
import AnimatedContent from "./subcomponents/ScroolAnimated";
export default function About() {
  return (
    <section
      id="about"
      className="about flex flex-row justify-between gap-2 py-15 items-center"
    >
      <div className="flex flex-col gap-3 w-full">
        <h2 className="text-2xl text-green-400 font-bold">WHO I AM?</h2>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <p className="text-justify">
            My name is Muhammad Afdal Rafi. I am a Full Stack Developer who has
            just begun my journey in web development. I have a strong passion
            for learning and a great desire to keep improving. I enjoy exploring
            new technologies, understanding how systems work from frontend to
            backend, and continuously enhancing my skills every day. I believe
            that with commitment and consistency, I can grow into a reliable
            developer and make a meaningful contribution to every project I work
            on.
          </p>
        </AnimatedContent>
      </div>
      <div className="hidden md:block">
        <div className=" flex flex-row items-center justify-center w-fit rotate-90">
          <div className=" text-white px-2 py-2 w-fit rounded font-bold text-sm nptransform whitespace-nowrap shadow-xl bg-orange-500">
            ABOUT ME
          </div>

          <div className="w-30 h-0.5 mt-1 bg-orange-500"></div>
        </div>
      </div>
    </section>
  );
}
