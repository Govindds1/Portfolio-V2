"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function EmailSidebar() {
  return (
    <motion.div
      className="fixed right-8 bottom-0 hidden md:flex flex-col items-center"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Link
        href="mailto:govindrajgaya786@gmail.com"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        className="text-slate-400 hover:text-teal-400 transition-colors mb-3"
        aria-label="Email"
      >
        govindrajgaya786@gmail.com
      </Link>
      <div className="w-px h-24 bg-slate-400"></div>
    </motion.div>
  )
}