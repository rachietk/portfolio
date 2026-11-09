import React from "react";
import Container from "./Container";
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Social() {
  const socials = [
    {
      name: "Email Me",
      icon: <FaEnvelope />,
      link: "mailto:rachitkumar2953@gmail.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/rachitk29",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/rachitk29",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/rachitk29/",
    },
  ];

  return (
    <Container>
      <div className="pt-2 text-left">
        {/* Top border with text */}
        <p className="font-figtree text-sm text-gray-400 mb-4 border-t border-[#27272a] pt-4">
          Where to find me (<span className="text-white">digitally</span>) if you wish to
        </p>

        {/* Social Buttons */}
        <div className="flex flex-wrap gap-3 text-gray-400">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-1 text-gray-400 text-sm shadow hover:border-[#f3576c] transition"
            >
              {social.icon}
              {social.name}
            </a>
          ))}
        </div>
      </div>

      {/* Extra text + Instagram link */}
      <div className="mt-6 text-left border-t border-[#27272a] pt-4 font-figtree">
        <p className="text-sm text-gray-400 mb-2">
          <span>Capturing photographs</span> or scribbling a few poems...
        </p>

        <a
          href="https://www.instagram.com/rachitk.29/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-blue-400 hover:underline transform transition-transform duration-300 hover:scale-105"
        >
          click me to see
        </a>
      </div>
    </Container>
  );
}

export default Social;
