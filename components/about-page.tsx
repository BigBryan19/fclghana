import Link from "next/link"
import { ArrowRight, Award, Users, Target, Zap } from "lucide-react"

const teamMembers = [
  {
    name: "Kwame Boateng",
    role: "Founder & CEO",
    bio: "15+ years of marketing experience with a track record of building successful brands and driving growth.",
    image: "/placeholder.svg?key=team1",
  },
  {
    name: "Ama Osei",
    role: "Head of Strategy",
    bio: "Strategic marketing expert specializing in brand positioning and market expansion for B2B and B2C companies.",
    image: "/placeholder.svg?key=team2",
  },
  {
    name: "Nana Mensah",
    role: "Creative Director",
    bio: "Award-winning creative professional with expertise in brand identity, content creation, and visual storytelling.",
    image: "/placeholder.svg?key=team3",
  },
  {
    name: "Abena Mensah",
    role: "Lead Generation Specialist",
    bio: "Data-driven marketer focused on building scalable lead generation systems and optimizing conversion funnels.",
    image: "/placeholder.svg?key=team4",
  },
]

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We focus on measurable outcomes and ROI. Every strategy is designed to deliver tangible business results.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We partner with you as an extension of your team, not just a vendor.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards of quality in everything we do, from strategy to execution.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We stay ahead of industry trends and leverage cutting-edge tools and strategies to give you a competitive edge.",
  },
]

export function AboutPage() {
  return (
    <section className="bg-background">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">About Frontiers Communications</h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              We're a team of marketing strategists, creative professionals, and data experts dedicated to helping
              businesses transform their marketing and achieve sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Frontiers Communications was founded in 2010 with a simple mission: to help businesses in Ghana and
                  across Africa achieve their marketing goals through strategic thinking and creative excellence.
                </p>
                <p>
                  What started as a small team of passionate marketers has grown into a full-service marketing agency
                  trusted by over 100 clients across various industries. We've helped businesses generate millions in
                  revenue through strategic marketing initiatives.
                </p>
                <p>
                  Today, we continue to evolve and innovate, staying at the forefront of marketing trends and
                  technologies to deliver exceptional results for our clients.
                </p>
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
              <img
                src="/placeholder.svg?key=about-story"
                alt="Our Story"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              These core values guide everything we do and how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="p-6 bg-card border border-border rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-foreground/60">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              A talented group of marketing professionals dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-secondary font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-foreground/60 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-foreground/60">Years in Business</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">100+</p>
              <p className="text-foreground/60">Clients Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-foreground/60">Successful Campaigns</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">$50M+</p>
              <p className="text-foreground/60">Revenue Generated</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Let's discuss how we can help your business achieve its marketing goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-semibold text-lg"
            >
              Get in Touch
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
