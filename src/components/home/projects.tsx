import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const PROJECTS = [
    {
        id: 1,
        title: "Fintech Mobile App",
        category: "UI/UX Design",
        description: "A modern banking app focusing on user experience and seamless transactions.",
        color: "from-blue-500/20 to-cyan-500/20",
        imagePlaceholder: "bg-blue-100 dark:bg-blue-950",
        tags: ["Mobile", "Finance", "iOS"],
    },
    {
        id: 2,
        title: "E-Commerce Dashboard",
        category: "Web Platform",
        description: "Comprehensive analytics and management dashboard for online retailers.",
        color: "from-orange-500/20 to-red-500/20",
        imagePlaceholder: "bg-orange-100 dark:bg-orange-950",
        tags: ["SaaS", "Dashboard", "Web"],
    },
    {
        id: 3,
        title: "Healthcare Portal",
        category: "Product Design",
        description: "Patient management system with focus on accessibility and clear data visualization.",
        color: "from-emerald-500/20 to-teal-500/20",
        imagePlaceholder: "bg-emerald-100 dark:bg-emerald-950",
        tags: ["Healthcare", "Portal", "UX"],
    },
]

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        A showcase of my recent projects, focusing on delivering intuitive and impactful user experiences.
                    </p>
                </div>
                <Link href="#projects" className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4">
                    View all projects <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project) => (
                    <Card key={project.id} className="group overflow-hidden border-0 bg-secondary/20 hover:bg-secondary/40 transition-colors cursor-pointer">
                        <CardContent className="p-0">
                            <div className={`h-64 sm:h-80 w-full ${project.imagePlaceholder} bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden relative p-8`}>
                                {/* Placeholder for actual mockup image */}
                                <div className="w-full h-full bg-background/50 rounded-xl border shadow-sm flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                                    <span className="text-muted-foreground font-medium">Project Mockup</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="bg-background">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
