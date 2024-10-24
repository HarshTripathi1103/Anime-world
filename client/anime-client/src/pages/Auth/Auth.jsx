import React, { useState, useEffect } from 'react';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated background stars */}
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
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 animate-gradient-x">
          <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center" />
        </div>

        {/* Animated Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        </div>

        {/* Auth Card */}
        <div className={`w-full max-w-md transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700">
            {/* Card Header */}
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-2">
                {isSignup ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-gray-400">
                {isSignup
                  ? 'Join the anime community today'
                  : 'Sign in to continue your journey'
                }
              </p>
            </div>

            {/* Form */}
            <div className="p-8 pt-0 space-y-6">
              {isSignup && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400">Username</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Enter your username"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-medium transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative">{isSignup ? 'Sign Up' : 'Sign In'}</span>
              </button>

              {/* Toggle Auth Mode */}
              <div className="text-center text-gray-400">
                <span>
                  {isSignup ? 'Already have an account? ' : "Don't have an account? "}
                </span>
                <button
                  onClick={() => setIsSignup(!isSignup)}
                  className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                >
                  {isSignup ? 'Sign In' : 'Sign Up'}
                </button>
              </div>

              {/* Social Login */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {['Google', 'Twitter', 'GitHub'].map((provider) => (
                  <button
                    key={provider}
                    className="flex items-center justify-center px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <span className="sr-only">Sign in with {provider}</span>
                    {provider === 'Google' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                        />
                      </svg>
                    )}
                    {provider === 'Twitter' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M23.954,4.569c-0.885,0.389-1.83,0.654-2.825,0.775c1.014-0.611,1.794-1.574,2.163-2.723c-0.951,0.555-2.005,0.959-3.127,1.184c-0.896-0.959-2.173-1.559-3.591-1.559c-2.717,0-4.92,2.203-4.92,4.917c0,0.39,0.045,0.765,0.127,1.124C7.691,8.094,4.066,6.13,1.64,3.161c-0.427,0.722-0.666,1.561-0.666,2.475c0,1.71,0.87,3.213,2.188,4.096c-0.807-0.026-1.566-0.248-2.228-0.616v0.061c0,2.385,1.693,4.374,3.946,4.827c-0.413,0.111-0.849,0.171-1.296,0.171c-0.314,0-0.615-0.03-0.916-0.086c0.631,1.953,2.445,3.377,4.604,3.417c-1.68,1.319-3.809,2.105-6.102,2.105c-0.39,0-0.779-0.023-1.17-0.067c2.189,1.394,4.768,2.209,7.557,2.209c9.054,0,13.999-7.496,13.999-13.986c0-0.209,0-0.42-0.015-0.63C22.505,6.411,23.34,5.544,23.954,4.569z"
                        />
                      </svg>
                    )}
                    {provider === 'GitHub' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
