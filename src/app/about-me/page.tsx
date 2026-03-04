"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutMePage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="w-full min-h-screen bg-[#050607] font-sans pb-10 overflow-hidden flex flex-col items-center">

            {/* SECTION 1 — HERO */}
            <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative w-full max-w-[1240px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-xl mx-auto lg:mx-0 z-10"
                    >
                        <h1 className="text-[44px] md:text-[56px] lg:text-[68px] font-semibold tracking-tight leading-[1.1] text-white mb-8">
                            Designing Interfaces That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] via-[#3333ff] to-[#00ffcc]">Feel Effortless</span>
                        </h1>
                        <p className="text-[#888888] text-[17px] md:text-[19px] leading-[1.8] font-light mb-6">
                            I’m a UI/UX designer focused on creating modern, intuitive, and high-performing digital products. Over the past few years I’ve collaborated with startups, SaaS companies, and entrepreneurs to design interfaces that not only look great, but also solve real user problems.
                        </p>
                        <p className="text-[#888888] text-[17px] md:text-[19px] leading-[1.8] font-light mb-12">
                            My work focuses on clarity, usability, and scalable design systems, helping products move from idea to polished experience.
                        </p>
                        <Link href="/my-portfolio">
                            <button className="bg-gradient-to-r from-[#ff00cc] via-[#3333ff] to-[#00ffcc] animate-gradient text-white border border-white/20 rounded-[48px] px-9 py-4 text-base md:text-lg font-semibold transition-all shadow-[0_0_20px_rgba(255,0,204,0.3)] hover:shadow-[0_0_30px_rgba(0,255,204,0.5)] hover:scale-105 tracking-wide cursor-pointer">
                                View My Work
                            </button>
                        </Link>
                    </motion.div>

                    {/* Right Column: Visual Composition */}
                    <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center lg:justify-end xl:pr-10">
                        {/* Background Blur */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-[#ff00cc]/15 to-[#00ffcc]/15 blur-[120px] rounded-full" />
                        </div>

                        {/* Floating elements */}
                        <div className="relative w-full h-full max-w-[500px]">
                            {/* Card 1 */}
                            <motion.div
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute z-10 w-[220px] md:w-[260px] h-[280px] md:h-[320px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-[40px] md:rounded-[48px] backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col p-6 space-y-5 right-[5%] top-[10%]"
                            >
                                <div className="w-full h-28 md:h-36 rounded-[24px] md:rounded-[32px] bg-white/5" />
                                <div className="w-3/4 h-3 md:h-4 rounded-full bg-white/10" />
                                <div className="w-1/2 h-3 md:h-4 rounded-full bg-white/10" />
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                animate={{ y: [15, -15, 15] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute z-20 w-[240px] md:w-[280px] h-[200px] md:h-[220px] bg-gradient-to-tr from-[#00ffcc]/[0.15] to-[#3333ff]/[0.15] border border-[#00ffcc]/20 rounded-[40px] md:rounded-[48px] backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col p-6 space-y-4 left-[2%] bottom-[15%]"
                            >
                                <div className="flex items-center space-x-4 mb-2">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#ff00cc] to-[#3333ff]" />
                                    <div className="flex-1 space-y-2">
                                        <div className="w-full h-2 md:h-3 rounded-full bg-white/20" />
                                        <div className="w-2/3 h-2 md:h-3 rounded-full bg-white/10" />
                                    </div>
                                </div>
                                <div className="w-full h-20 md:h-24 rounded-[20px] md:rounded-[24px] bg-white/5" />
                            </motion.div>

                            {/* Accent Glow Shape */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
                                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[20%] left-[10%] w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-[#ff00cc] to-[#00ffcc] opacity-30 blur-[20px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1.5 — CLIENT TESTIMONIALS */}
            <section className="py-24 px-6 relative w-full flex flex-col items-center">
                <div className="max-w-[1240px] w-full z-10">
                    <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8 }}
                            className="text-[32px] md:text-[42px] font-semibold text-white tracking-tight mb-4"
                        >
                            Client Testimonials
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-[#888888] text-[16px] md:text-[18px] font-light max-w-[600px]"
                        >
                            A few words from people I’ve worked with across SaaS, mobile apps, and landing pages.
                        </motion.p>
                    </div>

                    <div className="relative group">
                        {/* Custom Slider Container */}
                        <div
                            id="testimonials-slider"
                            className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-10 hide-scrollbar scroll-smooth"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <style dangerouslySetInnerHTML={{
                                __html: `
                                #testimonials-slider::-webkit-scrollbar { display: none; }
                            `}} />

                            {[
                                {
                                    quote: "“Outstanding work from start to finish. The UI is clean, modern, and incredibly easy to use. Communication was fast and professional.”",
                                    name: "Lucas M.",
                                    role: "Founder — Clicknland",
                                    tag: "Landing Page UI"
                                },
                                {
                                    quote: "“He quickly understood the product and delivered a polished dashboard design with great hierarchy and spacing. Highly recommended.”",
                                    name: "Siavash Z.",
                                    role: "Product Owner — SaaS Platform",
                                    tag: "SaaS Dashboard"
                                },
                                {
                                    quote: "“Very strong UX thinking. He improved the flow, reduced friction, and the final UI looks premium. Would definitely work again.”",
                                    name: "Nina K.",
                                    role: "Mobile App Team Lead",
                                    tag: "Mobile App UX/UI"
                                },
                                {
                                    quote: "“Pixel-perfect design and great attention to detail. The final Figma file was well-structured and easy for developers to implement.”",
                                    name: "Daniel R.",
                                    role: "CTO — Startup Studio",
                                    tag: "Design System"
                                },
                                {
                                    quote: "“Fast delivery, modern aesthetic, and a clear design approach. He added value beyond the initial scope with great suggestions.”",
                                    name: "Amelia S.",
                                    role: "Marketing Lead — DTC Brand",
                                    tag: "Website UI"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="min-w-[85vw] md:min-w-[calc(50%-16px)] snap-center bg-[#0E1117] border border-white/[0.04] p-8 md:p-12 rounded-[40px] md:rounded-[48px] shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/[0.08] transition-all duration-500 flex flex-col relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-bl from-[#4FD1FF]/[0.03] to-transparent rounded-full blur-[50px] pointer-events-none" />

                                    <div className="text-[#4FD1FF] text-4xl font-serif leading-none mb-4 opacity-40">"</div>
                                    <p className="text-[#E0E0E0] text-[17px] md:text-[19px] leading-relaxed font-light mb-10 flex-grow relative z-10">
                                        {item.quote}
                                    </p>

                                    <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 border-t border-white/[0.05] pt-6 mt-auto relative z-10">
                                        <div>
                                            <h4 className="text-white font-semibold text-[17px] mb-1">{item.name}</h4>
                                            <p className="text-[#888888] text-[14px]">{item.role}</p>
                                        </div>
                                        <div className="inline-flex items-center self-start sm:self-auto px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-[#A0A0A0] text-[13px] font-medium tracking-wide">
                                            {item.tag}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 hidden md:flex justify-between pointer-events-none px-[-20px] w-[calc(100%+40px)] -ml-[20px]">
                            <button
                                onClick={() => {
                                    const slider = document.getElementById('testimonials-slider');
                                    if (slider) slider.scrollBy({ left: -slider.offsetWidth / 2, behavior: 'smooth' });
                                }}
                                className="w-12 h-12 rounded-full bg-[#1A1F29] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#252B36] hover:scale-105 transition-all shadow-xl pointer-events-auto backdrop-blur-md"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                            <button
                                onClick={() => {
                                    const slider = document.getElementById('testimonials-slider');
                                    if (slider) slider.scrollBy({ left: slider.offsetWidth / 2, behavior: 'smooth' });
                                }}
                                className="w-12 h-12 rounded-full bg-[#1A1F29] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#252B36] hover:scale-105 transition-all shadow-xl pointer-events-auto backdrop-blur-md"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — WHO I AM */}
            <section className="py-24 md:py-32 px-6 relative w-full flex justify-center">
                <div className="max-w-[800px] text-center w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-[36px] md:text-[48px] font-semibold text-white tracking-tight mb-12"
                    >
                        Who I Am
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 text-[#888888] text-[17px] md:text-[20px] leading-[1.9] font-light"
                    >
                        <p>I’m a UI/UX designer passionate about building digital products that combine aesthetics with functionality.</p>
                        <p>My expertise includes SaaS dashboards, mobile applications, landing pages, and product interfaces. I enjoy transforming complex ideas into simple and elegant user experiences.</p>
                        <p>My design process starts with understanding the user first, then crafting clean interfaces that guide people naturally through the product.</p>
                        <p>Good design should not only look beautiful — it should also make users feel confident and comfortable while using a product.</p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3 — SKILLS */}
            <section className="py-24 md:py-32 px-6 relative w-full flex justify-center bg-[#07090b]/50">
                <div className="absolute inset-0 bg-[#4FD1FF]/[0.015] pointer-events-none" />
                <div className="max-w-[1240px] w-full z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {/* Card 1 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }} className="bg-[#0E1117] border border-white/[0.03] p-10 md:p-14 rounded-[48px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:border-white/[0.08] hover:-translate-y-2 transition-all duration-500 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-2xl md:text-[28px] font-semibold text-white mb-5 relative z-10">UI Design</h3>
                            <p className="text-[#888888] text-[17px] md:text-[19px] leading-relaxed font-light relative z-10">Creating visually polished interfaces with strong hierarchy, spacing, and modern typography.</p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }} className="bg-[#0E1117] border border-white/[0.03] p-10 md:p-14 rounded-[48px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:border-white/[0.08] hover:-translate-y-2 transition-all duration-500 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ff00cc]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-2xl md:text-[28px] font-semibold text-white mb-5 relative z-10">UX Thinking</h3>
                            <p className="text-[#888888] text-[17px] md:text-[19px] leading-relaxed font-light relative z-10">Designing intuitive user flows and interactions that feel natural and effortless.</p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }} className="bg-[#0E1117] border border-white/[0.03] p-10 md:p-14 rounded-[48px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:border-white/[0.08] hover:-translate-y-2 transition-all duration-500 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#3333ff]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-2xl md:text-[28px] font-semibold text-white mb-5 relative z-10">Product Design</h3>
                            <p className="text-[#888888] text-[17px] md:text-[19px] leading-relaxed font-light relative z-10">Turning product ideas into scalable design systems and functional interfaces.</p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }} className="bg-[#0E1117] border border-white/[0.03] p-10 md:p-14 rounded-[48px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:border-white/[0.08] hover:-translate-y-2 transition-all duration-500 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-2xl md:text-[28px] font-semibold text-white mb-5 relative z-10">SaaS & Dashboard Design</h3>
                            <p className="text-[#888888] text-[17px] md:text-[19px] leading-relaxed font-light relative z-10">Specialized in designing complex dashboards and data-driven product interfaces.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 4 — DESIGN PHILOSOPHY */}
            <section className="py-24 md:py-40 px-6 relative max-w-[1240px] mx-auto w-full z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[36px] md:text-[48px] font-semibold tracking-tight text-white mb-10">
                            My Design Philosophy
                        </h2>
                        <div className="space-y-8 text-[#888888] text-[17px] md:text-[19px] leading-[1.8] font-light">
                            <p>Great design sits at the intersection of clarity, usability, and emotion.</p>
                            <p>I believe the best interfaces are the ones users don’t have to think about. Every layout, button, and interaction should guide the user naturally toward their goal.</p>
                            <p>By combining thoughtful UX decisions with modern visual design, I aim to create digital products that feel both powerful and effortless.</p>
                        </div>
                    </motion.div>

                    {/* Right Column: Layered Cards Visual */}
                    <div className="relative h-[480px] md:h-[550px] w-full flex items-center justify-center">
                        {/* Background Blur */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[300px] h-[300px] bg-[#4FD1FF]/[0.08] blur-[100px] rounded-full" />
                        </div>

                        <div className="relative w-full max-w-[400px] h-[450px]">
                            {/* Back card */}
                            <motion.div
                                initial={{ rotate: 0, x: 0, y: 0, scale: 0.9 }}
                                whileInView={{ rotate: -8, x: -35, y: 35, scale: 0.9 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                                className="absolute inset-0 m-auto w-[280px] h-[360px] md:w-[300px] md:h-[380px] bg-[#11141A] border border-white/[0.03] rounded-[48px] shadow-xl"
                            />
                            {/* Middle card */}
                            <motion.div
                                initial={{ rotate: 0, x: 0, y: 0, scale: 0.95 }}
                                whileInView={{ rotate: -4, x: -15, y: 15, scale: 0.95 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, type: "spring", bounce: 0.3, delay: 0.1 }}
                                className="absolute inset-0 m-auto w-[300px] h-[380px] md:w-[320px] md:h-[400px] bg-[#151921] border border-white/[0.05] rounded-[48px] backdrop-blur-sm shadow-2xl"
                            />
                            {/* Front card */}
                            <motion.div
                                initial={{ rotate: 0, x: 0, y: 0, scale: 1 }}
                                whileInView={{ rotate: 6, x: 25, y: -20, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, type: "spring", bounce: 0.3, delay: 0.2 }}
                                className="absolute inset-0 m-auto w-[320px] h-[400px] md:w-[340px] md:h-[420px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] rounded-[48px] backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col p-8 md:p-10 space-y-6"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#4FD1FF]/20 flex items-center justify-center mb-4">
                                    <div className="w-8 h-8 rounded-full bg-[#4FD1FF]" />
                                </div>
                                <div className="space-y-4">
                                    <div className="w-full h-4 rounded-full bg-white/20" />
                                    <div className="w-5/6 h-4 rounded-full bg-white/10" />
                                    <div className="w-4/6 h-4 rounded-full bg-white/10" />
                                </div>
                                <div className="mt-auto w-full h-24 rounded-[32px] bg-white/5 border border-white/5" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 — FINAL CTA */}
            <section className="py-24 md:py-32 px-6 relative w-full flex justify-center mb-10 w-full overflow-hidden">
                <div className="max-w-[1000px] w-full text-center bg-[#0d1016] border border-white/[0.04] p-16 md:p-24 rounded-[48px] relative shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-10 group overflow-hidden">
                    {/* Animated Glow behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-b from-[#ff00cc]/10 via-[#3333ff]/10 to-transparent blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-[36px] md:text-[48px] lg:text-[56px] font-semibold text-white tracking-tight mb-8 relative z-10"
                    >
                        Let’s Build Something Great
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[#888888] text-[18px] md:text-[20px] leading-[1.8] font-light mb-12 max-w-[600px] mx-auto relative z-10"
                    >
                        If you're building a digital product and need a designer who focuses on both aesthetics and usability, I’d love to collaborate.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10"
                    >
                        <Link href="/contact">
                            <button className="bg-gradient-to-r from-[#ff00cc] via-[#3333ff] to-[#00ffcc] animate-gradient text-white border border-white/20 rounded-[48px] px-12 py-5 text-lg font-bold transition-all shadow-[0_0_20px_rgba(255,0,204,0.3)] hover:shadow-[0_0_30px_rgba(0,255,204,0.6)] hover:scale-105 tracking-wide cursor-pointer">
                                Start a Project
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
