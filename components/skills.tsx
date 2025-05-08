"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
  { name: "JavaScript", percentage: 90 },
  { name: "React", percentage: 85 },
  { name: "Data Structures", percentage: 95 },
  { name: "Algorithms", percentage: 90 },
  { name: "Node.js", percentage: 80 },
  { name: "TypeScript", percentage: 85 },
  { name: "Python", percentage: 75 },
  { name: "UI/UX Design", percentage: 70 },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20" ref={ref}>
      <motion.h2
        className="text-2xl font-bold mb-12 text-teal-400"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        02. Skills
      </motion.h2>

      <div className="grid grid-cols-1 gap-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="w-full">
            <div className="flex justify-between mb-2">
              <span className="text-slate-300">{skill.name}</span>
              <span className="text-teal-400">{skill.percentage}%</span>
            </div>
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-teal-400"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.1 * index }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
