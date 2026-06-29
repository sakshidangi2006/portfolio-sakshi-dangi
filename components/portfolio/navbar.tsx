'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { navLinks, personal } from '@/lib/portfolio-data'
import { GithubIcon } from './brand-icons'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <motion.nav
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/20' : 'border border-transparent'
        }`}
      >
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
            SD
          </span>
          <span className="hidden sm:inline">Sakshi Dangi</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="sm" className="rounded-lg">
            <a href="#contact">Get in touch</a>
          </Button>
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="rounded-lg"
            aria-label="GitHub profile"
          >
            <a href={personal.github} target="_blank" rel="noreferrer">
              <GithubIcon className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl p-2 md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-2 w-full rounded-lg">
              <a href="#contact" onClick={() => setOpen(false)}>
                Get in touch
              </a>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
