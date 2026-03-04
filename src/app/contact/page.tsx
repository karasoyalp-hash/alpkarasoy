"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ContactPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="w-full min-h-screen bg-[#050607] font-sans pb-24 overflow-hidden flex flex-col items-center">

            {/* SECTION 1 — HERO */}
            <section className="w-full flex flex-col items-center justify-center pt-40 pb-16 px-6 relative max-w-[800px] mx-auto text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[44px] md:text-[56px] lg:text-[64px] font-semibold tracking-tight leading-[1.1] text-white mb-6"
                >
                    Let’s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] via-[#3333ff] to-[#00ffcc] pb-2">Together</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-[#888888] text-[17px] md:text-[19px] leading-[1.8] font-light max-w-[650px] mx-auto"
                >
                    Have a project in mind or looking for a designer to bring your product to life? Feel free to reach out. I’m always open to discussing new ideas, collaborations, and exciting opportunities.
                </motion.p>
            </section>

            {/* SECTION 2 — CONTACT FORM */}
            <section className="w-full px-6 relative z-10 flex justify-center pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full max-w-[700px] bg-[#0E1117] border border-white/[0.04] rounded-[48px] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden group"
                >
                    {/* Subtle hover gradient on card background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/[0.02] to-[#ff00cc]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="text-center mb-10 relative z-10">
                        <h2 className="text-[28px] md:text-[32px] font-semibold text-white mb-3 tracking-tight">Send a Message</h2>
                        <p className="text-[#888888] text-[16px] md:text-[17px] font-light">
                            Fill out the form below and I’ll get back to you as soon as possible.
                        </p>
                    </div>

                    <form className="space-y-6 md:space-y-7 relative z-10">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-[14px] font-medium text-white/70 ml-4">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your name"
                                className="w-full bg-[#151921] border border-white/[0.06] rounded-[24px] px-6 py-4 text-white placeholder:text-white/20 outline-none focus:border-[#4FD1FF]/40 focus:bg-[#1A1F29] focus:ring-1 focus:ring-[#4FD1FF]/40 transition-all duration-300 shadow-inner"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-[14px] font-medium text-white/70 ml-4">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email address"
                                className="w-full bg-[#151921] border border-white/[0.06] rounded-[24px] px-6 py-4 text-white placeholder:text-white/20 outline-none focus:border-[#4FD1FF]/40 focus:bg-[#1A1F29] focus:ring-1 focus:ring-[#4FD1FF]/40 transition-all duration-300 shadow-inner"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="block text-[14px] font-medium text-white/70 ml-4">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Project subject"
                                className="w-full bg-[#151921] border border-white/[0.06] rounded-[24px] px-6 py-4 text-white placeholder:text-white/20 outline-none focus:border-[#4FD1FF]/40 focus:bg-[#1A1F29] focus:ring-1 focus:ring-[#4FD1FF]/40 transition-all duration-300 shadow-inner"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-[14px] font-medium text-white/70 ml-4">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Tell me about your project"
                                className="w-full bg-[#151921] border border-white/[0.06] rounded-[24px] px-6 py-4 text-white placeholder:text-white/20 outline-none focus:border-[#4FD1FF]/40 focus:bg-[#1A1F29] focus:ring-1 focus:ring-[#4FD1FF]/40 transition-all duration-300 shadow-inner resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button
                                type="button"
                                className="w-full bg-gradient-to-r from-[#ff00cc] via-[#3333ff] to-[#00ffcc] animate-gradient text-white border border-white/20 rounded-[48px] px-8 py-4 md:py-5 text-[16px] font-semibold transition-all shadow-[0_0_20px_rgba(255,0,204,0.3)] hover:shadow-[0_0_30px_rgba(0,255,204,0.5)] hover:scale-[1.02] tracking-wide cursor-pointer flex justify-center"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>

                {/* Background Ambient Glows */}
                <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-[#ff00cc]/[0.05] blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] bg-[#00ffcc]/[0.05] blur-[120px] rounded-full pointer-events-none" />
            </section>
        </div>
    );
}
