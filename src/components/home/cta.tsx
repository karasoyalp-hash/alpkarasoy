"use client"

import { getButtonClasses } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function CtaSection() {
    return (
        <section className="py-24 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-24 text-center relative overflow-hidden"
            >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
                        <span className="block text-primary-foreground/80 text-stroke">Ready to Start</span>
                        <span className="block">Your Next Project?</span>
                    </h2>
                    <p className="text-primary-foreground/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                        Let's work together to build something great. I'm currently available for freelance work and open to new opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="mailto:alp@example.com"
                            className={getButtonClasses("secondary", "lg", "w-full sm:w-auto text-lg font-bold shadow-xl hover:scale-105 transition-transform duration-300")}
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
