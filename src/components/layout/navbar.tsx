"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 w-full z-[999] transition-all duration-300 ${isScrolled ? "bg-[#050607]" : "bg-transparent hover:bg-[#050607]"
                }`}
        >
            <div className="w-full px-[50px] h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center justify-center group">
                    <Image
                        src="/images/alpkarasoy.svg"
                        alt="Logo"
                        width={89}
                        height={15}
                        className="h-5 w-auto group-hover:scale-105 transition-transform"
                        priority
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400 absolute left-1/2 -translate-x-1/2">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/about-me" className="hover:text-white transition-colors">About Me</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    <Link href="/my-portfolio" className="hover:text-white transition-colors text-white font-semibold">My Portfolio</Link>
                </nav>

                {/* Right Actions Desktop - Removed */}                {/* Right Actions Mobile (Hamburger) */}
                <button
                    className="md:hidden flex flex-col gap-[6px] p-2 z-[1001] relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#050607] flex flex-col items-center justify-center z-[1000] transition-transform duration-500 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <nav className="flex flex-col items-center gap-8 text-2xl font-semibold text-gray-400 w-full px-6">
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors w-full text-center py-4 border-b border-white/5">Home</Link>
                    <Link href="/about-me" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors w-full text-center py-4 border-b border-white/5">About Me</Link>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors w-full text-center py-4 border-b border-white/5">Contact</Link>
                    <Link href="/my-portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors text-white font-bold w-full text-center py-4 border-b border-white/5">My Portfolio</Link>

                </nav>
            </div>
        </header>
    )
}
