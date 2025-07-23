'use client'

import { useState } from 'react'
import casinos from '../data/casinos'
import CasinoCard from './components/CasinoCard'
import Filters from './components/Filters'

export default function CasinoReviewPage() {
  const [sortBy, setSortBy] = useState('rating')

  const sortedCasinos = [...casinos].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'bonusValue') return b.bonusValue - a.bonusValue
    return 0
  })

  return (
    <main className="bg-gray-950 text-white p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Top Online Casinos</h1>

      <Filters selected={sortBy} onChange={setSortBy} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {sortedCasinos.map((casino, idx) => (
          <CasinoCard key={idx} {...casino} />
        ))}
      </div>
    </main>
  )
}
