'use client';

export function Footer() {
  return (
    <footer className="bg-pink-700 text-white py-8 mt-8 pt-8 border-t border-pink-600 text-center">
        <p>&copy; {new Date().getFullYear()} Wie Care. All rights reserved.</p>
    </footer>
  )
}