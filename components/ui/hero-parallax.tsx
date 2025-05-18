"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface HeroParallaxProps {
  images: {
    src: string
    alt: string
  }[]
}

export function HeroParallax({ images }: HeroParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              zIndex: images.length - index,
              transform: `translateY(${index * 10}px) scale(${1 - index * 0.1})`,
              opacity: 1 - index * 0.2,
            }}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" priority />
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10"></div>
    </div>
  )
}
