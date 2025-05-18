"use client"

import type { ReactNode } from "react"

interface GlitchTextProps {
  children: ReactNode
  selfClosing?: boolean
}

export function GlitchText({ children, selfClosing = false }: GlitchTextProps) {
  // If selfClosing is true, format the children as a self-closing tag
  const formattedText = selfClosing ? `<${children} />` : children

  return (
    <span className="glitch-effect" data-text={typeof formattedText === "string" ? formattedText : ""}>
      {formattedText}
    </span>
  )
}
