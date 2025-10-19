"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { ImageCarousel } from "./image-carousel"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const heroImages = [
    "/modern-marketing-office-with-team-collaboration.jpg",
    "/digital-marketing-strategy-session.jpg",
    "/creative-agency-workspace.jpg",
    "/business-analytics-dashboard.png",
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageCarousel images={heroImages} autoPlay={true} interval={5000} />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full">
              <span className="text-secondary font-semibold text-sm">Welcome to Frontiers</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your Brand Into a <span className="text-accent">Market Leader</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We combine strategic thinking with creative excellence to deliver marketing solutions that drive real
              business growth and generate qualified leads.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-white/95 border border-white/20 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 font-semibold whitespace-nowrap"
              >
                Get Started
                <ArrowRight size={20} />
              </button>
            </div>
            {submitted && (
              <div className="flex items-center justify-center gap-2 text-white">
                <CheckCircle size={20} />
                <span>Thanks! We'll be in touch soon.</span>
              </div>
            )}
          </form>

          <div className="flex flex-wrap gap-8 pt-8 justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">50+</p>
              <p className="text-white/80 text-sm">Successful Campaigns</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">200%</p>
              <p className="text-white/80 text-sm">Avg. ROI Increase</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">15+</p>
              <p className="text-white/80 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
