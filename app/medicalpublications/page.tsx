
import { Footer } from "@/components/Footer"
import { Header } from '@/components/medicalPublications/Header'
import { SearchFilter } from '@/components/medicalPublications/SearchFilter'
import { ArticleCard } from '@/components/medicalPublications/ArticleCard'
import { Navbar } from '@/components/Navbar'

const articles = [
  {
    title: "Novel Targeted Therapies for Triple-Negative Breast Cancer",
    author: "Dr. Sarah Thompson",
    date: "2024-10-05",
    category: "Clinical Trials",
    abstract: "This article discusses the latest clinical trials focusing on targeted therapies for triple-negative breast cancer, offering new hope for patients.",
    imageUrl: "/placeholder.svg?height=100&width=100&text=ST"
  },
  {
    title: "AI in Early Detection of Breast Cancer",
    author: "Dr. David Lee",
    date: "2024-09-28",
    category: "Research",
    abstract: "Exploring how artificial intelligence is improving the early detection rates of breast cancer, potentially leading to better patient outcomes.",
    imageUrl: "/placeholder.svg?height=100&width=100&text=DL"
  },
  {
    title: "Combination Therapy Approaches in Metastatic Breast Cancer",
    author: "Dr. Rachel Green",
    date: "2024-09-20",
    category: "Treatment",
    abstract: "A comprehensive look at the effectiveness of various combination therapy approaches in treating metastatic breast cancer.",
    imageUrl: "/placeholder.svg?height=100&width=100&text=RG"
  },
  {
    title: "Emerging Biomarkers for Personalized Breast Cancer Treatment",
    author: "Dr. Alex Martinez",
    date: "2024-09-15",
    category: "Research",
    abstract: "This study identifies and analyzes new biomarkers that could lead to more personalized and effective breast cancer treatments.",
    imageUrl: "/placeholder.svg?height=100&width=100&text=AM"
  }
]

export default function MedicalPublicationsPage() {

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />
      <Header />
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <SearchFilter />
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}