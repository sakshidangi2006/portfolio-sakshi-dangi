'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const springX = useSpring(x, { stiffness: 120, damping: 25 })
  const springY = useSpring(y, { stiffness: 120, damping: 25 })

  useEffect(() => {
    // Only enable on fine-pointer (mouse) devices.
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 250)
      y.set(e.clientY - 250)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]"
    />
  )
}
