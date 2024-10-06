import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export function VideoSection() {
  return (
    <section className="py-20 bg-pink-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-8">Learn More About Our Mission</h2>
        <div className="relative w-full max-w-3xl mx-auto aspect-video bg-pink-200 rounded-lg shadow-xl overflow-hidden">
          <Button className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-pink-500 hover:bg-pink-600 text-white flex items-center justify-center">
            <Play className="h-10 w-10" />
          </Button>
          <Image
            src="/placeholder.svg?height=480&width=640&text=Video+Thumbnail"
            alt="Video thumbnail"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}