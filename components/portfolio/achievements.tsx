'use client'

import { Award, Code2, GraduationCap, Rocket } from 'lucide-react'
import { achievements } from '@/lib/portfolio-data'
import { Reveal, SectionHeading } from './reveal'

const icons = [Rocket, Code2, Award, GraduationCap]

export function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-24 md:py-32">
      <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-[280px] w-[480px] rounded-full bg-primary/10 blur-[140px]" />

      <SectionHeading
        eyebrow="Achievements"
        title="Milestones along the way"
        description="Proof of consistent building, learning and shipping."
      />

      <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
        {achievements.map((item, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="glass group flex h-full items-start gap-4 rounded-2xl p-6 transition-colors hover:border-primary/40">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
