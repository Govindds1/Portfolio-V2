"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20" ref={ref}>
      <motion.h2
        className="text-2xl font-bold mb-4 text-teal-400"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        06. Get In Touch
      </motion.h2>

      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-slate-300 mb-8">
          I'm currently looking for new opportunities to apply my skills in algorithm design and frontend development.
          Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>

        <motion.a
          href="mailto:hello@govindraj.dev"
          className="inline-flex items-center px-6 py-3 bg-teal-400 text-slate-900 rounded-md font-medium hover:bg-teal-300 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="mr-2" size={20} />
          Say Hello
        </motion.a>
      </motion.div>
    </section>
  )
}
