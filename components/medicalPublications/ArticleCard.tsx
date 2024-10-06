'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

interface Article {
  title: string;
  author: string;
  date: string;
  category: string;
  abstract: string;
  imageUrl: string;
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="border-pink-200 hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="border-b border-pink-100">
        <CardTitle className="text-pink-800 text-lg sm:text-xl">{article.title}</CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6 border border-pink-300">
              <AvatarImage src={article.imageUrl} alt={article.author} />
              <AvatarFallback className="bg-pink-200 text-pink-700">{article.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <span className="text-pink-700 text-sm">{article.author}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="text-sm text-pink-600 mb-2 line-clamp-3">{article.abstract}</div>
        <div className="flex items-center space-x-2 text-xs sm:text-sm text-pink-500">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.category}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-pink-300 text-pink-600 hover:bg-pink-100 text-sm">
          <BookOpen className="mr-2 h-4 w-4" />
          Read Full Article
        </Button>
      </CardFooter>
    </Card>
  )
}