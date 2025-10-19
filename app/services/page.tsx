import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHub } from "@/components/services-hub"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesHub />
      <Footer />
    </main>
  )
}
