// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import profileImg from "../assets/profile.png";
import Container from "./Container";
import { LocateFixed } from "lucide-react";

const Hero = () => {
  const [time, setTime] = useState("");

  const getDeviceTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  useEffect(() => {
    setTime(getDeviceTime());
    const interval = setInterval(() => {
      setTime(getDeviceTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="mb-2 flex flex-col justify-start items-start pt-16 text-gray-400 font-sans bg-transparent"
    >
      <Container>
        {/* Top Time + Location Bar */}
        <div className="flex justify-between items-center text-gray-400 text-sm mb-4 w-full">
          <span>IN {time}</span>
          <span className="flex items-center gap-1">
            <LocateFixed size={14} />
            Meerut (UP), India
          </span>
        </div>

        {/* Profile + Social */}
        <div className="flex flex-col items-start text-left mb-2">
          <a
            href="https://github.com/rachitk29"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-20 h-20 rounded-full border-2 border-gray-500 shadow-md overflow-hidden select-none cursor-pointer"
          >
            <img
              src={profileImg}
              alt="Rachit"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </a>

          <a
            href="https://twitter.com/rachitk29"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold mt-3 cursor-pointer relative z-10"
          >
            @rachitk29
          </a>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-start text-left">
          <p className="font-figtree text-sm leading-relaxed text-gray-400 mt-2 mb-3">
            I'm <span className="text-white">Rachit</span>, a 20yo developer living in Meerut, India.
            I love to code and make (<span className="text-white">break</span>) things.
          </p>

          <p className="text-sm text-gray-400 mb-3">
            I love both <span className="text-white">Development</span> & <span className="text-white">Design</span>.
            So yes, I can make things look good and actually work.
            When I'm <span className="text-white">not busy</span>, you’ll usually find me watching movies or web shows,
            listening to music, playing cricket, or just catching up on some much needed sleep.
          </p>

          <p className="text-sm leading-relaxed text-gray-400 mb-2">
            okay let's be real i'm always chasing new things to learn, new problems to solve,
            and if I'm lucky maybe one day my parents will finally understand
            <span className="text-white"> what I actually do!</span>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
