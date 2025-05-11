"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Code } from "lucide-react"
import Image from "next/image"

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
            href="https://github.com/Govindds1"
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
            href="https://linkedin.com/in/dsgovind"
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
            href="https://twitter.com/GovindR07896606"
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
            href="https://leetcode.com/Govindds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors"
            aria-label="LeetCode"
          >
            <Code size={20} />
          </Link>
        </li>
        <li>
          <div className="group">
            <Link
              href="https://geeksforgeeks.org/user/govindrajoj5c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors"
              aria-label="GeeksforGeeks"
            >
              <Image
                src="/images/geeksforgeeks-logo.png"
                alt="GeeksforGeeks"
                width={20}
                height={20}
                className="w-5 h-5 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </Link>
          </div>
        </li>
      </ul>
    </motion.div>
  )
}