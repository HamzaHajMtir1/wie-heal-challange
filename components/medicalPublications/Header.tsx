'use client';
import { Heart } from "lucide-react"

export function Header() {
  return (
    <header className=" top-0 z-50 border-b border-pink-200 bg-gradient-to-r from-pink-100 to-pink-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-pink-800">Cancer Research Publications</h1>
            <p className="mt-1 text-sm sm:text-base text-pink-600">Latest articles on cancer treatment and research</p>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500" />
            <span className="text-pink-700 font-semibold text-sm sm:text-base">October Rose Edition</span>
          </div>
        </div>
      </div>
    </header>
  )
}