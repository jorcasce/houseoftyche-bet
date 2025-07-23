'use client'
import Link from 'next/link'

const featured = [
  {
    name: 'Stake',
    slug: 'stake',
    logo: '/casino-logos/stake.png',
    rating: 4.7,
  },
  {
    name: 'Roobet',
    slug: 'roobet',
    logo: '/casino-logos/roobet.png',
    rating: 4.5,
  },
  {
    name: 'BC.Game',
    slug: 'bcgame',
    logo: '/casino-logos/bcgame.png',
    rating: 4.6,
  },
]

export default function FeaturedCasinos() {
  return (
    <section className="mt-10 px-6">
      <h2 className="text-2xl font-semibold mb-4">Top Casinos This Week</h2>
      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
        {featured.map((casino) => (
          <Link
            key={casino.slug}
            href={`/casino/${casino.slug}`}
            className="min-w-[180px] bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-yellow-400 transition"
          >
            <img
              src={casino.logo}
              alt={`${casino.name} logo`}
              className="h-12 mx-auto mb-2"
            />
            <p className="text-center font-medium">{casino.name}</p>
            <p className="text-sm text-gray-400 text-center">⭐ {casino.rating}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
