"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Typed from "typed.js"

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Full-stack Developer", "UI/UX Designer", "Open Source Contributor", "Web Developer","Freelance Web Developer", "Frontend Engineer", "Design Systems Contributor"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-teal-400 mb-4">Hi, my name is</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-slate-100">Govind Raj</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-400 mb-6">
          <span ref={typedRef}></span>
        </h2>
        <p className="text-slate-400 max-w-xl mb-8">
        I specialize in building efficient, scalable solutions with a focus on performance and clean architecture.
        Passionate about crafting elegant code to solve complex real-world problems.
        </p>
        <motion.a
          href="#experience"
          className="inline-block px-6 py-3 bg-teal-400 text-slate-900 rounded-md font-medium hover:bg-teal-300 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Experience
        </motion.a>
      </motion.div>
    </section>
  )
}