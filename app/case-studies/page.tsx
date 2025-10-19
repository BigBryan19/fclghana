import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CaseStudiesPortfolio } from "@/components/case-studies-portfolio"

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CaseStudiesPortfolio />
      <Footer />
    </main>
  )
}
