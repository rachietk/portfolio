import React from "react";
import Container from "./Container";

function Footer() {
  return (
    <footer className="py-6 mb-8">
      <Container>
        <div className="text-gray-400 font-figtree border-t border-[#27272a] tracking-wider pt-4 flex flex-col items-start">
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved</p>
          <p className="text-sm pt-2">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="text-blue-400 font-medium">rachit</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
