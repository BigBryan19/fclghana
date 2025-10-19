import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { TrustedClients } from "@/components/trusted-clients"
import { CaseStudiesPreview } from "@/components/case-studies-preview"
import { MediaGalleryPreview } from "@/components/media-gallery-preview"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesPreview />
      <TrustedClients />
      <CaseStudiesPreview />
      <MediaGalleryPreview />
      <CTASection />
      <Footer />
    </main>
  )
}
