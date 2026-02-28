"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MousePointer2, Sparkles } from "lucide-react"

export function HeroSection() {
    return (
        <section className="h-screen shrink-0 snap-start flex flex-col items-center justify-center text-center px-4 relative pt-24 pb-20">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight max-w-4xl mb-12 leading-[1.1] text-white relative z-20 pointer-events-none mt-12"
            >
                Crafting Digital
                <br />
                Experiences
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl text-base md:text-lg text-gray-400 mb-12 leading-relaxed relative z-20 pointer-events-none"
            >
                I&apos;m a <span className="text-white">UI/UX designer</span> focused on creating functional, aesthetic, and<br className="hidden md:block" />
                conversion-driven digital experiences.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative z-20 mb-16"
            >
                <button className="bg-gradient-to-r from-[#ff00cc] via-[#3333ff] to-[#00ffcc] animate-gradient text-white border border-white/20 rounded-full px-7 py-3 text-sm md:text-base font-semibold transition-all shadow-[0_0_20px_rgba(255,0,204,0.4)] hover:shadow-[0_0_30px_rgba(0,255,204,0.6)] hover:scale-105 cursor-pointer tracking-wide">
                    View my Portfolio Project
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-6 relative z-20"
            >
                {/* Figma */}
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <Image src="/images/figmaicon.svg" alt="Figma" width={24} height={24} className="w-6 h-6 object-contain" />
                </div>
                {/* Xd */}
                <div className="w-14 h-14 rounded-full bg-[#470137] border border-[#ff61f6]/30 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <span className="text-[#ff61f6] font-bold text-xl tracking-tighter">Xd</span>
                </div>
                {/* Ps */}
                <div className="w-14 h-14 rounded-full bg-[#001E36] border border-[#31A8FF]/30 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <span className="text-[#31A8FF] font-bold text-xl tracking-tight">Ps</span>
                </div>
                {/* Cursor AI */}
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/20 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer group" title="Cursor AI">
                    <MousePointer2 className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                </div>
                {/* Antigravity AI */}
                <div className="w-14 h-14 rounded-full bg-white/5 border border-purple-500/30 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer group relative overflow-hidden" title="Antigravity">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Sparkles className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors relative z-10" />
                </div>
            </motion.div>
        </section>
    )
}
