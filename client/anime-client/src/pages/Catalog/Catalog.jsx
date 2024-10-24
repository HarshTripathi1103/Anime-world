import React, { useState, useEffect } from 'react';

const Catalog = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch anime data from Jikan API
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=24');
        const data = await response.json();
        setAnimeList(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching anime:', error);
        setLoading(false);
      }
    };

    fetchAnime();
    setIsLoaded(true);
  }, []);

  // Search functionality
  const handleSearch = async () => {
    if (searchQuery.trim()) {
      try {
        setLoading(true);
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery}&limit=24`);
        const data = await response.json();
        setAnimeList(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error searching anime:', error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Elements from Intro Page */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 animate-gradient-x">
        <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center" />
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 w-full p-4 flex justify-between items-center z-50 transition-all duration-700 backdrop-blur-sm bg-black/30 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}>
        <div className="text-2xl font-bold relative group">
          <span className="relative z-10">AnimeWorld</span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </div>
        <div className="flex items-center gap-6">
          <button className="hover:text-purple-400 transition-all duration-300 hover:rotate-180">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button className="hover:text-purple-400 transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative min-h-screen">
        {/* Search Section */}
        <div className="pt-20 pb-10 px-4">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="flex gap-4 mb-8">
              <input
                type="text"
                placeholder="Search anime..."
                className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button
                onClick={handleSearch}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Anime Grid */}
        <div className="px-4 pb-20">
          <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            {loading ? (
              <div className="flex justify-center items-center min-h-[400px]">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {animeList.map((anime, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="w-full bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                      <div className="relative aspect-[3/4]">
                        <img
                          src={anime.images?.jpg?.large_image_url || '/api/placeholder/300/400'}
                          alt={anime.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                        <div className={`absolute inset-0 bg-purple-500/10 transform transition-transform duration-300 ${
                          hoveredCard === index ? "scale-100" : "scale-0"
                        }`} />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg truncate">{anime.title}</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="text-sm bg-purple-500/20 px-2 py-1 rounded">
                            Score: {anime.score || 'N/A'}
                          </span>
                          <span className="text-sm bg-blue-500/20 px-2 py-1 rounded">
                            {anime.type || 'TV'}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                          {anime.synopsis || 'No description available'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
