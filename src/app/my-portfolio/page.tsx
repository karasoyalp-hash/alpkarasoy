"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye } from "lucide-react"

type Category = "Web Design" | "Mobile App Design" | "B2B & SAAS Project"

interface Project {
    id: string
    category: Category
    typeLabel: string
    title: string
    description: string
    imageUrl?: string
    imageUrls?: string[]
    detailLink: string
}

const PROJECTS: Project[] = [
    {
        id: "1",
        category: "Web Design",
        typeLabel: "Creative Agency",
        title: "Digital Twin",
        description: "Focusing on crafting visually engaging and structurally sound user interfaces, ensuring seamless user journeys from problem identification to final iteration.",
        imageUrl: "/images/digitalTwin.png",
        detailLink: "#",
    },
    {
        id: "2",
        category: "Web Design",
        typeLabel: "AI Platform",
        title: "Sonique AI",
        description: "Aesthetic eu id cras nunc mattis bibendum orci. In enim nibh id eget. At sapien aliquet nibh nisl feugiat integer metus purus et.",
        imageUrl: "/images/sonıqueAI.png",
        detailLink: "#",
    },
    {
        id: "3",
        category: "Web Design",
        typeLabel: "SaaS Application",
        title: "Task Collaborate",
        description: "Dashboard ipsum dolor sit amet consectetur. Imperdiet eu id cras nunc mattis bibendum orci. In enim nibh id eget. At sapien aliquet.",
        imageUrl: "/images/TaskCollabrate.png",
        detailLink: "#",
    },
    {
        id: "4",
        category: "Web Design",
        typeLabel: "E-Commerce",
        title: "TheLifeCo",
        description: "Nulla facilisi cras fermentum odio eu. Pulvinar sapien et ligula ullamcorper malesuada proin libero. In arcu cursus euismod quis viverra nibh cras.",
        imageUrl: "/images/TheLifeCo.png",
        detailLink: "#",
    },
    {
        id: "5",
        category: "Web Design",
        typeLabel: "Landing Page",
        title: "Veggie Fiesta",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        imageUrl: "/images/VeggieFiesta.png",
        detailLink: "#",
    },
    {
        id: "6",
        category: "Mobile App Design",
        typeLabel: "Social Media",
        title: "Satune",
        description: "Lorem ipsum dolor sit amet consectetur. Imperdiet eu id cras nunc mattis bibendum orci. In enim nibh id eget. At sapien aliquet nibh nisl feugiat integer metus purus et. In habitant sed rhoncus ullamcorper.",
        imageUrls: ["/images/satune1.png", "/images/satune2.png"],
        detailLink: "#",
    },
    {
        id: "7",
        category: "Mobile App Design",
        typeLabel: "Lifestyle & Pets",
        title: "PetDate",
        description: "Aesthetic eu id cras nunc mattis bibendum orci. In enim nibh id eget. At sapien aliquet nibh nisl feugiat integer metus purus et. In habitant sed rhoncus.",
        imageUrls: ["/images/petdateapp1.png", "/images/petdateapp2.png"],
        detailLink: "#",
    },
    {
        id: "8",
        category: "Mobile App Design",
        typeLabel: "Productivity",
        title: "TaskApp",
        description: "Dashboard ipsum dolor sit amet consectetur. Imperdiet eu id cras nunc mattis bibendum orci. In enim nibh id eget. At sapien aliquet nibh nisl feugiat integer metus purus et.",
        imageUrls: ["/images/taskapp1.png", "/images/taskapp2.png"],
        detailLink: "#",
    },
    {
        id: "9",
        category: "Mobile App Design",
        typeLabel: "Events & Ticketing",
        title: "TicketFly",
        description: "Focusing on crafting visually engaging and structurally sound user interfaces, ensuring seamless user journeys from problem identification to final iteration.",
        imageUrls: ["/images/ticketfly1.png", "/images/ticketfly2.png"],
        detailLink: "#",
    },
    {
        id: "10",
        category: "B2B & SAAS Project",
        typeLabel: "Analytics Portal",
        title: "Saha Operasyonları",
        description: "Nulla facilisi cras fermentum odio eu. Pulvinar sapien et ligula ullamcorper malesuada proin libero. In arcu cursus euismod quis viverra nibh cras.",
        imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2464&auto=format&fit=crop",
        detailLink: "#",
    },
]

