import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactPage } from "@/components/contact-page"

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactPage />
      <Footer />
    </main>
  )
}
