import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SocialSidebar from "@/components/social-sidebar"
import EmailSidebar from "@/components/email-sidebar"

export default function Home() {
  return (
    <main className="relative bg-slate-900 text-slate-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </div>
      <SocialSidebar />
      <EmailSidebar />
      <Footer />
    </main>
  )
}
