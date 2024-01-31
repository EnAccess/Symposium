const HeroSection = () => {
return (
    <div className="bg-[#0076BF] h-[700px] flex flex-col justify-center text-white text-center p-20">
      <div className="mb-4">
        <button className="text-sm bg-white text-blue-800 font-semibold py-2 px-4 rounded-full animate-pulse">
          Mark your calendar for 7-10 May 2024
        </button>
      </div>
      <h1 className="text-5xl font-bold mb-4 text-center">Open Source in Energy Access Symposium</h1>
      <p className="mb-8 text-center">Highlighting Open Source Technology: Key to advancing Energy Access through enhanced interoperability, cost efficiency, and quality.</p>
      <div className="flex justify-center space-x-4">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">
          View event schedule
        </button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">
          View event schedule
        </button>
      </div>
    </div>
)
}

export default HeroSection