"use client"

import { useState } from "react"
import Image from "next/image"

export function MediaGalleryHub() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Campaign", "Event", "Workshop", "Strategy", "Behind the Scenes"]

  const galleryItems = [
    {
      id: 1,
      title: "Brand Campaign Launch",
      category: "Campaign",
      image: "/brand-campaign-launch.jpg",
      description: "Successful brand campaign launch for a leading e-commerce client",
    },
    {
      id: 2,
      title: "Digital Marketing Event",
      category: "Event",
      image: "/digital-marketing-event.jpg",
      description: "Industry conference showcasing latest digital marketing trends",
    },
    {
      id: 3,
      title: "Social Media Strategy",
      category: "Strategy",
      image: "/social-media-strategy.png",
      description: "Strategic social media planning session with our creative team",
    },
    {
      id: 4,
      title: "Creative Workshop",
      category: "Workshop",
      image: "/creative-workshop.jpg",
      description: "Team workshop on innovative creative thinking and design",
    },
    {
      id: 5,
      title: "Client Presentation",
      category: "Campaign",
      image: "/client-presentation.jpg",
      description: "Presenting campaign results and strategy to stakeholders",
    },
    {
      id: 6,
      title: "Team Collaboration",
      category: "Behind the Scenes",
      image: "/team-collaboration.jpg",
      description: "Our talented team working together on creative projects",
    },
    {
      id: 7,
      title: "Media Production",
      category: "Campaign",
      image: "/media-production.jpg",
      description: "Professional media production for broadcast campaigns",
    },
    {
      id: 8,
      title: "Industry Networking",
      category: "Event",
      image: "/industry-networking.jpg",
      description: "Networking with industry leaders and marketing professionals",
    },
  ]

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Media & Gallery</h1>
          <p className="text-xl text-muted-foreground">
            Discover our latest campaigns, events, and behind-the-scenes moments
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer rounded-lg overflow-hidden bg-muted hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-accent font-medium">{item.category}</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
