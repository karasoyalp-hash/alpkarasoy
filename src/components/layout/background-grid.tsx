"use client"

import { useEffect, useRef } from "react"

export function BackgroundGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = 0
        let height = 0
        let animationFrameId: number

        const CONFIG = {
            squareSize: 64,
            gap: 12,
            maxRadius: 280,
            lerpFactor: 0.12,
            baseOpacity: 0.05,
            activeOpacity: 0.8,
            color: { r: 0, g: 255, b: 198 } // Teal neon
        }

        const FULL_SIZE = CONFIG.squareSize + CONFIG.gap

        const mouse = { x: -1000, y: -1000 }
        const smoothMouse = { x: -1000, y: -1000 }
        let currentScrollY = 0

        const resize = () => {
            width = window.innerWidth
            height = window.innerHeight

            const dpr = window.devicePixelRatio || 1
            canvas.width = width * dpr
            canvas.height = height * dpr
            ctx.scale(dpr, dpr)

            // Calculate exact height needed for entire document so we don't need to redraw offsetting canvas
            // ACTUALLY, scrolling offset is much more performant than a massive height canvas
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
        }

        const handleMouseMove = (e: MouseEvent) => {
            // Only trace mouse if we are within the top hero section
            if (currentScrollY <= Number(height) * 0.5) {
                mouse.x = e.clientX
                mouse.y = e.clientY
            } else {
                mouse.x = -1000
                mouse.y = -1000
            }
        }

        const handleMouseOut = () => {
            mouse.x = -1000
            mouse.y = -1000
        }

        const handleScroll = () => {
            currentScrollY = window.scrollY
        }

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseout', handleMouseOut)
        // passive listener for performance
        window.addEventListener('scroll', handleScroll, { passive: true })

        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height)

            smoothMouse.x = lerp(smoothMouse.x, mouse.x, CONFIG.lerpFactor)
            smoothMouse.y = lerp(smoothMouse.y, mouse.y, CONFIG.lerpFactor)

            const cols = Math.ceil(width / FULL_SIZE) + 1
            const rows = Math.ceil(height / FULL_SIZE) + 2 // +2 to cover active scroll edges

            // Math to perfectly center the grid dynamically against the screen
            const startX = (width - ((cols - 1) * FULL_SIZE + CONFIG.squareSize)) / 2
            const baseStartY = (height - ((Math.ceil(height / FULL_SIZE) - 1) * FULL_SIZE + CONFIG.squareSize)) / 2

            const offsetY = -(currentScrollY % FULL_SIZE)

            const { r, g, b } = CONFIG.color

            // Fade out the interactive mouse effect when scrolled down from the Hero section
            let globalActive = 1
            if (currentScrollY > height * 0.1) {
                globalActive = Math.max(0, 1 - ((currentScrollY - height * 0.1) / (height * 0.3)))
            }

            if (globalActive > 0 && smoothMouse.x > -500) {
                const bgGradient = ctx.createRadialGradient(
                    smoothMouse.x, smoothMouse.y, 0,
                    smoothMouse.x, smoothMouse.y, CONFIG.maxRadius
                )
                bgGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.04 * globalActive})`)
                bgGradient.addColorStop(1, 'transparent')
                ctx.fillStyle = bgGradient
                ctx.fillRect(0, 0, width, height)
            }

            for (let rIdx = -1; rIdx < rows; rIdx++) {
                for (let cIdx = 0; cIdx < cols; cIdx++) {
                    const x = startX + cIdx * FULL_SIZE
                    const y = baseStartY + rIdx * FULL_SIZE + offsetY
                    const cx = x + (CONFIG.squareSize / 2)
                    const cy = y + (CONFIG.squareSize / 2)

                    // Base opacity for the passive background grid
                    let currentOpacity = CONFIG.baseOpacity
                    let currentLineWidth = 1
                    let currentBlur = 0
                    let shadowInfluence = 0

                    if (globalActive > 0) {
                        const dx = cx - smoothMouse.x
                        const dy = cy - smoothMouse.y
                        const dist = Math.sqrt(dx * dx + dy * dy)

                        let influence = 0
                        if (dist < CONFIG.maxRadius) {
                            const normalized = 1 - (dist / CONFIG.maxRadius)
                            influence = normalized * normalized
                        }

                        // Apply the global section bloom multiplier
                        influence *= globalActive

                        currentOpacity = CONFIG.baseOpacity + (CONFIG.activeOpacity - CONFIG.baseOpacity) * Math.max(0, influence)
                        currentLineWidth = 1 + (1.5 * Math.max(0, influence))
                        currentBlur = 12 * Math.max(0, influence)
                        shadowInfluence = Math.max(0, influence)
                    }

                    ctx.beginPath()
                    ctx.rect(x, y, CONFIG.squareSize, CONFIG.squareSize)

                    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`
                    ctx.lineWidth = currentLineWidth

                    if (shadowInfluence > 0.01) {
                        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${shadowInfluence * 0.8})`
                        ctx.shadowBlur = currentBlur
                    } else {
                        ctx.shadowColor = 'transparent'
                        ctx.shadowBlur = 0
                    }

                    ctx.stroke()
                }
            }

            animationFrameId = requestAnimationFrame(draw)
        }

        resize()
        currentScrollY = window.scrollY
        draw()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseout', handleMouseOut)
            window.removeEventListener('scroll', handleScroll)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden z-[-10] bg-[radial-gradient(circle_at_center,#0B0C10_0%,#050607_100%)] pointer-events-none">
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.7)_120%)] z-10 pointer-events-none" />
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        </div>
    )
} 
