"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Algorithm Visualizer",
    description:
      "An interactive web application that visualizes various sorting and pathfinding algorithms, helping users understand how they work.",
    technologies: ["React", "TypeScript", "Canvas API"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Data Structure Explorer",
    description:
      "A comprehensive tool for exploring and understanding different data structures with interactive examples and challenges.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Competitive Programming Hub",
    description:
      "A platform for practicing competitive programming problems with integrated code editor, test cases, and performance analytics.",
    technologies: ["React", "Express", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20" ref={ref}>
      <motion.h2
        className="text-2xl font-bold mb-12 text-teal-400"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        04. Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-teal-400 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-slate-100">{project.title}</h3>
              <p className="text-slate-300 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-slate-700 rounded-full text-teal-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
