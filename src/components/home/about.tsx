"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
    { name: "Design System", rotate: -6, type: "dark", y: 0, z: 12 },
    { name: "Prototype", rotate: 8, type: "green", y: -20, z: 20 },
    { name: "Website Design", rotate: -4, type: "dark", y: -5, z: 15 },
    { name: "Mobile App Design", rotate: 5, type: "green", y: -25, z: 25 },
    { name: "Illustration", rotate: -8, type: "green", y: -10, z: 18 },
    { name: "Brand Identity", rotate: 4, type: "dark", y: 0, z: 10 },
    { name: "UX/UI Design", rotate: -5, type: "dark", y: -15, z: 22 },
    { name: "Dashboard", rotate: 7, type: "green", y: -5, z: 16 },
    { name: "Product Design", rotate: -3, type: "green", y: -20, z: 24 },
    { name: "Landing Page", rotate: 6, type: "dark", y: 0, z: 14 },
    { name: "UI Design", rotate: -7, type: "dark", y: -10, z: 21 },
    { name: "Wireframe Design", rotate: 5, type: "dark", y: -5, z: 13 },
];

export function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-50px" });

    return (
        <section id="about" className="w-full min-h-screen shrink-0 snap-start flex flex-col items-center justify-center relative bg-transparent z-10 py-16 overflow-hidden">
            {/* Subtle Background Glows matching the overall theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4FD1FF]/[0.03] blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center z-10 relative mt-4">

                {/* Texts */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-[40px] md:text-[50px] lg:text-[72px] font-bold text-[#A1A1AA] mb-4 text-center tracking-tight"
                >
                    Who Am I ?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="text-[#888888] text-[16px] md:text-[20px] max-w-[700px] text-center leading-[1.8] font-light mb-[100px]"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1FF] to-[#0099ff] drop-shadow-[0_0_15px_rgba(79,209,255,0.4)] font-bold text-[18px] md:text-[22px]">I&apos;m Alp,</span> a UI/UX designer with 5+ years of experience. I specialize in designing web and mobile apps, dashboards, SaaS platforms, and e-commerce solutions.
                </motion.p>

                {/* Landing Ground & Skills */}
                <div ref={containerRef} className="w-full max-w-[900px] relative flex flex-wrap justify-center content-end items-end gap-x-1 md:gap-x-3 mt-4" style={{ paddingBottom: '2px' }}>

                    {/* Base Line / Landing Ground */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

                    {skills.map((skill, index) => {
                        const isGreen = skill.type === "green";
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ y: -600, opacity: 0, rotate: skill.rotate - 15 }}
                                animate={isInView ? { y: skill.y, opacity: 1, rotate: skill.rotate } : { y: -600, opacity: 0, rotate: skill.rotate - 15 }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.5,
                                    duration: 0.8,
                                    delay: 0.2 + (index * 0.05) // Faster staggered drop effect
                                }}
                                style={{ zIndex: skill.z }}
                                className={`
                  px-5 py-3 md:px-7 md:py-4 rounded-[50px] font-medium text-[14px] md:text-[16px] whitespace-nowrap 
                  mx-[-6px] my-[-8px] md:mx-[-10px] md:my-[-12px] shadow-2xl relative select-none
                  cursor-default hover:scale-105 transition-transform duration-300
                  ${isGreen
                                        ? 'bg-[#4FD1FF] text-black shadow-[0_4px_30px_rgba(79,209,255,0.25)] border border-[#4FD1FF]/30'
                                        : 'bg-[#18181B] text-[#EEEEEE] shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-white/10'
                                    }
                `}
                            >
                                {skill.name}
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
}
