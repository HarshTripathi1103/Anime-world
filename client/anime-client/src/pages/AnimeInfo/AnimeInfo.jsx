import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AnimeInfo = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const navigate = useNavigate(); // Updated to useNavigate

  useEffect(() => {
    fetchTopAnime();
    fetchGenres();
  }, []);

  const fetchTopAnime = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/top-anime');
      setTopAnime(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching top anime:', error);
      setLoading(false);
    }
  };

  const fetchGenres = async () => {
    try {
      const response = await axios.get('https://api.jikan.moe/v4/genres/anime');
      setGenres(response.data.data);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const fetchAnimeByGenre = async (genreId) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?genres=${genreId}`);
      setTopAnime(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching anime by genre:', error);
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/search/${searchQuery}`);
      setTopAnime(response.data.data);
    } catch (error) {
      console.error('Error searching anime:', error);
    }
    setIsSearching(false);
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    fetchAnimeByGenre(genre.mal_id);
  };

  const handleAnimeClick = async (animeId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/anime/${animeId}`);
      setSelectedAnime(response.data.data);
      navigate(`/anime/${animeId}`); // Updated to use navigate
    } catch (error) {
      console.error('Error fetching anime details:', error);
    }
  };

  const handleBackClick = () => {
    setSelectedAnime(null);
    navigate(-1); // Go back in history using navigate
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Sidebar - Genre Filter */}
      <div className="w-1/4 bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-4">Genres</h2>
        <ul>
          {genres.map((genre) => (
            <li
              key={genre.mal_id}
              className="cursor-pointer py-2 px-4 bg-gray-700 hover:bg-purple-600 mb-2 rounded-lg"
              onClick={() => handleGenreClick(genre)}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4">
        {/* Navbar with Search */}
        <nav className="sticky top-0 w-full p-4 backdrop-blur-sm bg-black/30 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              Anime<span className="text-purple-400">World</span>
            </h1>
            <form onSubmit={handleSearch} className="flex gap-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anime..."
                className="px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                disabled={isSearching}
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </form>
          </div>
        </nav>

        <div className="p-8">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
            </div>
          ) : selectedAnime ? (
            // Selected Anime Details
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
              <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <button
                  onClick={handleBackClick}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <img
                        src={selectedAnime.images.jpg.large_image_url}
                        alt={selectedAnime.title}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <h2 className="text-2xl font-bold mb-4">{selectedAnime.title}</h2>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-gray-400">Score:</span>
                          <span className="ml-2 text-purple-400">{selectedAnime.score}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Rank:</span>
                          <span className="ml-2 text-purple-400">#{selectedAnime.rank}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Episodes:</span>
                          <span className="ml-2">{selectedAnime.episodes}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Status:</span>
                          <span className="ml-2">{selectedAnime.status}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{selectedAnime.synopsis}</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedAnime.genres.map((genre) => (
                          <span
                            key={genre.mal_id}
                            className="px-3 py-1 bg-purple-600 rounded-full text-sm"
                          >
                            {genre.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Anime Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {topAnime.map((anime) => (
                <div
                  key={anime.mal_id}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => handleAnimeClick(anime.mal_id)}
                >
                  <div className="relative h-64">
                    <img
                      src={anime.images.jpg.large_image_url}
                      alt={anime.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-0 p-4">
                      <h3 className="text-lg font-bold">{anime.title}</h3>
                      <p className="text-sm text-gray-300">Score: {anime.score}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
