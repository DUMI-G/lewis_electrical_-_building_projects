'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      title: 'Electrical Installation & Maintenance',
      description: 'Commercial and industrial electrical systems, wiring, and regular maintenance services',
      image: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ea580c', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Circuit board background */}
          <circle cx="100" cy="100" r="90" fill="#f0f9ff" />
          {/* Lightning bolt */}
          <path d="M 100 30 L 70 90 L 105 90 L 85 150 L 130 80 L 100 80 Z" fill="url(#grad1)" />
          {/* Circuit lines */}
          <line x1="40" y1="100" x2="70" y2="100" stroke="#0ea5e9" strokeWidth="3" />
          <line x1="130" y1="100" x2="160" y2="100" stroke="#0ea5e9" strokeWidth="3" />
          <circle cx="40" cy="100" r="5" fill="#0ea5e9" />
          <circle cx="160" cy="100" r="5" fill="#0ea5e9" />
          {/* Animated pulse */}
          <motion.circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            opacity="0.3"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      ),
    },
    {
      title: 'Panel Wiring',
      description: 'Professional electrical panel installation, wiring, and control system setup',
      image: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0284c7', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect x="40" y="30" width="120" height="140" rx="8" fill="#1e293b" />
          <rect x="45" y="35" width="110" height="130" rx="4" fill="url(#grad2)" opacity="0.2" />
          {/* Panel elements */}
          {[0, 1, 2].map((row) =>
            [0, 1].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={60 + col * 50}
                y={50 + row * 35}
                width="30"
                height="25"
                rx="3"
                fill="#fbbf24"
                opacity="0.8"
              />
            ))
          )}
          {/* Indicator lights */}
          <circle cx="70" cy="150" r="5" fill="#10b981" />
          <circle cx="100" cy="150" r="5" fill="#10b981" />
          <circle cx="130" cy="150" r="5" fill="#ef4444" />
          {/* Animated indicators */}
          <motion.circle
            cx="70"
            cy="150"
            r="8"
            fill="#10b981"
            opacity="0.5"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>
      ),
    },
    {
      title: 'Cable Wrecking',
      description: 'Safe cable removal and recycling services for renovation and demolition projects',
      image: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="#fef3c7" opacity="0.3" />
          {/* Cable coils */}
          <ellipse cx="100" cy="80" rx="50" ry="15" fill="none" stroke="#f97316" strokeWidth="8" />
          <ellipse cx="100" cy="100" rx="50" ry="15" fill="none" stroke="#ea580c" strokeWidth="8" />
          <ellipse cx="100" cy="120" rx="50" ry="15" fill="none" stroke="#c2410c" strokeWidth="8" />
          {/* Tool */}
          <rect x="140" y="90" width="8" height="60" fill="#374151" transform="rotate(-30 144 120)" />
          <circle cx="144" cy="85" r="8" fill="#6b7280" />
        </svg>
      ),
    },
    {
      title: 'DB Board Inspection',
      description: 'Comprehensive distribution board testing, compliance checks, and certification',
      image: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="50" y="40" width="100" height="120" rx="5" fill="#1e293b" />
          <rect x="55" y="45" width="90" height="110" rx="3" fill="#334155" />
          {/* DB elements */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x="65" y={55 + i * 25} width="70" height="18" rx="2" fill="#64748b" />
              <rect x="70" y={58 + i * 25} width="10" height="12" rx="1" fill={i % 2 === 0 ? '#10b981' : '#ef4444'} />
            </g>
          ))}
          {/* Magnifying glass */}
          <circle cx="140" cy="140" r="20" fill="none" stroke="#0ea5e9" strokeWidth="4" />
          <line x1="155" y1="155" x2="175" y2="175" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
          {/* Checkmark */}
          <motion.path
            d="M 125 135 L 135 145 L 155 125"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
          />
        </svg>
      ),
    },
    {
      title: 'Electrical Maintenance',
      description: 'Preventive and corrective electrical maintenance for optimal system performance',
      image: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="#ecfccb" opacity="0.3" />
          {/* Wrench */}
          <rect x="70" y="90" width="60" height="12" rx="6" fill="#6b7280" />
          <circle cx="75" cy="96" r="15" fill="#9ca3af" />
          <circle cx="75" cy="96" r="10" fill="none" stroke="#374151" strokeWidth="3" />
          {/* Gear */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '125px', originY: '96px' }}
          >
            <circle cx="125" cy="96" r="18" fill="#f97316" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={i}
                x="123"
                y="78"
                width="4"
                height="8"
                fill="#ea580c"
                transform={`rotate(${i * 60} 125 96)`}
              />
            ))}
            <circle cx="125" cy="96" r="8" fill="#fbbf24" />
          </motion.g>
          {/* Spark */}
          <motion.path
            d="M 85 70 L 90 80 L 80 80 Z"
            fill="#fbbf24"
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </svg>
      ),
    },
    {
      title: 'Industrial Pumps & Motors',
      description: 'Installation, repair, and maintenance of industrial pumps and motor systems',
      image: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="#dbeafe" opacity="0.3" />
          {/* Pump body */}
          <rect x="60" y="80" width="80" height="60" rx="8" fill="#334155" />
          <rect x="65" y="85" width="70" height="50" rx="5" fill="#475569" />
          {/* Motor */}
          <motion.circle
            cx="100"
            cy="110"
            r="25"
            fill="#0ea5e9"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          <circle cx="100" cy="110" r="15" fill="#0284c7" />
          {/* Pipes */}
          <rect x="45" y="105" width="15" height="10" fill="#6b7280" />
          <rect x="140" y="105" width="15" height="10" fill="#6b7280" />
          {/* Flow indicators */}
          <motion.circle
            cx="50"
            cy="110"
            r="3"
            fill="#10b981"
            animate={{ x: [0, 90], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          {/* Pressure gauge */}
          <circle cx="100" cy="60" r="15" fill="#1e293b" />
          <circle cx="100" cy="60" r="12" fill="#f8fafc" />
          <line x1="100" y1="60" x2="108" y2="55" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Plumbing Services',
      description: 'Polypropylene, PVC, and galvanized plumbing installation and repair',
      image: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="#e0f2fe" opacity="0.3" />
          {/* Pipes */}
          <rect x="50" y="95" width="100" height="12" rx="6" fill="#6b7280" />
          <rect x="95" y="50" width="12" height="100" rx="6" fill="#6b7280" />
          {/* Joints */}
          <circle cx="100" cy="100" r="15" fill="#475569" />
          <circle cx="100" cy="100" r="10" fill="#64748b" />
          {/* Water drops */}
          {[0, 1, 2].map((i) => (
            <motion.ellipse
              key={i}
              cx="100"
              cy="120"
              rx="4"
              ry="6"
              fill="#0ea5e9"
              animate={{ y: [0, 40], opacity: [1, 0] }}
              transition={{ duration: 1.5, delay: i * 0.5, repeat: Infinity }}
            />
          ))}
          {/* Valve */}
          <rect x="140" y="94" width="20" height="14" rx="2" fill="#f97316" />
          <circle cx="150" cy="101" r="8" fill="#ea580c" />
          {/* Wrench */}
          <rect x="60" y="65" width="30" height="8" rx="4" fill="#1e293b" />
          <circle cx="55" cy="69" r="10" fill="#374151" />
        </svg>
      ),
    },
    {
      title: 'Steel Tanks PVC Lining',
      description: 'Professional PVC lining installation for steel tanks and containment systems',
      image: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="#fef3c7" opacity="0.3" />
          {/* Tank */}
          <ellipse cx="100" cy="60" rx="50" ry="15" fill="#94a3b8" />
          <rect x="50" y="60" width="100" height="70" fill="#cbd5e1" />
          <ellipse cx="100" cy="130" rx="50" ry="15" fill="#64748b" />
          {/* PVC layer */}
          <rect x="55" y="65" width="90" height="60" fill="#0ea5e9" opacity="0.6" />
          <ellipse cx="100" cy="125" rx="45" ry="13" fill="#0284c7" opacity="0.6" />
          {/* Liquid level */}
          <motion.rect
            x="55"
            y="100"
            width="90"
            height="25"
            fill="#06b6d4"
            opacity="0.4"
            animate={{ y: [100, 90, 100] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Support legs */}
          <rect x="60" y="130" width="8" height="30" fill="#475569" />
          <rect x="132" y="130" width="8" height="30" fill="#475569" />
        </svg>
      ),
    },
    {
      title: 'CO2 & Argon Welding',
      description: 'Expert welding services for industrial fabrication and repair work',
      image: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="#fef2f2" opacity="0.3" />
          {/* Welding torch */}
          <rect x="80" y="60" width="12" height="60" fill="#374151" />
          <polygon points="86,120 86,135 80,140 92,140" fill="#6b7280" />
          {/* Weld seam */}
          <line x1="50" y1="140" x2="150" y2="140" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
          {/* Sparks */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.circle
              key={i}
              cx={90 + Math.random() * 20 - 10}
              cy={130}
              r="2"
              fill="#fbbf24"
              animate={{
                y: [-10, -30, -50],
                x: [0, (Math.random() - 0.5) * 30],
                opacity: [1, 0.5, 0]
              }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
          {/* Weld flash */}
          <motion.circle
            cx="86"
            cy="130"
            r="15"
            fill="#fbbf24"
            opacity="0.6"
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
          {/* Gas cylinder */}
          <rect x="140" y="80" width="25" height="60" rx="3" fill="#0ea5e9" />
          <rect x="140" y="75" width="25" height="10" rx="2" fill="#0284c7" />
          <text x="152" y="115" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">CO₂</text>
        </svg>
      ),
    },
  ]

  return (
    <section id="services" ref={ref} className="section-container bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive electrical and industrial solutions tailored to your needs
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="service-card group"
          >
            <div className="w-full h-48 mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
              {service.image}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-xl mb-8 opacity-90">
            We provide tailored electrical and industrial services to meet your specific requirements
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get in Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  )
}
