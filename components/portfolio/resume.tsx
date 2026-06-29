'use client'

import { Download, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personal } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

export function Resume() {
  return (
    <section id="resume" className="relative px-4 py-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-[100px]" />
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/15 text-primary">
                  <FileText className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    Want the full picture?
                  </h2>
                  <p className="mt-1.5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                    Download my resume for a detailed look at my experience,
                    education and the technologies I work with.
                  </p>
                </div>
              </div>
              <Button asChild size="lg" className="rounded-xl">
                <a href={personal.resumeUrl} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
