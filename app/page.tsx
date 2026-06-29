import { About } from '@/components/portfolio/about'
import { Achievements } from '@/components/portfolio/achievements'
import { BackToTop } from '@/components/portfolio/back-to-top'
import { Contact } from '@/components/portfolio/contact'
import { CursorGlow } from '@/components/portfolio/cursor-glow'
import { Footer } from '@/components/portfolio/footer'
import { GitHubSection } from '@/components/portfolio/github'
import { Hero } from '@/components/portfolio/hero'
import { LoadingScreen } from '@/components/portfolio/loading-screen'
import { Navbar } from '@/components/portfolio/navbar'
import { Projects } from '@/components/portfolio/projects'
import { Resume } from '@/components/portfolio/resume'
import { ScrollProgress } from '@/components/portfolio/scroll-progress'
import { Skills } from '@/components/portfolio/skills'

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <GitHubSection />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
