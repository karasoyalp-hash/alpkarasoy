import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="bg-[#0F0F0F] border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8 xl:px-0 max-w-7xl">
                {/* Top Section: Navigation Links */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
                    {/* Brand & Socials */}
                    <div className="flex-[2] max-w-sm">
                        <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                            <Image
                                src="/images/alpkarasoy.svg"
                                alt="Logo"
                                width={110}
                                height={20}
                                className="h-6 w-auto group-hover:scale-105 transition-transform"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Crafting visually engaging and structurally sound user interfaces, ensuring seamless user journeys from problem identification to final iteration worldwide.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="flex-[3] grid grid-cols-2 gap-8 text-center md:text-left">
                        {/* Navigation */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-semibold mb-2">Navigation</h4>
                            <Link href="/" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Home</Link>
                            <Link href="/about-me" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">About Me</Link>
                            <Link href="/contact" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Contact</Link>
                            <Link href="/my-portfolio" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">My Portfolio</Link>
                        </div>

                        {/* Contact info */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-semibold mb-2">Get in Touch</h4>
                            <Link href="/contact" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Start a Project</Link>
                            <Link href="mailto:hello@alpkarasoy.com" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Email Me</Link>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Removed */}
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between pb-2 border-b border-white/10 mb-8 w-full" />

                {/* Bottom Section: Copyright */}
                <div className="flex flex-col items-center justify-center text-xs text-gray-500 w-full text-center">
                    <p>© {new Date().getFullYear()} Alpkarasoy. Made with <span className="text-[#00FFC6]">♥</span> in Istanbul</p>
                </div>
            </div>
        </footer>
    )
}
