'use client'

import { BrainCircuit, Code2, Server, Sparkles } from 'lucide-react'
import { personal } from '@/lib/portfolio-data'
import { Reveal, SectionHeading } from './reveal'

const focus = [
  {
    icon: BrainCircuit,
    title: 'Machine Learning',
    description: 'Models, data pipelines and applied ML with scikit-learn.',
  },
  {
    icon: Server,
    title: 'Backend Engineering',
    description: 'Flask services, REST APIs and clean data layers.',
  },
  {
    icon: Sparkles,
    title: 'LLM Products',
    description: 'Shipping real apps powered by Gemini & Claude APIs.',
  },
  {
    icon: Code2,
    title: 'Problem Solving',
    description: '110+ DSA problems and strong algorithmic foundations.',
  },
]

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:py-32">
      <SectionHeading
        eyebrow="About"
        title="Engineering AI that ships"
        description="A short look at what I do and the way I like to build."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal className="glass rounded-3xl p-8">
          <p className="text-lg leading-relaxed text-pretty text-foreground/90">
            {personal.about}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I care about the full lifecycle of a product — from clean data and
            solid backend architecture to thoughtful interfaces — so the AI I
            build actually reaches users.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {focus.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="glass group h-full rounded-2xl p-5 transition-colors hover:border-primary/40">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
