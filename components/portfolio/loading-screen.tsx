'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex h-20 w-20 items-center justify-center"
          >
            <motion.span
              className="absolute inset-0 rounded-2xl border border-primary/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.span
              className="absolute inset-2 rounded-xl border border-accent/40"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <span className="text-xl font-semibold gradient-text">SD</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm tracking-widest text-muted-foreground uppercase"
          >
            Sakshi Dangi
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
