import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center space-x-2">
        <Input 
          type="search" 
          placeholder="Search doctors..." 
          className="max-w-md border-pink-300 focus:ring-pink-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline" size="icon" className="border-pink-300 text-pink-500 hover:bg-pink-100">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </div>
  )
}