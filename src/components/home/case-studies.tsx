"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function CaseStudiesSection() {
    const projects = [
        { id: 1, name: "Digital Twin", image: "/images/digitalTwin.png" },
        { id: 2, name: "Sonique AI", image: "/images/sonıqueAI.png" },
        { id: 3, name: "Task Collaborate", image: "/images/TaskCollabrate.png" },
        { id: 4, name: "TheLifeCo", image: "/images/TheLifeCo.png" },
        { id: 5, name: "Veggie Fiesta", image: "/images/VeggieFiesta.png" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [direction, setDirection] = useState(0);
    useEffect(() => {
        // Auto-advancing is handled by `onAnimationEnd` on the image element now
    }, [currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="case-study" className="w-full min-h-screen shrink-0 snap-start py-24 flex items-center justify-center relative bg-transparent z-10">
            <div className="w-full max-w-[1200px] mx-auto px-6 h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Left Card */}
                <div
                    className="w-full lg:w-[55%] relative rounded-[30px] overflow-hidden bg-[#0E1117] border border-white/5 shadow-[0_0_40px_rgba(79,209,255,0.03)] aspect-[4/5] lg:aspect-square group"
                >
                    {/* subtle inside glow */}
                    <div className="absolute inset-0 rounded-[30px] border-[1px] border-[#4FD1FF]/10 pointer-events-none z-20"></div>

                    {/* Images */}
                    <div className="absolute inset-0 w-full h-full bg-[#10131A] card-container">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="w-full h-full absolute inset-0 pt-8 px-8"
                            >
                                <div className="relative w-full h-full overflow-hidden rounded-t-[16px]">
                                    {/* The image scrolls vertically using framer-motion */}
                                    <div className="w-full flex justify-center h-full relative" ref={(node) => {
                                        // A simple hack to force re-evaluation of layout on load if needed,
                                        // but Framer Motion handles it gracefully with `y: "-100%"` if wrapped properly.
                                    }}>
                                        <div
                                            className="absolute top-0 w-[440px] h-max animate-scroll-vertical"
                                            style={{
                                                animationDuration: '16s',
                                                animationPlayState: isHovered ? 'paused' : 'running'
                                            }}
                                            onAnimationEnd={(e) => {
                                                if (!isHovered && e.animationName === "scrollImage") {
                                                    handleNext();
                                                }
                                            }}
                                        >
                                            <img
                                                onMouseEnter={() => setIsHovered(true)}
                                                onMouseLeave={() => setIsHovered(false)}
                                                src={projects[currentIndex].image}
                                                alt={projects[currentIndex].name}
                                                className="w-full h-auto object-top cursor-pointer"
                                                draggable={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bottom Nav Bar (Blur Bar) */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] h-[64px] rounded-[50px] bg-black/60 backdrop-blur-[20px] border border-white/10 p-2 pl-6 flex items-center justify-between z-30 shadow-2xl">
                        {/* Left Nav Side */}
                        <div className="flex flex-col gap-1.5 justify-center">
                            <span className="text-white text-[15px] font-medium leading-none tracking-wide">
                                {projects[currentIndex].name}
                            </span>
                            <div className="flex items-center gap-[6px]">
                                {projects.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-[6px] rounded-full transition-all duration-300 ${idx === currentIndex ? "w-[32px] bg-[#4FD1FF] shadow-[0_0_10px_rgba(79,209,255,0.5)]" : "w-[32px] bg-white/15"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Nav Side: Buttons */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handlePrev}
                                className="w-[44px] h-[44px] rounded-full bg-black/40 hover:bg-[#4FD1FF]/20 flex items-center justify-center text-white/80 hover:text-[#4FD1FF] transition-all duration-300 backdrop-blur-md hover:-translate-y-[1px] border border-transparent hover:border-[#4FD1FF]/30"
                            >
                                <ArrowLeft size={20} strokeWidth={2} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-[44px] h-[44px] rounded-full bg-black/40 hover:bg-[#4FD1FF]/20 flex items-center justify-center text-white/80 hover:text-[#4FD1FF] transition-all duration-300 backdrop-blur-md hover:-translate-y-[1px] border border-transparent hover:border-[#4FD1FF]/30"
                            >
                                <ArrowRight size={20} strokeWidth={2} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-[45%] flex flex-col items-start text-left z-10">
                    <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white mb-6 leading-[1.1] tracking-[-0.02em]">
                        Product Thinking & <br className="hidden lg:block" />
                        System Design
                    </h2>

                    <p className="text-white/60 text-lg md:text-[19px] leading-[1.6] mb-10 max-w-xl font-light">
                        On projects, I don’t just design interfaces; I define the product logic and structure the user journey. I start by identifying the core problem and goals, then build the information architecture and flow design. By establishing a design system, I ensure consistency and scalability, and refine interactions during the prototyping phase. The process evolves continuously through testing, feedback, and iteration.
                    </p>

                    <button className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full bg-[#10131A] text-white font-medium border border-white/10 hover:border-[#4FD1FF]/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_30px_rgba(79,209,255,0.15)] overflow-hidden">
                        <span className="relative z-10 text-[15px] tracking-wide">Show All Project</span>
                        <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-[#4FD1FF]/20 flex items-center justify-center transition-colors duration-300 relative z-10">
                            <ArrowRight size={16} className="text-white/70 group-hover:text-[#4FD1FF] transition-colors" strokeWidth={2.5} />
                        </div>
                        {/* Subtle glow effect behind button */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#4FD1FF]/0 via-[#4FD1FF]/5 to-[#4FD1FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                </div>

            </div>
        </section>
    );
}
