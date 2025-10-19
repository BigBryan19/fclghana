import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutPage } from "@/components/about-page"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutPage />
      <Footer />
    </main>
  )
}
