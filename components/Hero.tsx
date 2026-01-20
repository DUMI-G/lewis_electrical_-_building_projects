'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-3 py-2 sm:px-4 sm:py-2 bg-primary-600/20 backdrop-blur-sm rounded-full border border-primary-600/30"
            >
              <span className="text-primary-400 font-semibold text-xs sm:text-sm">Professional Electrical & Building Services</span>
            </motion.div>
            
            <h1 className="hero-title mb-4 sm:mb-6 text-white">
              Powering Your
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Future Projects
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Expert electrical installation, industrial maintenance, plumbing, and welding services across Johannesburg. Quality craftsmanship for commercial and industrial projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button onClick={scrollToContact} className="btn-primary w-full sm:w-auto justify-center">
                Get a Quote
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary w-full sm:w-auto justify-center"
              >
                Our Services
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto md:mx-0"
            >
              <div className="text-center md:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Projects Done</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-gray-400 text-xs sm:text-sm">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-3xl backdrop-blur-sm border border-white/10 p-6 lg:p-8 flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Industrial Building Icon */}
                <g transform="translate(50, 50)">
                  {/* Main building */}
                  <rect x="50" y="100" width="200" height="200" fill="#f97316" opacity="0.8" rx="8" />
                  <rect x="50" y="100" width="200" height="200" fill="none" stroke="#fff" strokeWidth="3" rx="8" />
                  
                  {/* Windows */}
                  {[0, 1, 2].map((row) => 
                    [0, 1, 2].map((col) => (
                      <rect
                        key={`${row}-${col}`}
                        x={80 + col * 50}
                        y={130 + row * 50}
                        width="30"
                        height="30"
                        fill="#0ea5e9"
                        opacity="0.6"
                        rx="4"
                      />
                    ))
                  )}
                  
                  {/* Electrical bolt symbol */}
                  <path
                    d="M 150 50 L 120 120 L 160 120 L 140 180 L 180 100 L 150 100 Z"
                    fill="#fbbf24"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  
                  {/* Animated circuit lines */}
                  <motion.circle
                    cx="150"
                    cy="50"
                    r="15"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.3, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center pt-1 sm:pt-2"
        >
          <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
