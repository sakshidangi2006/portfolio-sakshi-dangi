'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { personal } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from './brand-icons'

export function Hero() {
  return (
    <section className="mt-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 lg:flex-row">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-5xl font-bold">{personal.name}</h1>

          <h2 className="mt-3 text-2xl font-semibold text-primary">
            {personal.title}
          </h2>

          <p className="mt-5 max-w-xl text-muted-foreground">
            {personal.tagline}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="group rounded-xl">
              <a href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-border bg-secondary/30"
            >
              <a
                href={personal.resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-border bg-secondary/30"
            >
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-xl"
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <Image
            src={personal.image}
            alt={personal.name}
            width={380}
            height={380}
            priority
            className="rounded-full border-4 border-primary object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}