import Link from "next/link"
import { Twitter, Linkedin, Github, Dribbble, ShieldCheck, Lock, Star } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-[#0F0F0F] border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8 xl:px-0 max-w-7xl">
                {/* Top Section: Navigation Links */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
                    {/* Brand & Socials */}
                    <div className="flex-[2] max-w-sm">
                        <Link href="/" className="inline-flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-[#00FFC6] rounded-xl flex items-center justify-center text-black font-bold text-lg">
                                A
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">Alpkarasoy</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Crafting visually engaging and structurally sound user interfaces, ensuring seamless user journeys from problem identification to final iteration worldwide.
                        </p>
                        <div className="flex items-center gap-3">
                            <Link href="#" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                <Dribbble className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="flex-[3] grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-semibold mb-2">Product</h4>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Features</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Integrations</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Pricing</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Changelog</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Roadmap</Link>
                        </div>
                        {/* Column 2 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-semibold mb-2">Company</h4>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">About Us</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Careers</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Blog</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Press Kit</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Contact</Link>
                        </div>
                        {/* Column 3 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-semibold mb-2">Resources</h4>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Documentation</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Help Center</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">API Reference</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Community</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Tutorials</Link>
                        </div>
                        {/* Column 4 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-semibold mb-2">Legal</h4>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Privacy</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Terms</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Security</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Cookies</Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#00FFC6] transition-colors">Compliance</Link>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Badges & Newsletter */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300">
                            <ShieldCheck className="w-4 h-4 text-[#00FFC6]" />
                            SOC 2 Certified
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300">
                            <Lock className="w-4 h-4 text-[#00FFC6]" />
                            GDPR Compliant
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300">
                            <div className="flex text-[#00FFC6]">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                            </div>
                            <span className="ml-1">4.9/5 Rating</span>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="flex items-center w-full lg:w-auto max-w-md">
                        <input
                            type="email"
                            placeholder="Get product updates..."
                            className="bg-white/5 border border-white/10 text-white text-sm rounded-l-xl px-4 py-2.5 h-[42px] outline-none w-full focus:border-[#00FFC6] transition-colors placeholder:text-gray-500"
                        />
                        <button className="bg-[#00FFC6] hover:bg-[#00FFC6]/90 text-black font-semibold text-sm px-6 h-[42px] rounded-r-xl transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Bottom Links */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Alpkarasoy. Made with <span className="text-[#00FFC6]">♥</span> in Istanbul</p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="hover:text-white transition-colors">Status</Link>
                        <span>·</span>
                        <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                        <span>·</span>
                        <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
