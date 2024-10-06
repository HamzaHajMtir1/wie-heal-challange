import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-pink-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Wie-Heal Challenge</h3>
            <p>Supporting cancer patients with hope, education, and connections to specialized care.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-pink-300">Home</Link></li>
              <li><Link href="#" className="hover:text-pink-300">About Us</Link></li>
              <li><Link href="#" className="hover:text-pink-300">Resources</Link></li>
              <li><Link href="#" className="hover:text-pink-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-pink-300"><Facebook /></Link>
              <Link href="#" className="hover:text-pink-300"><Twitter /></Link>
              <Link href="#" className="hover:text-pink-300"><Instagram /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="rounded-l-md" />
              <Button type="submit" className="bg-pink-500 hover:bg-pink-600 rounded-r-md">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-pink-600 text-center">
          <p>&copy; {new Date().getFullYear()} Wie-Heal Challenge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}