"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Frontend Developer",
    company: "Babyliger.vip",
    period: "Dec 2024 - Mar 2025",
    description: [
      "Built a fast, responsive web app using React & TypeScript, boosting engagement by 35%",
      "Improved data rendering, cutting load times by 40% with optimized frontend logic",
      "Guided junior devs on UI structure and performance, raising code quality",
      "Turned UX designs into clean, user-friendly interfaces",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "LinksUs",
    period: "Feb 2025 - Apr 2025",
    description: [
      "Designed and implemented intuitive user flows for complex data visualization",
      "Revamped existing UI components, enhancing performance and usability by 35%",
      "Collaborated with backend developers to design and implement APIs",
      "Participated in code reviews and contributed to technical documentation",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "BufferTech llp",
    period: "Feb 2024 - Aug 2024",
    description: [
      "Led the development of a high-performance web application using React and TypeScript",
      "Implemented efficient algorithms for data processing, reducing load times by 40%",
      "Mentored fellow developers on best practices for algorithm optimization",
      "Collaborated with UX designers to create intuitive user interfaces",
    ],
  },
]

export default function Experience() {
  const [currentExperience, setCurrentExperience] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % experiences.length)
  }

  const prevExperience = () => {
    setCurrentExperience((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  return (
    <section id="experience" className="py-20" ref={ref}>
      <motion.h2
        className="text-2xl font-bold mb-12 text-teal-400"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        03. Experience
      </motion.h2>

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-slate-700"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4">
            <h3 className="text-xl font-bold text-slate-100">{experiences[currentExperience].title}</h3>
            <p className="text-teal-400">{experiences[currentExperience].company}</p>
            <p className="text-slate-400 text-sm">{experiences[currentExperience].period}</p>
          </div>

          <ul className="space-y-2">
            {experiences[currentExperience].description.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-400 mr-2">▹</span>
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevExperience}
              className="p-2 rounded-full bg-slate-700 hover:bg-teal-400 hover:text-slate-900 transition-colors"
              aria-label="Previous experience"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentExperience(index)}
                  className={`w-2 h-2 rounded-full ${currentExperience === index ? "bg-teal-400" : "bg-slate-600"}`}
                  aria-label={`Go to experience ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextExperience}
              className="p-2 rounded-full bg-slate-700 hover:bg-teal-400 hover:text-slate-900 transition-colors"
              aria-label="Next experience"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
