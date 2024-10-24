import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Introduction = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [ref1, inView1] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      const featuredAnimeSection = document.getElementById("featured-anime");
      if (featuredAnimeSection) {
        const rect = featuredAnimeSection.getBoundingClientRect();
        setShowScrollIndicator(rect.top > window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredAnime = [
    {
      title: "Naruto",
      genre: "Action",
      Image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    },
    {
      title: "One Piece",
      genre: "Adventure",
      Image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    },
    {
      title: "Attack on Titan",
      genre: "Comedy",
      Image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    },
  ];

  const infoSections = [
    {
      title: "Explore Endless Possibilities",
      description:
        "Dive into a vast collection of anime spanning every genre imaginable. From action-packed shonen to heartwarming slice-of-life, find your next favorite series with our curated recommendations.",
      image: "../src/assets/giyu.png",
      stats: [
        { label: "Anime Titles", value: "1000+" },
        { label: "Active Users", value: "50K+" },
        { label: "Reviews", value: "100K+" },
      ],
    },
    {
      title: "Watch Anywhere, Anytime",
      description:
        "Stream your favorite anime on any device. Our platform supports seamless viewing across desktop, mobile, and smart TVs, with automatic progress syncing and personalized watchlists.",
      image: "../src/assets/butler.png",
      features: [
        "HD Quality Streaming",
        "Multi-device Support",
        "Offline Downloads",
      ],
    },
    {
      title: "Join The Community",
      description:
        "Connect with fellow anime enthusiasts, share your thoughts, and participate in discussions. Our vibrant community brings together fans from around the world to celebrate anime culture.",
      image: "../src/assets/Hyouka.png",
      socialFeatures: ["Discussion Forums", "Fan Art Sharing", "Live Chat"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full opacity-50 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <div className="relative min-h-screen flex flex-col">
        {/* Enhanced Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 animate-gradient-x">
          <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center" />
        </div>
        <nav
          className={`sticky top-0 w-full p-4 flex justify-between items-center z-50 transition-all duration-700 backdrop-blur-sm bg-black/30 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="text-2xl font-bold relative group">
            <span className="relative z-10">Anime World</span>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </div>
          <div className="flex items-center gap-6">
            <button className="hover:text-purple-400 transition-all duration-300 hover:rotate-180">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <button className="hover:text-purple-400 transition-all duration-300 hover:scale-110">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="relative group">
              <button className="hover:text-purple-400 transition-colors duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-gray-800 rounded-lg shadow-lg p-4 space-y-2">
                  <div className="hover:bg-purple-500/20 p-2 rounded transition-colors cursor-pointer">
                    Profile
                  </div>
                  <div className="hover:bg-purple-500/20 p-2 rounded transition-colors cursor-pointer">
                    Settings
                  </div>
                  <div className="hover:bg-purple-500/20 p-2 rounded transition-colors cursor-pointer">
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
            <h1
              className={`text-6xl md:text-8xl font-bold mb-8 transition-all duration-1000 hover:scale-105 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Anime<span className="text-purple-400 animate-pulse">World</span>
            </h1>
            <p
              className={`text-xl md:text-2xl mb-12 text-center transition-all duration-1000 delay-300 hover:text-purple-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Discover your anime world
            </p>
            <div
              className={`flex gap-6 transition-all duration-1000 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button className="group relative flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all overflow-hidden">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <Link to="/auth"><span className="relative z-10">Watch Now</span></Link>
              </button>
              <button className="relative border-2 border-white hover:border-purple-400 hover:text-purple-400 px-6 py-3 rounded-full transition-all overflow-hidden group">
                <div className="absolute inset-0 bg-purple-400/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

               <Link to="/catalog"><span className="relative z-10">Browse Catalog</span></Link>
              </button>
            </div>
          </div>
          <div className="w-full px-4 pb-20" id="featured-anime">
            <div
              className={`max-w-6xl mx-auto transition-all duration-1000 delay-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6 text-center">
                Featured Anime
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {featuredAnime.map((anime, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="w-48 h-64 bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                      <div className="h-full w-full bg-gradient-to-b from-purple-600/20 to-blue-600/20 p-4 flex flex-col justify-end">
                        <h3 className="text-lg font-bold">{anime.title}</h3>
                        <img
                          src={anime.Image}
                          alt={anime.title}
                          className="w-full h-40 object-cover rounded-lg mt-2"
                        />
                        <p className="text-sm text-gray-300">{anime.genre}</p>
                        <div
                          className={`absolute inset-0 bg-purple-500/10 transform transition-transform duration-300 ${
                            hoveredCard === index ? "scale-100" : "scale-0"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {infoSections.map((section, index) => {
          const isEven = index % 2 === 0;
          const ref = [ref1, ref2, ref3][index];
          const inView = [inView1, inView2, inView3][index];

          return (
            <section
              key={index}
              ref={ref}
              className={`min-h-screen flex items-center py-20 relative ${
                isEven
                  ? "bg-gradient-to-r from-purple-900/50 to-blue-900/50"
                  : "bg-gradient-to-l from-blue-900/50 to-purple-900/50"
              }`}
            >
              <div
                className={`absolute inset-0 opacity-10 bg-[url('/api/placeholder/1920/1080')] bg-fixed bg-cover bg-center`}
              />

              <div
                className={`container mx-auto px-4 flex ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }
              items-center gap-12 flex-wrap lg:flex-nowrap transition-all duration-1000
              ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <h2 className="text-4xl font-bold">{section.title}</h2>
                  <p className="text-lg text-gray-300">{section.description}</p>

                  {/* Conditional rendering based on section content */}
                  {section.stats && (
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      {section.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold text-purple-400">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-400">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.features && (
                    <div className="space-y-4 mt-8">
                      {section.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.socialFeatures && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                      {section.socialFeatures.map((feature, i) => (
                        <div
                          key={i}
                          className="bg-purple-500/20 p-4 rounded-lg text-center hover:bg-purple-500/30 transition-colors"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Image Side */}
                <div className="flex-1 relative">
                  <div
                    className={`relative w-full aspect-[3/4] rounded-lg overflow-hidden
                  transform transition-all duration-700 ${
                    inView ? "scale-75" : "scale-95"
                  }`}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" /> */}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 transition-all duration-1000 animate-pulse`}
          />
          <div
            className={`absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 transition-all duration-1000 delay-300 animate-pulse`}
          />
        </div>
        {showScrollIndicator && (
          <div
            className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full p-2 animate-bounce">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse mx-auto" />
            </div>
          </div>
        )}
      </div>

      <footer className="bg-gray-900 border-t border-purple-500/20">
        <div className="container mx-auto px-4 py-12">
          {/* Upper Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Anime<span className="text-purple-400">World</span>
              </h3>
              <p className="text-gray-400">
                Your gateway to the world of anime.
              </p>
              <div className="flex gap-4">
                {/* Social Media Icons */}
                {["twitter", "facebook", "instagram", "youtube"].map(
                  (platform) => (
                    <button
                      key={platform}
                      className="w-8 h-8 rounded-full bg-purple-500/20 hover:bg-purple-500/40 flex items-center justify-center transition-colors"
                    >
                      <span className="sr-only">{platform}</span>
                      {platform === "twitter" && (
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.935 4.935 0 002.163-2.724c-.95.555-2.005.956-3.127 1.173a4.918 4.918 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161c-.423.725-.666 1.561-.666 2.475 0 1.709.87 3.213 2.188 4.096a4.903 4.903 0 01-2.224-.616v.062c0 2.388 1.694 4.377 3.946 4.837-.414.112-.848.171-1.293.171-.316 0-.624-.031-.927-.087a4.93 4.93 0 004.604 3.417A9.867 9.867 0 010 19.54a13.933 13.933 0 007.548 2.211c9.057 0 14-7.496 14-13.985l-.017-.635A9.935 9.935 0 0024 5a9,9,0,01-2 .549z" />
                        </svg>
                      )}
                      {platform === "facebook" && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                        </svg>
                      )}
                      {platform === "instagram" && (
                        <svg
                          className="w-12 h-12"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <rect
                            x="15.5"
                            y="9"
                            width="2"
                            height="2"
                            rx="1"
                            transform="rotate(-90 15.5 9)"
                            fill="#000000"
                          />
                          <rect
                            x="16"
                            y="8.5"
                            width="1"
                            height="1"
                            rx="0.5"
                            transform="rotate(-90 16 8.5)"
                            stroke="#000000"
                            stroke-linecap="round"
                          />
                        </svg>
                      )}
                      {platform === "youtube" && (
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M30.722,20.579 C30.137,21.894 28.628,23.085 27.211,23.348 C27.066,23.375 23.603,24.000 16.010,24.000 L15.990,24.000 C8.398,24.000 4.932,23.375 4.788,23.349 C3.371,23.085 1.861,21.894 1.275,20.578 C1.223,20.461 0.001,17.647 0.001,12.000 C0.001,6.353 1.223,3.538 1.275,3.421 C1.861,2.105 3.371,0.915 4.788,0.652 C4.932,0.625 8.398,-0.000 15.990,-0.000 C23.603,-0.000 27.066,0.625 27.210,0.651 C28.628,0.915 30.137,2.105 30.723,3.420 C30.775,3.538 32.000,6.353 32.000,12.000 C32.000,17.647 30.775,20.461 30.722,20.579 ZM28.893,4.230 C28.581,3.529 27.603,2.759 26.845,2.618 C26.813,2.612 23.386,2.000 16.010,2.000 C8.615,2.000 5.185,2.612 5.152,2.618 C4.394,2.759 3.417,3.529 3.104,4.234 C3.094,4.255 2.002,6.829 2.002,12.000 C2.002,17.170 3.094,19.744 3.106,19.770 C3.417,20.471 4.394,21.241 5.153,21.382 C5.185,21.388 8.615,22.000 15.990,22.000 L16.010,22.000 C23.386,22.000 26.813,21.388 26.846,21.382 C27.604,21.241 28.581,20.471 28.894,19.766 C28.904,19.744 29.998,17.170 29.998,12.000 C29.998,6.830 28.904,4.255 28.893,4.230 ZM13.541,17.846 C13.379,17.949 13.193,18.000 13.008,18.000 C12.842,18.000 12.676,17.959 12.525,17.875 C12.206,17.699 12.008,17.364 12.008,17.000 L12.008,7.000 C12.008,6.637 12.204,6.303 12.521,6.127 C12.838,5.950 13.227,5.958 13.534,6.149 L21.553,11.105 C21.846,11.286 22.026,11.606 22.027,11.951 C22.028,12.296 21.852,12.618 21.560,12.801 L13.541,17.846 ZM14.009,8.794 L14.009,15.189 L19.137,11.963 L14.009,8.794 Z" />
                        </svg>
                      )}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  "Home",
                  "Browse",
                  "Categories",
                  "New Releases",
                  "My List",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help & Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Help & Support</h4>
              <ul className="space-y-2">
                {[
                  "FAQ",
                  "Contact Us",
                  "Terms of Service",
                  "Privacy Policy",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <div className="space-y-4">
                <p className="text-gray-400">
                  Subscribe to our newsletter for updates and exclusive offers.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 AnimeWorld. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Introduction;
