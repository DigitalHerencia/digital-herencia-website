"use client"

import { useEffect, useState } from "react"
import { motion, useAnimate, useInView } from "framer-motion"

interface TypewriterEffectProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}

export const TypewriterEffect = ({ words, className = "", cursorClassName = "" }: TypewriterEffectProps) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true)

      const wordsAnimation = words.map((_, index) => [
        `.word-${index}`,
        { opacity: 1 },
        { duration: 0.15, delay: index * 0.1 },
      ])

      const lettersAnimation = words.flatMap((word, wordIndex) => {
        return Array.from(word.text).map((_, letterIndex) => [
          `.word-${wordIndex} .letter-${letterIndex}`,
          { opacity: 1, y: 0 },
          { duration: 0.05, delay: letterIndex * 0.02 + wordIndex * 0.1 },
        ])
      })

      animate([...wordsAnimation, ...lettersAnimation])
    }
  }, [isInView, animate, started, words])

  return (
    <div ref={scope} className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => {
        return (
          <div key={`word-${wordIndex}`} className={`word-${wordIndex} inline-block opacity-0`}>
            {wordIndex > 0 && <span className="inline-block">&nbsp;</span>}
            {Array.from(word.text).map((letter, letterIndex) => (
              <span
                key={`letter-${letterIndex}`}
                className={`letter-${letterIndex} opacity-0 translate-y-2 inline-block ${word.className || ""}`}
              >
                {letter}
              </span>
            ))}
          </div>
        )
      })}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className={`inline-block ml-1 h-6 w-[2px] bg-white ${cursorClassName}`}
      />
    </div>
  )
}
