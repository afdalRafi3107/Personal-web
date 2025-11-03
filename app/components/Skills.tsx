import LogoLoop from "./subcomponents/LogoLoop";
export default function Skills() {
  const imageLogos = [
    {
      src: "img/icon/exp.png",
      alt: "express",
    },
    {
      src: "img/icon/github.png",
      alt: "github",
    },
    {
      src: "img/icon/golang.png",
      alt: "golang",
    },
    {
      src: "img/icon/js.png",
      alt: "js",
    },
    {
      src: "img/icon/next.png",
      alt: "next",
    },
    {
      src: "img/icon/node.png",
      alt: "node",
    },
    {
      src: "img/icon/postgres.png",
      alt: "postgres",
    },
    {
      src: "img/icon/postman.png",
      alt: "postman",
    },
    {
      src: "img/icon/prisma.png",
      alt: "prisma",
    },
    {
      src: "img/icon/react.png",
      alt: "react",
    },
    {
      src: "img/icon/tailwind.png",
      alt: "tailwind",
    },
    {
      src: "img/icon/ts.png",
      alt: "ts",
    },
    {
      src: "img/icon/vue.png",
      alt: "vue",
    },
  ];
  return (
    <>
      <div
        id="education"
        className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
      >
        <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
      <section className="w-full flex flex-col gap-10 pt-15">
        {/* garis */}
        <div className=" relative flex flex-row w-full items-center justify-center">
          <div className="h-0.5 w-full max-w-30 bg-orange-500"></div>
          <div className=" text-white px-2 py-2 w-fit rounded font-bold text-sm nptransform whitespace-nowrap shadow-xl bg-orange-500">
            SKILLS
          </div>
          <div className="h-0.5 w-full max-w-30 bg-orange-500"></div>
        </div>
        <div>
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#0b0c1a"
            ariaLabel="Technology partners"
          />
        </div>
      </section>
    </>
  );
}
