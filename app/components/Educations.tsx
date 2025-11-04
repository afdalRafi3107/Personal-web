// src/components/EducationSection.tsx
"use client";
import Lottie from "lottie-react";
import Laptop from "./icon/Laptop.json";
import { motion } from "framer-motion";
export default function Education() {
  return (
    <>
      {/* Glow Background Grid */}
      <div
        id="education"
        className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
      >
        <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
      <section className="relative bg-[#0b0c1a] text-white overflow-hidden py-15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,0,255,0.2)_0%,transparent_50%)]"></div>

        <div className="relative  flex flex-col gap-10 items-center container">
          <div className="w-full flex flex-row justify-center items-center">
            <div className="w-30 h-0.5 bg-orange-500"></div>
            <div className=" text-center text-sm text-white font-semibold px-2 py-2 bg-orange-500 rounded">
              EDUCATION
            </div>
            <div className="w-30 h-0.5 bg-orange-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Left Illustration */}
              <div className="flex justify-center">
                <Lottie
                  animationData={Laptop}
                  loop={true}
                  style={{ width: "100%" }}
                  rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                />
              </div>
            </motion.div>

            {/* list sekolah */}
            <div className="space-y-6 px-5">
              {[
                {
                  year: "2025",
                  major: "Fullsatck Developer Bootcamp",
                  place: "Dumbways Indonesia",
                },
                {
                  year: "2018 - 2024",
                  major: "Teknik Informatika",
                  place: "Institut Teknologi Padang",
                },
                {
                  year: "2015 - 2018",
                  major: "IPA",
                  place: "SMA Kartika I-5 Padang",
                },
              ].map((edu, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <div
                    key={i}
                    className="relative border border-purple-700/40 bg-gradient-to-r from-[#1a103d]/60 to-[#0b0c1a]/60 rounded-xl p-6 shadow-[0_0_20px_rgba(147,51,234,0.3)] backdrop-blur-md transition-transform hover:scale-[1.02]"
                  >
                    {/* Glow border line */}
                    <div className="absolute inset-0 rounded-xl border border-purple-500/20 blur-md"></div>

                    <div className="relative">
                      <p className="text-sm text-teal-400 mb-1">{edu.year}</p>
                      <h3 className="text-lg font-semibold text-white">
                        {edu.major}
                      </h3>
                      <p className="text-sm text-gray-400">{edu.place}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60 blur-sm"></div>
      </section>
    </>
  );
}
