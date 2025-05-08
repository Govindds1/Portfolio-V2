"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Code, BookOpen } from "lucide-react"

export default function SocialSidebar() {
  return (
    <motion.div
      className="fixed left-8 bottom-0 hidden md:flex flex-col items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <ul className="flex flex-col gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate-400 after:mx-auto after:mt-6">
        <li>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </Link>
        </li>
        <li>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </Link>
        </li>
        <li>
          <Link
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors"
            aria-label="LeetCode"
          >
            <Code size={20} />
          </Link>
        </li>
        <li>
          <Link
            href="https://geeksforgeeks.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors"
            aria-label="GeeksforGeeks"
          >
            <BookOpen size={20} />
          </Link>
        </li>
      </ul>
    </motion.div>
  )
}
