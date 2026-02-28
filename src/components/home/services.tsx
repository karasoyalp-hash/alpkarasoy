"use client"

import { motion } from "framer-motion"

const SERVICES = [
    {
        id: "01",
        title: "Product UX Strategy",
        description: "I align business goals with user behavior by designing user flows, information architecture, and scalable product experiences.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4FD1FF]">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        )
    },
    {
        id: "02",
        title: "Mobile App Design",
        description: "I design intuitive and refined mobile interfaces focused on usability, performance, and user engagement.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4FD1FF]">
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                <path d="M12 18h.01" />
            </svg>
        )
    },
    {
        id: "03",
        title: "SaaS & Dashboard Design",
        description: "I build data-driven SaaS platforms and dashboard interfaces with clear hierarchy and conversion principles.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4FD1FF]">
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
        )
    },
    {
        id: "04",
        title: "Design Systems",
        description: "I develop scalable component systems and UI libraries for consistency and sustainable growth.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4FD1FF]">
                <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
            </svg>
        )
    },
    {
        id: "05",
        title: "Interaction Design",
        description: "I bring a premium and fluid experience to the product with micro-interactions and motion systems.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4FD1FF]">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
            </svg>
        )
    },
    {
        id: "06",
        title: "Conversion Landing Pages",
        description: "I produce landing page designs focused on clear messaging, strong visual hierarchy, and conversion optimization.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4FD1FF]">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        )
    }
]

// Container Animation Variants
const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
}

export function ServicesSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            id="services"
            className="relative min-h-screen shrink-0 snap-start py-32 px-4 w-full flex flex-col items-center overflow-hidden bg-transparent"
        >
            {/* Very subtle ambient glow in the background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4FD1FF]/[0.03] blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-4 mb-6"
                    >
                        <div className="h-[1px] w-8 bg-[#4FD1FF]/30" />
                        <span className="text-[#4FD1FF] text-sm font-medium tracking-widest uppercase shadow-[#4FD1FF]/30 drop-shadow-md">
                            My Specialization
                        </span>
                        <div className="h-[1px] w-8 bg-[#4FD1FF]/30" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-semibold text-white tracking-tight"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1FF] to-[#0099ff] drop-shadow-[0_0_15px_rgba(79,209,255,0.4)]">Services</span> I Provide
                    </motion.h2>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
                >
                    {SERVICES.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariant}
                            className="group relative bg-[#0E1117] rounded-[20px] p-6 lg:p-8 border border-white/[0.03] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:-translate-y-1.5 overflow-hidden flex flex-col h-full"
                        >
                            {/* Left bright neon line */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[0%] bg-[#4FD1FF] rounded-r-md opacity-0 group-hover:h-[60%] group-hover:opacity-100 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(79,209,255,0.6)] group-hover:shadow-[0_0_20px_rgba(79,209,255,0.9)]" />

                            {/* Default passive left line */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[30%] bg-white/10 rounded-r-md group-hover:opacity-0 transition-opacity duration-300" />

                            {/* Subtle hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

                            {/* Icon Container */}
                            <div className="w-12 h-12 rounded-xl bg-[#1A1F29] border border-white/5 flex items-center justify-center mb-5 relative group-hover:scale-105 transition-transform duration-300">
                                <div className="absolute inset-0 bg-[#4FD1FF]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-white mb-2 tracking-wide group-hover:text-[#4FD1FF] transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                                {service.description}
                            </p>

                            {/* Learn More Link (Visual Only / Decorative as requested ideally) */}
                            <div className="mt-auto flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-white transition-colors duration-300 cursor-pointer w-fit">
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#4FD1FF]">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
} 
