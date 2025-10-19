import Link from "next/link"
import { ArrowRight, Zap, Target, Palette, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Brand Strategy",
    description:
      "Develop a compelling brand identity that resonates with your target audience and sets you apart from competitors.",
  },
  {
    icon: Target,
    title: "Digital Marketing",
    description:
      "Leverage cutting-edge digital channels to reach your audience where they are and drive meaningful engagement.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description: "Generate qualified leads through targeted campaigns and conversion optimization strategies.",
  },
  {
    icon: Zap,
    title: "Content Creation",
    description: "Create compelling content that tells your story and drives action from your ideal customers.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Comprehensive marketing solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Explore All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
