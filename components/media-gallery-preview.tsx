"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function MediaGalleryPreview() {
  const galleryItems = [
    {
      id: 1,
      title: "Brand Campaign Launch",
      category: "Campaign",
      image: "/brand-campaign-launch.jpg",
    },
    {
      id: 2,
      title: "Digital Marketing Event",
      category: "Event",
      image: "/digital-marketing-event.jpg",
    },
    {
      id: 3,
      title: "Social Media Strategy",
      category: "Strategy",
      image: "/social-media-strategy.png",
    },
    {
      id: 4,
      title: "Creative Workshop",
      category: "Workshop",
      image: "/creative-workshop.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">Media & Gallery</h2>
            <p className="text-lg text-muted-foreground">Explore our latest campaigns, events, and creative work</p>
          </div>
          <Link
            href="/media"
            className="hidden sm:flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-muted aspect-square cursor-pointer"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex flex-col justify-end p-4">
                <span className="text-sm text-accent mb-2">{item.category}</span>
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/media"
          className="sm:hidden flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          View All <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  )
}
