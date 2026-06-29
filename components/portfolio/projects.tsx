'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/portfolio-data'
import { GithubIcon } from './brand-icons'
import { Reveal, SectionHeading } from './reveal'

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 md:py-32">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Things I've built"
        description="A selection of AI products and engineering work — from LLM-powered apps to algorithmic foundations."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="glass group flex h-full flex-col overflow-hidden rounded-3xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`${project.title} preview`}
                  width={800}
                  height={500}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/10 to-transparent" />
                {project.featured ? (
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                    Featured
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Button asChild size="sm" className="rounded-lg">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-lg border-border bg-secondary/30"
                  >
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <GithubIcon className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
