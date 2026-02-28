import Link from "next/link"
import { getButtonClasses } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="border-t py-12 bg-background">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <span className="text-xl font-bold tracking-tighter">alpkarasoy</span>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Alp Karasoy. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href="https://twitter.com/alpkarasoy" target="_blank" rel="noreferrer" className={getButtonClasses("ghost", "default")}>
                        Twitter
                    </Link>
                    <Link href="https://dribbble.com/alpkarasoy" target="_blank" rel="noreferrer" className={getButtonClasses("ghost", "default")}>
                        Dribbble
                    </Link>
                </div>
            </div>
        </footer>
    )
}
