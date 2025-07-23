export default function Filters({ selected, onChange }) {
  return (
    <div className="flex gap-4 justify-center mb-6">
      <button
        onClick={() => onChange('rating')}
        className={`px-4 py-2 rounded ${
          selected === 'rating' ? 'bg-blue-500' : 'bg-gray-700'
        }`}
      >
        Sort by Rating
      </button>
      <button
        onClick={() => onChange('bonusValue')}
        className={`px-4 py-2 rounded ${
          selected === 'bonusValue' ? 'bg-blue-500' : 'bg-gray-700'
        }`}
      >
        Sort by Bonus
      </button>
    </div>
  )
}
