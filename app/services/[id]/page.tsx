import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/service-detail"

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiceDetail serviceId={params.id} />
      <Footer />
    </main>
  )
}
