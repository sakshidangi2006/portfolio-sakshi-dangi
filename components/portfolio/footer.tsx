'use client'

import { Mail } from 'lucide-react'
import { navLinks, personal } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from './brand-icons'

export function Footer() {
  return (
    <footer className="relative border-t border-border px-4 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="flex items-center justify-center gap-2 font-semibold md:justify-start"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
              SD
            </span>
            {personal.name}
          </a>

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {personal.title} — Building intelligent, production-ready software.
          </p>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/sakshidangi2006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/www.linkedin.com/in/sakshi-dangi-633b2635b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>

          <a
            href="mailto:sakshidangi2006@gmail.com"
            aria-label="Email"
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-10 max-w-5xl border-t border-border pt-6 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {personal.name}. Built with Next.js,
          React, Tailwind CSS & TypeScript.
        </p>
      </div>
    </footer>
  )
}