import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MediaGalleryHub } from "@/components/media-gallery-hub"

export const metadata = {
  title: "Media & Gallery | Frontiers Communications",
  description: "Explore our latest campaigns, events, and creative work",
}

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <MediaGalleryHub />
      <Footer />
    </main>
  )
}
