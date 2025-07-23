import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'House of Tyche',
  description: 'Affiliate casino reviews with style and substance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        {/* Global Header */}
        <header className="bg-black text-white py-4 px-6 flex justify-between items-center shadow">
          <h1 className="text-xl font-bold">House of Tyche</h1>
          <nav className="space-x-6">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <Link href="/casino" className="hover:text-yellow-400">Casinos</Link>
            <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
          </nav>
        </header>

        {/* Page Content */}
        <main className="min-h-screen">{children}</main>

        {/* Global Footer */}
        <footer className="bg-gray-900 text-center text-gray-400 py-6">
          <p>&copy; {new Date().getFullYear()} House of Tyche. All rights reserved.</p>
          <p className="text-sm mt-1">Affiliate disclosure · Privacy policy · Terms</p>
        </footer>
      </body>
    </html>
  )
}
