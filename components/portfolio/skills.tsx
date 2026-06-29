'use client'

import { motion } from 'framer-motion'
import { skillGroups } from '@/lib/portfolio-data'
import { Reveal, SectionHeading } from './reveal'

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <SectionHeading
        eyebrow="Skills"
        title="Tools I build with"
        description="A pragmatic stack spanning languages, backend, machine learning and modern LLM APIs."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ y: -2 }}
                    className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
