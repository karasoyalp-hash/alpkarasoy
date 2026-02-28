"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// public/images/ klasöründe sadece app2, app3 ve app6 var. Diğerlerini şimdilik tekrar ederek kullandım.
const ASSETS = [
    "/images/app2.png",
    "/images/app3.png",
    "/images/app6.png",
    "/images/app2.png",
    "/images/app3.png",
    "/images/app6.png",
]

// We need exactly 20 cards for an 18 degree spacing (360 / 18 = 20)
// With a wider radius, this provides ample gap between 199px wide cards
const CARDS = [...ASSETS, ...ASSETS, ...ASSETS, ...ASSETS].slice(0, 20)
const TOTAL_CARDS = CARDS.length
const SPACING_ANGLE = 18 // degrees
const RADIUS = 850 // px

export function CarouselSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    // Animation state ref variables (to avoid re-renders during rAF)
    const state = useRef({
        currentAngle: 0,
        targetAngle: 0,
        velocity: 0,
        isDragging: false,
        startX: 0,
        lastX: 0,
        autoRotateSpeed: 0.06, // Yavaşlatıldı
        lastInteractionTime: 0,
        interactionDelay: 2000 // ms
    })

    useEffect(() => {
        let animationFrameId: number

        const updateCards = () => {
            if (!containerRef.current) return

            const s = state.current
            const now = Date.now()

            // If not dragging and enough time passed since last interaction, auto rotate or snap to target
            if (!s.isDragging) {
                if (now - s.lastInteractionTime > s.interactionDelay && !isHovered) {
                    // Auto rotation
                    s.velocity = s.autoRotateSpeed
                } else {
                    // Friction / Momentum decay
                    s.velocity *= 0.95
                    if (Math.abs(s.velocity) < 0.01) s.velocity = 0
                }
            }

            // Apply velocity
            s.currentAngle -= s.velocity

            const cards = containerRef.current.children as HTMLCollectionOf<HTMLElement>

            for (let i = 0; i < cards.length; i++) {
                const card = cards[i]

                // Calculate absolute angle for this card
                let itemAngle = s.currentAngle + i * SPACING_ANGLE

                // Normalize angle to [-180, 180] range to determine its position relative to camera (0 deg)
                let normalizedAngle = itemAngle % 360
                if (normalizedAngle < -180) normalizedAngle += 360
                if (normalizedAngle > 180) normalizedAngle -= 360

                const absAngle = Math.abs(normalizedAngle)

                // Visibility logic (hide cards that are far in the back)
                const isVisible = absAngle < 90

                if (isVisible) {
                    // Center card: scale 1.05, opacity 1
                    // Side cards: scale 0.85-1.0, opacity 0.6-0.85
                    const depthFactor = 1 - (absAngle / 90) // 1 at center, 0 at edges

                    const scale = 0.85 + (0.20 * depthFactor) // 0.85 to 1.05
                    const opacity = 0.6 + (0.4 * depthFactor) // 0.6 to 1.0

                    card.style.opacity = opacity.toString()
                    card.style.transform = `rotateY(${itemAngle}deg) translateZ(${RADIUS}px) scale(${scale})`
                    card.style.zIndex = Math.round(depthFactor * 100).toString()
                    card.style.pointerEvents = 'auto'
                    // Subtle blur for side items
                    const blur = (1 - depthFactor) * 2 // Reduced blur max 2px
                    const brightness = 0.6 + (0.4 * depthFactor) // Dim side cards
                    card.style.filter = `blur(${blur}px) brightness(${brightness})`
                } else {
                    card.style.opacity = '0'
                    card.style.transform = `rotateY(${itemAngle}deg) translateZ(${RADIUS}px) scale(0.5)`
                    card.style.zIndex = '0'
                    card.style.pointerEvents = 'none'
                }
            }

            animationFrameId = requestAnimationFrame(updateCards)
        }

        animationFrameId = requestAnimationFrame(updateCards)

        return () => cancelAnimationFrame(animationFrameId)
    }, [isHovered])

    // Interaction Handlers
    const handlePointerDown = (e: React.PointerEvent) => {
        state.current.isDragging = true
        state.current.startX = e.clientX
        state.current.lastX = e.clientX
        state.current.velocity = 0
        containerRef.current?.style.setProperty('cursor', 'grabbing')
    }

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!state.current.isDragging) return
        const x = e.clientX
        const delta = x - state.current.lastX

        // Convert pixel delta to angle delta. Sensitivity multiplier.
        state.current.velocity = -delta * 0.2
        state.current.lastX = x
        state.current.lastInteractionTime = Date.now()
    }

    const handlePointerUp = () => {
        if (state.current.isDragging) {
            state.current.isDragging = false
            state.current.lastInteractionTime = Date.now()
            containerRef.current?.style.setProperty('cursor', 'grab')
        }
    }

    const handleCardClick = (index: number) => {
        // Find shortest path to bring this card to 0 degrees
        const currentCenterAngle = state.current.currentAngle % 360
        const cardTargetAngle = -(index * SPACING_ANGLE)

        // Calculate offset difference
        let diff = cardTargetAngle - currentCenterAngle
        // Normalize diff to [-180, 180] for shortest path
        if (diff > 180) diff -= 360
        if (diff < -180) diff += 360

        // Give a boost velocity towards target
        // A simple approach is to simulate a quick drag
        state.current.velocity = -diff * 0.05
        state.current.lastInteractionTime = Date.now()
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-[50] h-screen shrink-0 snap-start pt-[5px] pb-20 overflow-x-clip flex flex-col items-center justify-center w-full bg-transparent"
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            id="work"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,198,0.02)_0%,transparent_60%)] pointer-events-none" />

            <div
                className="relative w-full h-[460px] mt-[0px] flex justify-center items-center cursor-grab touch-none select-none"
                style={{ perspective: '1400px' }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
            >
                <div
                    ref={containerRef}
                    className="absolute top-1/2 left-1/2 w-0 h-0"
                    style={{ transformStyle: 'preserve-3d', transform: `translateZ(-${RADIUS}px)` }}
                >
                    {CARDS.map((src, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={(e) => {
                                if (Math.abs(state.current.velocity) > 0.5) {
                                    e.preventDefault()
                                } else {
                                    handleCardClick(idx)
                                }
                            }}
                            className="absolute w-[199px] h-[431px] rounded-[22px] overflow-hidden bg-[#111] shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-opacity duration-100 ease-out"
                            style={{
                                backfaceVisibility: 'hidden',
                                left: '-99.5px',
                                top: '-215.5px'
                            }}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={src}
                                    alt={`App Screen ${idx + 1}`}
                                    fill
                                    className="object-cover pointer-events-none"
                                />
                                <div className="absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/10 pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Minimal gradient at edges to blend carousel into background */}
            <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-gradient-to-r from-[#050607] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-gradient-to-l from-[#050607] to-transparent z-10 pointer-events-none" />
        </motion.section>
    )
}
