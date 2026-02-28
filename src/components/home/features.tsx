"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const FEATURES = [
    {
        id: "01",
        title: "User-Centered Design",
        description: "I prioritize understanding user needs and behaviors to create intuitive and impactful designs that solve real problems.",
        highlight: true,
    },
    {
        id: "02",
        title: "Clear Communication",
        description: "Transparency and frequent updates ensure that everyone is aligned and the project moves forward smoothly.",
        highlight: false,
    },
    {
        id: "03",
        title: "On-Time Delivery",
        description: "I value your time. My structured workflow ensures that milestones are met without compromising on quality.",
        highlight: false,
    },
    {
        id: "04",
        title: "Attention to Detail",
        description: "From pixel-perfect layouts to micro-interactions, I obsess over the small details that elevate the experience.",
        highlight: false,
    },
]

export function FeaturesSection() {
    return (
        <section id="features" className="py-24 container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Why Clients Trust Me?</h2>
                <p className="text-muted-foreground text-lg">
                    My process is built on a foundation of communication, empathy, and a relentless pursuit of quality.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {FEATURES.map((feature, index) => (
                    <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex h-full"
                    >
                        <Card
                            className={`flex-1 transition-all duration-300 hover:-translate-y-2 ${feature.highlight
                                    ? "bg-foreground text-background border-transparent"
                                    : "bg-card text-card-foreground border"
                                }`}
                        >
                            <CardContent className="p-8 flex flex-col h-full">
                                <span className={`text-4xl font-black tabular-nums tracking-tighter mb-8 ${feature.highlight ? "text-background/20" : "text-muted/50"}`}>
                                    {feature.id}
                                </span>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className={`${feature.highlight ? "text-background/80" : "text-muted-foreground"} leading-relaxed`}>
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
