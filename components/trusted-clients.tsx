"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function TrustedClients() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("trusted-clients")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const clients = [
    { name: "Soklin", logo: "/logos/soklin.png" },
    { name: "Old Mutual", logo: "/logos/oldmutual.png" },
    { name: "BetYu", logo: "/logos/betyu.png" },
    { name: "Inesfly Africa", logo: "/logos/inesfly.png" },
    { name: "Glo", logo: "/logos/glo.png" },
    { name: "FNB", logo: "/logos/fnb.png" },
    { name: "NPA", logo: "/logos/npa.png" },
  ]

  return (
    <section id="trusted-clients" className="py-16 md:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Network</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Leading Brands</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've partnered with innovative companies across industries to drive growth and transform their marketing
            strategies.
          </p>
        </div>

        <div className="relative overflow-hidden bg-card border border-border rounded-lg py-8 md:py-12">
          <style>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .marquee-container {
              display: flex;
              animation: scroll-left 40s linear infinite;
            }
            
            .marquee-container:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="marquee-container">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center px-8 md:px-12 flex-shrink-0 min-w-max"
              >
                <div className="h-16 md:h-20 flex items-center justify-center">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={80}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center px-8 md:px-12 flex-shrink-0 min-w-max"
              >
                <div className="h-16 md:h-20 flex items-center justify-center">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={80}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-20 pt-12 md:pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</p>
            <p className="text-sm md:text-base text-muted-foreground">Active Clients</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</p>
            <p className="text-sm md:text-base text-muted-foreground">Industries Served</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">200+</p>
            <p className="text-sm md:text-base text-muted-foreground">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
