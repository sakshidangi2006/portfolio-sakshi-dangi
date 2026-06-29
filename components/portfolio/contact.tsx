'use client'

import { Mail, Send } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { GithubIcon, LinkedinIcon } from './brand-icons'
import { Reveal, SectionHeading } from './reveal'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sakshidangi2006@gmail.com',
    href: 'mailto:sakshidangi2006@gmail.com',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: '@sakshidangi2006',
    href: 'https://github.com/sakshidangi2006',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/YOUR-LINKEDIN-URL/',
  },
]

export function Contact() {
  const [submitting, setSubmitting] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.')
      return
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)

    if (!emailOk) {
      toast.error('Please enter a valid email address.')
      return
    }

    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)

      setForm({
        name: '',
        email: '',
        message: '',
      })

      toast.success("Thanks for reaching out! I'll get back to you soon.")
    }, 1000)
  }

  return (
    <section id="contact" className="relative px-4 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />

      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Have an internship opportunity, project, or just want to connect? I'd love to hear from you."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="flex flex-col gap-4">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                <channel.icon className="h-5 w-5" />
              </span>

              <div>
                <p className="text-xs text-muted-foreground">
                  {channel.label}
                </p>

                <p className="text-sm font-medium text-foreground group-hover:text-primary">
                  {channel.value}
                </p>
              </div>
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>

                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-secondary/30"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-secondary/30"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>

              <Textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, internship opportunity, or just say hello..."
                className="resize-none bg-secondary/30"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="mt-6 w-full rounded-xl"
            >
              {submitting ? 'Sending...' : 'Send Message'}
              {!submitting && <Send className="ml-2 h-4 w-4" />}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}