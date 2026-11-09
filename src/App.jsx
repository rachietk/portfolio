import React from "react";
import Hero from "./components/Hero";
import Social from "./components/Social";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import WorkExperience from "./components/WorkExperience";
import { motion } from "framer-motion";
import "./index.css";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Social />
      <Skills />
      <WorkExperience />
      <Projects />
      <Blogs />
      <Footer />
    </motion.div>
  );
}

export default App;