const FILTERS: (Category | "All")[] = ["Web Design", "Mobile App Design", "B2B & SAAS Project"]

export default function MyPortfolio() {
    const [activeFilter, setActiveFilter] = useState<Category | "All">("Web Design")

    const filteredProjects = activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter(project => project.category === activeFilter)

    return (
        <div className="min-h-screen pt-32 pb-24 px-4 md:px-8 xl:px-0 relative z-10 w-full max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="flex flex-col items-start mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight"
                >
                    Portfolio
                </motion.h1>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-3 overflow-x-auto w-full pb-4 no-scrollbar"
                >
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 md:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap outline-none flex-shrink-0
                                ${activeFilter === filter
                                    ? "bg-[#00FFC6] text-black shadow-[0_0_15px_rgba(0,255,198,0.3)] scale-[1.02]"
                                    : "bg-[#111] text-gray-400 border border-white/10 hover:bg-[#1a1a1a] hover:text-white"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </motion.div>
            </div>

            {/* Project List */}
            <motion.div layout className="flex flex-col gap-8 md:gap-12">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="group flex flex-col-reverse md:flex-row gap-6 md:gap-12 p-6 md:p-10 md:pb-0 md:pr-0 bg-[#0F0F0F] border border-white/5 rounded-[24px] md:rounded-[32px] hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,198,0.06)] overflow-hidden items-stretch"
                        >
                            {/* Left: Text Content */}
                            <div className="flex-1 flex flex-col justify-start h-full md:pb-10 pt-4 md:mt-6 pb-0">
                                <span className="text-sm text-gray-500 mb-3 font-medium opacity-80 uppercase tracking-wider">
                                    {project.typeLabel}
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                                    {project.title}
                                </h2>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                                    {project.description}
                                </p>

                                <div className="mt-auto md:mb-0 mb-6">
                                    <button className="inline-flex items-center gap-2 border border-white/20 rounded-full px-7 py-3 text-sm font-medium text-white transition-all duration-300 group-hover/btn:border-[#00FFC6] hover:bg-[#00FFC6] hover:text-black hover:border-transparent hover:shadow-[0_0_15px_rgba(0,255,198,0.5)]">
                                        Detail
                                        <Eye className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Right: Image Content */}
                            {project.category === "Mobile App Design" && project.imageUrls ? (
                                <div className="flex-[1.4] relative w-full min-h-[400px] md:min-h-[480px] pointer-events-none mt-8 md:mt-0 flex items-end justify-center">
                                    <div className="relative w-full max-w-[480px] h-full">
                                        {/* Left Phone (Satune 1) */}
                                        <img
                                            src={project.imageUrls[0]}
                                            alt={`${project.title} Screen 1`}
                                            className="absolute left-[5%] md:left-[20px] bottom-[-50px] md:bottom-[-70px] w-[50%] md:w-[260px] h-auto z-20 pointer-events-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                                        />
                                        {/* Right Phone (Satune 2) */}
                                        <img
                                            src={project.imageUrls[1]}
                                            alt={`${project.title} Screen 2`}
                                            className="absolute right-[5%] md:right-[20px] bottom-[-70px] md:bottom-[-100px] w-[42%] md:w-[240px] h-auto z-10 pointer-events-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex-[1.2] relative w-full h-[450px] rounded-[16px] md:rounded-tl-[24px] md:rounded-b-none md:rounded-r-none overflow-hidden border-t border-l border-white/10 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)]">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        loading="lazy"
                                        className="object-cover object-top w-full h-full origin-bottom-right"
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
