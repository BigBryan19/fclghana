"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ImageCarousel } from "./image-carousel"
import { useState } from "react"

const caseStudies = [
  {
    title: "E-Commerce Growth",
    client: "TechStore Ghana",
    result: "250% increase in online sales",
    description:
      "Strategic digital marketing campaign that transformed a traditional retailer into an e-commerce powerhouse.",
    images: ["/ecommerce-store-interface.png", "/online-shopping-dashboard.jpg", "/digital-retail-platform.jpg"],
  },
  {
    title: "Brand Repositioning",
    client: "Heritage Foods",
    result: "45% market share increase",
    description:
      "Complete brand overhaul and market repositioning that elevated brand perception and customer loyalty.",
    images: ["/food-brand-packaging-design.jpg", "/restaurant-branding.png", "/food-product-marketing.jpg"],
  },
  {
    title: "Lead Generation",
    client: "B2B Services Ltd",
    result: "500+ qualified leads monthly",
    description: "Targeted lead generation campaign that established consistent pipeline of high-quality prospects.",
    images: ["/business-analytics-dashboard.png", "/lead-management-system.jpg", "/sales-pipeline-visualization.jpg"],
  },
]

export function CaseStudiesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Case Studies</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Real results from real clients. See how we've transformed businesses across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 bg-card overflow-hidden">
                <ImageCarousel images={study.images} autoPlay={hoveredIndex === index} interval={3000} />
              </div>

              <div className="p-8 bg-card">
                <div className="mb-4">
                  <p className="text-secondary font-semibold text-sm mb-2">CASE STUDY</p>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{study.title}</h3>
                  <p className="text-foreground/60 text-sm">{study.client}</p>
                </div>
                <p className="text-lg font-semibold text-primary mb-4">{study.result}</p>
                <p className="text-foreground/70 leading-relaxed">{study.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            View All Case Studies
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
