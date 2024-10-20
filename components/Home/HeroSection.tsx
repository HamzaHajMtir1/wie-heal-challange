import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-pink-300 to-pink-100 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">Support, Educate, Empower</h1>
          <p className="text-xl text-pink-700 mb-8">Join the We Care and connect with specialized doctors, access valuable resources, and find hope in your cancer journey.</p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg">
            Get Started
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/home/hero.webp"
            alt="Cancer support illustration"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}