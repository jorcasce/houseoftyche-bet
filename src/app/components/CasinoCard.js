export default function CasinoCard({ name, bonus, link, logo, rating }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
      {/* Logo */}
      <div className="mb-4 text-center">
        <img src={logo} alt={`${name} logo`} className="h-12 mx-auto rounded" />
      </div>

      {/* Name + Bonus */}
      <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
      <p className="mb-2 text-sm text-center">{bonus}</p>

      {/* Star Rating */}
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, idx) => (
          <svg
            key={idx}
            className={`h-5 w-5 ${
              idx < rating ? 'text-yellow-400' : 'text-gray-600'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09L5.64 12.1.763 8.256l6.092-.883L10 2l3.146 5.373 6.091.883-4.878 3.844 1.517 5.99z" />
          </svg>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
        >
          Play Now
        </a>
      </div>
    </div>
  );
}
