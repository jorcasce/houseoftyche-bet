import casinos from '@/data/casinos'
import Link from 'next/link'

// Pre-render all known casino slugs
export function generateStaticParams() {
  return casinos.map(casino => ({ slug: casino.slug }))
}

// Custom SEO metadata per slug
export async function generateMetadata({ params }) {
  const casino = casinos.find(c => c.slug === params.slug)
  if (!casino) return {}

  return {
    title: `${casino.name} Review – Tyche Affiliate`,
    description: casino.description,
    openGraph: {
      title: `${casino.name} Review – Tyche Affiliate`,
      description: casino.description,
      images: [casino.logo],
    },
  }
}

export default function CasinoReviewPage({ params }) {
  const casino = casinos.find(c => c.slug === params.slug)
  if (!casino) return <div className="text-center py-20 text-white">Casino not found.</div>

  const theme = casino.theme || {
    background: 'from-gray-950 to-gray-900',
    accent: 'blue-500'
  }

  // Helper for Tailwind-safe accent button classes
  const accentButton = `bg-${theme.accent} hover:bg-${theme.accent.replace('500', '400')}`

  return (
    <main className={`min-h-screen bg-gradient-to-br ${theme.background} text-white`}>
      {/* Hero Banner */}
      <section className="relative h-48 flex items-center justify-center">
        <img
          src={casino.logo}
          alt={`${casino.name} background`}
          className="absolute inset-0 w-full h-full object-contain opacity-10 blur-sm"
        />
        <h1 className="relative text-3xl font-bold z-10">{casino.name} Review</h1>
      </section>

      {/* Breadcrumb */}
      <div className="text-sm px-6 py-2 text-gray-400">
        <Link href="/" className="hover:underline text-blue-400">← Back to all casinos</Link>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row px-6 py-6 gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Bonus Details</h2>
          <p className="mb-4">{casino.bonus}</p>

          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="mb-4 text-gray-300">{casino.description}</p>

          <h2 className="text-xl font-semibold mb-4">Pros & Cons</h2>
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2 text-green-400">✅ Pros</h3>
              <ul className="list-disc list-inside text-sm text-gray-300">
                {casino.pros?.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-red-400">❌ Cons</h3>
              <ul className="list-disc list-inside text-sm text-gray-300">
                {casino.cons?.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <a
            href={casino.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block text-white px-6 py-3 rounded transition ${accentButton}`}
          >
            Claim Your Bonus
          </a>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-gray-900 rounded-lg p-4 shadow-lg">
          {/* Logo */}
          <div className="mb-4 text-center">
            <img src={casino.logo} alt={`${casino.name} logo`} className="h-12 mx-auto rounded" />
          </div>

          {/* Rating */}
          <div className="mb-4 text-center">
            <h3 className="font-semibold mb-2">Rating</h3>
            <div className="flex justify-center">
              {[...Array(5)].map((_, idx) => (
                <svg
                  key={idx}
                  className={`h-5 w-5 ${
                    idx < Math.round(casino.rating) ? 'text-yellow-400' : 'text-gray-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.64 12.1.763 8.256l6.092-.883L10 2l3.146 5.373 6.091.883-4.878 3.844 1.517 5.99z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-center">Payments Accepted</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {(casino.payments || []).map((method, idx) => (
                <span key={idx} className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-200">
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Jurisdiction */}
          {casino.jurisdiction && (
            <div className="text-center text-sm text-gray-400 mt-4">
              Licensed in {casino.jurisdiction}
            </div>
          )}
        </aside>
      </div>
    </main>
  )
}
