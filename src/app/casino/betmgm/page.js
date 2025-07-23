import casinos from '@/data/casinos'

export function generateStaticParams() {
  return casinos.map(casino => ({ slug: casino.slug }))
}

export default function CasinoReviewPage({ params }) {
  const { slug } = params
  const casino = casinos.find(c => c.slug === slug)

  if (!casino) {
    return <div className="text-center py-20 text-white">Casino not found.</div>
  }

  return (
    <main className="bg-gray-950 text-white min-h-screen p-6">
      <div className="max-w-xl mx-auto text-center">
        <img src={casino.logo} alt={`${casino.name} logo`} className="h-12 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">{casino.name} Review</h1>
        <p className="mb-4 text-sm text-gray-400">{casino.description}</p>

        <div className="text-lg mb-4">
          <strong>Bonus:</strong> {casino.bonus}
        </div>

        <div className="flex justify-center mb-4">
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

        <a
          href={casino.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-400 transition"
        >
          Claim Your Bonus
        </a>
      </div>
    </main>
  )
}
