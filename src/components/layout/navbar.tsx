"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

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
                <Link href="/" className="flex items-center justify-center">
                    <Image
                        src="/images/alpkarasoy.svg"
                        alt="Logo"
                        width={89}
                        height={15}
                        className="h-5 w-auto"
                        priority
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400 absolute left-1/2 -translate-x-1/2">
                    <Link href="#work" className="hover:text-white transition-colors">Work</Link>
                    <Link href="#services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="#about" className="hover:text-white transition-colors">About</Link>
                    <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="relative flex items-center justify-center rounded-[50px] p-[2px] bg-gradient-to-r from-[#ff00cc] via-[#3333ff] to-[#00ffcc] animate-gradient transition-all hover:scale-105 group"
                    >
                        <div className="w-full h-full bg-[#050607] rounded-[48px] px-6 py-2.5 flex items-center justify-center transition-colors group-hover:bg-[#050607]/80">
                            <span className="bg-gradient-to-r from-[#ff00cc] via-[#3333ff] to-[#00ffcc] animate-gradient text-transparent bg-clip-text text-sm font-semibold">
                                Contact me
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}
