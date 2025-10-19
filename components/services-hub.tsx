"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Palette, Target, TrendingUp, Zap, BarChart3, Users } from "lucide-react"

const allServices = [
  {
    id: "brand-strategy",
    icon: Palette,
    title: "Brand Strategy",
    shortDescription: "Develop a compelling brand identity",
    description:
      "We help you define your brand positioning, messaging, and visual identity that resonates with your target audience.",
    features: [
      "Brand positioning & messaging",
      "Visual identity design",
      "Brand guidelines development",
      "Competitive analysis",
      "Market research",
    ],
    price: "Starting at GHS 5,000",
  },
  {
    id: "digital-marketing",
    icon: Target,
    title: "Digital Marketing",
    shortDescription: "Reach your audience where they are",
    description:
      "Comprehensive digital marketing strategies across social media, email, SEO, and paid advertising to maximize your reach.",
    features: [
      "Social media management",
      "Email marketing campaigns",
      "SEO optimization",
      "PPC advertising",
      "Analytics & reporting",
    ],
    price: "Starting at GHS 3,000/month",
  },
  {
    id: "lead-generation",
    icon: TrendingUp,
    title: "Lead Generation",
    shortDescription: "Generate qualified leads consistently",
    description:
      "Targeted campaigns designed to attract, engage, and convert your ideal customers into qualified leads.",
    features: [
      "Lead magnet creation",
      "Landing page optimization",
      "Email nurture sequences",
      "Lead scoring & qualification",
      "CRM integration",
    ],
    price: "Starting at GHS 4,000/month",
  },
  {
    id: "content-creation",
    icon: Zap,
    title: "Content Creation",
    shortDescription: "Tell your story compellingly",
    description:
      "High-quality content that engages your audience, builds authority, and drives action across all channels.",
    features: [
      "Blog writing & strategy",
      "Video content production",
      "Social media content",
      "Copywriting",
      "Content calendar management",
    ],
    price: "Starting at GHS 2,500/month",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Reporting",
    shortDescription: "Measure what matters",
    description:
      "Comprehensive analytics setup and reporting to track performance, identify opportunities, and optimize campaigns.",
    features: [
      "Google Analytics setup",
      "Custom dashboards",
      "Monthly performance reports",
      "Conversion tracking",
      "ROI analysis",
    ],
    price: "Starting at GHS 1,500/month",
  },
  {
    id: "team-training",
    icon: Users,
    title: "Team Training",
    shortDescription: "Build internal expertise",
    description:
      "Train your team on the latest marketing tools, strategies, and best practices to build sustainable growth.",
    features: [
      "Marketing fundamentals",
      "Tool training (HubSpot, etc.)",
      "Strategy workshops",
      "Best practices training",
      "Ongoing support",
    ],
    price: "Custom pricing",
  },
]

export function ServicesHub() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Comprehensive marketing solutions tailored to your business needs and growth objectives
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allServices.map((service) => {
            const Icon = service.icon
            const isSelected = selectedService === service.id

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(isSelected ? null : service.id)}
                className={`p-8 rounded-xl border-2 transition-all cursor-pointer ${
                  isSelected ? "border-primary bg-primary/5 shadow-lg" : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-foreground/60 mb-4">{service.shortDescription}</p>

                {isSelected && (
                  <div className="space-y-4 pt-4 border-t border-border">
                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Key Features:</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-foreground/60 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="font-semibold text-primary pt-2">{service.price}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-sm"
                    >
                      Get Started
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="bg-primary/5 rounded-2xl p-12 mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understand your business, goals, and challenges" },
              { step: "02", title: "Strategy", description: "Develop a customized marketing strategy" },
              { step: "03", title: "Execution", description: "Implement campaigns with precision and care" },
              { step: "04", title: "Optimization", description: "Monitor, measure, and continuously improve" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
