"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

const serviceDetails: Record<
  string,
  {
    title: string
    description: string
    fullDescription: string
    benefits: string[]
    deliverables: string[]
    timeline: string
    investment: string
  }
> = {
  "brand-strategy": {
    title: "Brand Strategy",
    description: "Develop a compelling brand identity",
    fullDescription:
      "A strong brand strategy is the foundation of all successful marketing. We work with you to define your unique value proposition, positioning, and messaging that resonates with your target audience.",
    benefits: [
      "Clear brand differentiation in the market",
      "Consistent messaging across all channels",
      "Increased brand recognition and recall",
      "Premium pricing power",
      "Stronger customer loyalty",
      "Easier recruitment and retention",
    ],
    deliverables: [
      "Brand positioning statement",
      "Messaging framework",
      "Visual identity guidelines",
      "Brand voice and tone guide",
      "Competitive analysis report",
      "Brand implementation roadmap",
    ],
    timeline: "4-6 weeks",
    investment: "GHS 5,000 - 15,000",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Reach your audience where they are",
    fullDescription:
      "Digital marketing encompasses all marketing efforts that use digital channels. We create integrated campaigns across social media, email, search, and paid advertising to maximize your reach and ROI.",
    benefits: [
      "Increased online visibility",
      "Higher quality leads",
      "Better customer engagement",
      "Measurable results and ROI",
      "Cost-effective compared to traditional marketing",
      "Real-time optimization capabilities",
    ],
    deliverables: [
      "Digital marketing strategy",
      "Social media content calendar",
      "Email marketing campaigns",
      "SEO optimization plan",
      "PPC campaign setup",
      "Monthly performance reports",
    ],
    timeline: "Ongoing (minimum 3 months)",
    investment: "GHS 3,000 - 10,000/month",
  },
  "lead-generation": {
    title: "Lead Generation",
    description: "Generate qualified leads consistently",
    fullDescription:
      "Lead generation is the process of attracting and converting prospects into customers. We use targeted strategies to build a consistent pipeline of qualified leads for your sales team.",
    benefits: [
      "Consistent flow of qualified leads",
      "Reduced sales cycle length",
      "Lower customer acquisition cost",
      "Predictable revenue growth",
      "Better sales and marketing alignment",
      "Scalable growth system",
    ],
    deliverables: [
      "Lead generation strategy",
      "Landing pages and forms",
      "Lead magnet creation",
      "Email nurture sequences",
      "Lead scoring system",
      "CRM setup and integration",
    ],
    timeline: "6-8 weeks to first leads",
    investment: "GHS 4,000 - 12,000/month",
  },
  "content-creation": {
    title: "Content Creation",
    description: "Tell your story compellingly",
    fullDescription:
      "Content is king in digital marketing. We create high-quality, engaging content that tells your story, builds authority, and drives action across all channels.",
    benefits: [
      "Increased website traffic",
      "Improved search engine rankings",
      "Higher engagement rates",
      "Established thought leadership",
      "Better customer relationships",
      "More qualified leads",
    ],
    deliverables: [
      "Content strategy and calendar",
      "Blog posts and articles",
      "Social media content",
      "Video scripts and production",
      "Email newsletters",
      "Case studies and whitepapers",
    ],
    timeline: "Ongoing (minimum 3 months)",
    investment: "GHS 2,500 - 8,000/month",
  },
  analytics: {
    title: "Analytics & Reporting",
    description: "Measure what matters",
    fullDescription:
      "Data-driven decision making is essential for marketing success. We set up comprehensive analytics and provide regular reporting to track performance and identify optimization opportunities.",
    benefits: [
      "Clear visibility into marketing performance",
      "Data-driven decision making",
      "Identification of optimization opportunities",
      "Proof of marketing ROI",
      "Better budget allocation",
      "Continuous improvement",
    ],
    deliverables: [
      "Analytics platform setup",
      "Custom dashboards",
      "Monthly performance reports",
      "Conversion tracking setup",
      "Attribution modeling",
      "Quarterly strategy reviews",
    ],
    timeline: "2-3 weeks setup",
    investment: "GHS 1,500 - 5,000/month",
  },
  "team-training": {
    title: "Team Training",
    description: "Build internal expertise",
    fullDescription:
      "Empower your team with the knowledge and skills to execute marketing strategies effectively. We provide training on tools, strategies, and best practices.",
    benefits: [
      "Increased team capability",
      "Better marketing execution",
      "Reduced dependency on external agencies",
      "Faster decision making",
      "Improved team morale",
      "Long-term cost savings",
    ],
    deliverables: [
      "Customized training curriculum",
      "Hands-on workshops",
      "Tool training and certification",
      "Best practices documentation",
      "Ongoing support and coaching",
      "Training materials and resources",
    ],
    timeline: "4-8 weeks",
    investment: "Custom pricing",
  },
}

export function ServiceDetail({ serviceId }: { serviceId: string }) {
  const service = serviceDetails[serviceId]

  if (!service) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-foreground/60 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Back to Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/services" className="text-primary hover:text-primary/80 transition-colors mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-5xl font-bold text-foreground mb-4">{service.title}</h1>
          <p className="text-xl text-foreground/60">{service.fullDescription}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Key Benefits</h2>
              <div className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground/70">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What You'll Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.deliverables.map((deliverable, idx) => (
                  <div key={idx} className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-foreground font-semibold">{deliverable}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-4">
              <div>
                <p className="text-foreground/60 text-sm mb-1">Timeline</p>
                <p className="text-lg font-semibold text-foreground">{service.timeline}</p>
              </div>
              <div className="border-t border-primary/20 pt-4">
                <p className="text-foreground/60 text-sm mb-1">Investment</p>
                <p className="text-lg font-semibold text-primary">{service.investment}</p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-center flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>

            {/* Additional Info */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Ready to discuss?</h3>
              <p className="text-foreground/60 text-sm mb-4">
                Let's talk about how this service can help your business grow.
              </p>
              <Link
                href="/contact"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
              >
                Schedule a consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
