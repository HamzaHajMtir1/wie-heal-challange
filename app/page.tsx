
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/Home/HeroSection"
import { VideoSection } from "@/components/Home/VideoSection"
import { Navbar } from "@/components/Navbar"
import { Feedbacks } from "@/components/Home/Feedbacks"

export default function HomePageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-pink-50">
      <Navbar />
      <main>
        <HeroSection />
        <Feedbacks />
        <VideoSection />
      </main>
      <Footer />
    </div>
  )
}