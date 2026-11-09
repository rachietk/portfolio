import React from "react";
import Container from "./Container";
import js from "../assets/skills/javascript.svg";
import ts from "../assets/skills/typescript.svg";
import c from "../assets/skills/c.svg";
import cpp from "../assets/skills/cpp.svg";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import reactjs from "../assets/skills/reactjs.svg";
import tailwind from "../assets/skills/tailwind.svg";
import mongodb from "../assets/skills/mongodb.svg";
import git from "../assets/skills/git.svg";
import github from "../assets/skills/github2.svg";
import vscode from "../assets/skills/vscode.svg";
import vercel from "../assets/skills/vercel.svg";
import postman from "../assets/skills/postman.svg";
import mysql from "../assets/skills/mysql.svg";

const icons = {
    JavaScript: js,
    TypeScript: ts,
    C: c,
    "C++": cpp,
    HTML: html,
    CSS: css,
    React: reactjs,
    TailwindCSS: tailwind,
    MongoDB: mongodb,
    MySQL: mysql,
    Git: git,
    GitHub: github,
    "VS Code": vscode,
    Vercel: vercel,
    Postman: postman,
};

function Skills() {
    const skills = [
        {
            title: "Languages",
            items: ["C", "C++", "HTML", "CSS", "JavaScript", "TypeScript"],
        },
        {
            title: "Frameworks / Libraries",
            items: ["React", "TailwindCSS"],
        },
        {
            title: "Database",
            items: ["MySQL", "MongoDB"],
        },
        {
            title: "Developer Tools",
            items: ["Git", "GitHub", "VS Code", "Vercel", "Postman"],
        },
    ];

    return (
        <Container>
            <section className="py-4">
                <h1 className="font-doto font-bold tracking-wider text-[26px] leading-8 text-[#fafafa] border-t border-[#27272a] pt-3">
                    Skills{" "}
                    <span className="font-figtfree-mono text-sm text-[#404040] font-normal tracking-tight">
                    {/* which I use/know */}
                    which i use/know how to google it...
                    </span>
                </h1>

                <p className="font-figtree text-sm text-gray-400 mt-2 mb-6">
                    These are the technologies I’ve learned and worked with. This list is
                    constantly evolving as I continue to learn and grow as a developer.
                </p>

                {/* Skill Sections */}
                {skills.map((section, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-sm font-figtree font-medium text-gray-400 mb-4 uppercase tracking-wider">
                            {section.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {section.items.map((item, idx) => (
                                <button
                                    key={idx}
                                    className="flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs shadow transition hover:border-[#f3576c] focus:outline-none cursor-default"
                                >
                                    {icons[item] && (
                                        <img
                                            src={icons[item]}
                                            alt={item}
                                            className="h-4 w-4 object-contain"
                                        />
                                    )}
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </Container>
    );
}

export default Skills;
