import FeaturedCasinos from './components/FeaturedCasinos'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="relative text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-purple-900 z-0" />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Welcome to <span className="text-yellow-400">House of Tyche</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Discover the best online casinos with honest reviews, exclusive bonuses, and fast payout insights — all curated with affiliate precision.
        </p>

      <Link href="/casino" passHref>
        <div className="mt-8 inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">
          Browse Casinos
        </div>
      </Link>


      </div>

      {/* Featured Casino Strip */}
      <div className="relative z-10">
        <FeaturedCasinos />
      </div>
    </main>
  )
}
