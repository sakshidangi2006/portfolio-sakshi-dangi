'use client'

import { GitFork, Star, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personal } from '@/lib/portfolio-data'
import { GithubIcon } from './brand-icons'
import { Reveal, SectionHeading } from './reveal'

const highlights = [
  { icon: Star, label: 'Public repositories', value: '20+' },
  { icon: GitFork, label: 'Open-source projects', value: '4+' },
  { icon: Users, label: 'DSA problems solved', value: '110+' },
]

export function GitHubSection() {
  return (
    <section id="github" className="relative px-4 py-24 md:py-32">
      <SectionHeading
        eyebrow="GitHub"
        title="Code in the open"
        description="My projects, problem-solving and experiments live on GitHub. Take a look at what I'm shipping."
      />

      <div className="mx-auto mt-14 max-w-4xl">
        <Reveal>
          <div className="glass overflow-hidden rounded-3xl p-8 md:p-10">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/15 text-foreground">
                <GithubIcon className="h-8 w-8" />
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">
                  @{personal.githubUser}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  AI &amp; ML engineer building production-ready products and
                  solving algorithmic challenges in public.
                </p>
              </div>
              <Button asChild className="rounded-xl">
                <a href={personal.github} target="_blank" rel="noreferrer">
                  <GithubIcon className="h-4 w-4" />
                  Follow on GitHub
                </a>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-card/40 p-5"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      {item.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
