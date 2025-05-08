"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Award, ExternalLink } from "lucide-react"

const achievements = [
  {
    title: "Google Coding Competition Finalist",
    description: "Ranked in the top 100 participants globally in Google's annual coding competition.",
    date: "2023",
    certificate: "/placeholder.svg?height=300&width=400",
    link: "https://example.com",
  },
  {
    title: "ACM ICPC Regional Winner",
    description: "First place in the regional round of the ACM International Collegiate Programming Contest.",
    date: "2022",
    certificate: "/placeholder.svg?height=300&width=400",
    link: "https://example.com",
  },
  {
    title: "LeetCode Global Ranking - Top 1%",
    description: "Achieved top 1% ranking on LeetCode with over 500 problems solved.",
    date: "2021-Present",
    certificate: "/placeholder.svg?height=300&width=400",
    link: "https://example.com",
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="achievements" className="py-20" ref={ref}>
      <motion.h2
        className="text-2xl font-bold mb-12 text-teal-400"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        05. Achievements
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={achievement.certificate || "/placeholder.svg"}
                alt={achievement.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 flex items-center">
                <Award className="text-teal-400 mr-2" size={20} />
                <span className="text-white font-medium">{achievement.date}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-slate-100">{achievement.title}</h3>
              <p className="text-slate-300 mb-4 text-sm">{achievement.description}</p>
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
              >
                View Certificate <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
