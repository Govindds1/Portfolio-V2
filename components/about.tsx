"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="py-20" ref={ref}>
      <motion.h2
        className="text-2xl font-bold mb-12 text-teal-400"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        01. About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-slate-300 mb-4">
            Hello! I&apos;m Govind, a passionate developer with a strong foundation in Data Structures and Algorithms. My
            journey in tech began with a curiosity about how things work under the hood, which led me to dive deep into
            algorithmic problem-solving.
          </p>
          <p className="text-slate-300 mb-4">
            I enjoy creating efficient, scalable solutions that make a difference. Whether it&apos;s optimizing code
            performance or designing intuitive user interfaces, I&apos;m always looking for ways to improve and innovate.
          </p>
          <p className="text-slate-300">
            When I&apos;m coding, you can find me contributing to open-source projects, participating in coding
            competitions, or exploring new technologies to expand my skill set.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-64 h-64 md:w-80 md:h-80"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute inset-0 border-2 border-teal-400 rounded-md translate-x-5 translate-y-5"></div>
          <div className="relative w-full h-full overflow-hidden rounded-md group">
            <Image
              src="/images/govind.png"
              alt="Govind Raj"
              width={320}
              height={320}
              className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-transparent transition-opacity duration-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}