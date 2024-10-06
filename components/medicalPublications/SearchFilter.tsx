'use client';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

export function SearchFilter() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
      <div className="flex w-full sm:w-auto items-center space-x-2">
        <Input 
          type="search" 
          placeholder="Search articles..." 
          className="max-w-[200px] sm:max-w-sm border-pink-300 focus:ring-pink-500"
        />
        <Button variant="outline" size="icon" className="border-pink-300 text-pink-500 hover:bg-pink-100">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </div>
  )
}