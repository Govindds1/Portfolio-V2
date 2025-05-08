"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-teal-400">
          <div className="w-10 h-10 border-2 border-teal-400 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold">G</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "01. About", href: "#about" },
            { name: "02. Skills", href: "#skills" },
            { name: "03. Experience", href: "#experience" },
            { name: "04. Projects", href: "#projects" },
            { name: "05. Achievements", href: "#achievements" },
            { name: "06. Contact", href: "#contact" },
          ].map((item) => (
            <Link key={item.name} href={item.href} className="text-sm hover:text-teal-400 transition-colors">
              {item.name}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition-colors text-sm"
          >
            Resume
          </Link>
        </nav>

        <button className="md:hidden text-teal-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </motion.header>
  )
}
