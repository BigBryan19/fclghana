"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    id: "techstore-ghana",
    title: "E-Commerce Growth",
    client: "TechStore Ghana",
    industry: "Retail & E-Commerce",
    challenge:
      "Traditional retailer struggling to transition to online sales with minimal digital presence and no e-commerce infrastructure.",
    solution:
      "Comprehensive digital transformation including e-commerce platform setup, digital marketing strategy, and lead generation campaigns.",
    results: [
      { metric: "250%", description: "Increase in online sales" },
      { metric: "45%", description: "Reduction in customer acquisition cost" },
      { metric: "3.2x", description: "Return on marketing investment" },
    ],
    services: ["Digital Marketing", "E-Commerce Strategy", "Lead Generation"],
    testimonial:
      "Frontiers transformed our business from a struggling brick-and-mortar store to a thriving online retailer. Their expertise and dedication were invaluable.",
    testimonialAuthor: "John Mensah, CEO",
    image: "/ecommerce-store.jpg",
  },
  {
    id: "heritage-foods",
    title: "Brand Repositioning",
    client: "Heritage Foods",
    industry: "Food & Beverage",
    challenge:
      "Established brand losing market share to competitors with outdated brand perception and weak digital presence.",
    solution:
      "Complete brand overhaul including new positioning, visual identity, and integrated marketing campaign across all channels.",
    results: [
      { metric: "45%", description: "Market share increase" },
      { metric: "2.5x", description: "Brand awareness growth" },
      { metric: "60%", description: "Increase in customer loyalty" },
    ],
    services: ["Brand Strategy", "Content Creation", "Digital Marketing"],
    testimonial:
      "The team at Frontiers didn't just rebrand us—they repositioned us as a premium, modern brand. Our sales have never been better.",
    testimonialAuthor: "Ama Osei, Marketing Director",
    image: "/food-beverage-brand.jpg",
  },
  {
    id: "b2b-services",
    title: "Lead Generation System",
    client: "B2B Services Ltd",
    industry: "Business Services",
    challenge:
      "B2B company with inconsistent lead flow, long sales cycles, and difficulty reaching decision-makers in target market.",
    solution:
      "Implemented targeted lead generation system with account-based marketing, content strategy, and CRM integration.",
    results: [
      { metric: "500+", description: "Qualified leads monthly" },
      { metric: "35%", description: "Improvement in conversion rate" },
      { metric: "4.5x", description: "Sales pipeline growth" },
    ],
    services: ["Lead Generation", "Content Creation", "Analytics"],
    testimonial:
      "Frontiers built us a lead generation machine. We went from struggling to find prospects to having more qualified leads than we can handle.",
    testimonialAuthor: "Kwame Boateng, Sales Director",
    image: "/business-services.jpg",
  },
  {
    id: "startup-launch",
    title: "Startup Launch Campaign",
    client: "InnovateTech Startup",
    industry: "Technology",
    challenge: "New startup with limited budget, no brand awareness, and need to establish market presence quickly.",
    solution: "Lean marketing strategy focusing on content marketing, community building, and strategic partnerships.",
    results: [
      { metric: "10K+", description: "Website visitors in first month" },
      { metric: "2K+", description: "Email subscribers acquired" },
      { metric: "15%", description: "Conversion rate to trial users" },
    ],
    services: ["Brand Strategy", "Content Creation", "Lead Generation"],
    testimonial:
      "Frontiers helped us punch above our weight. They understood our constraints and delivered results that exceeded our expectations.",
    testimonialAuthor: "Abena Mensah, Founder",
    image: "/tech-startup.jpg",
  },
  {
    id: "nonprofit-awareness",
    title: "Nonprofit Awareness Campaign",
    client: "Ghana Education Foundation",
    industry: "Nonprofit",
    challenge:
      "Nonprofit organization with limited budget struggling to raise awareness and donations for their education programs.",
    solution: "Strategic storytelling campaign leveraging social media, email marketing, and community partnerships.",
    results: [
      { metric: "300%", description: "Increase in donations" },
      { metric: "50K+", description: "Social media reach" },
      { metric: "1000+", description: "New supporters acquired" },
    ],
    services: ["Content Creation", "Social Media", "Fundraising Strategy"],
    testimonial:
      "Frontiers helped us tell our story in a way that resonated with donors. Their work has directly impacted our ability to serve more students.",
    testimonialAuthor: "Dr. Kwesi Asante, Executive Director",
    image: "/nonprofit-education.jpg",
  },
  {
    id: "luxury-brand",
    title: "Premium Brand Positioning",
    client: "Luxe Hospitality Group",
    industry: "Hospitality & Luxury",
    challenge:
      "Luxury hotel group competing in crowded market, struggling to differentiate and attract high-value guests.",
    solution:
      "Premium brand positioning with luxury-focused content strategy, influencer partnerships, and exclusive marketing.",
    results: [
      { metric: "40%", description: "Increase in booking rates" },
      { metric: "25%", description: "Higher average room rates" },
      { metric: "95%", description: "Guest satisfaction score" },
    ],
    services: ["Brand Strategy", "Content Creation", "Influencer Marketing"],
    testimonial:
      "Frontiers elevated our brand to match the luxury experience we provide. Our guests now see us as the premier choice in the region.",
    testimonialAuthor: "Nana Boateng, General Manager",
    image: "/luxury-hotel.jpg",
  },
]

export function CaseStudiesPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", ...new Set(caseStudies.map((cs) => cs.industry))]

  const filteredStudies =
    selectedCategory === "all" ? caseStudies : caseStudies.filter((cs) => cs.industry === selectedCategory)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">Case Studies</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Real results from real clients. See how we've transformed businesses across industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary/50"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {filteredStudies.map((study, idx) => (
            <div
              key={study.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              {/* Image */}
              <div className={`${idx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl overflow-hidden h-96 flex items-center justify-center">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-secondary font-semibold text-sm mb-2">CASE STUDY</p>
                    <h2 className="text-4xl font-bold text-foreground">{study.title}</h2>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Client</p>
                    <p className="text-lg font-semibold text-foreground">{study.client}</p>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Challenge</h3>
                    <p className="text-foreground/70">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Solution</h3>
                    <p className="text-foreground/70">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-6 bg-primary/5 rounded-xl border border-primary/20">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-2xl font-bold text-primary mb-1">{result.metric}</p>
                      <p className="text-foreground/60 text-sm">{result.description}</p>
                    </div>
                  ))}
                </div>

                {/* Services */}
                <div className="mb-6">
                  <p className="text-foreground/60 text-sm mb-2">Services</p>
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-semibold"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-card border border-border rounded-xl p-6 mb-6">
                  <p className="text-foreground/70 italic mb-4">"{study.testimonial}"</p>
                  <p className="font-semibold text-foreground">{study.testimonialAuthor}</p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Get Similar Results
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Ready to be our next success story?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-semibold text-lg"
          >
            Schedule a Consultation
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}
