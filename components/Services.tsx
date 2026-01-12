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
      image: '/images/electrical installation.jpg',
    },
    {
      title: 'Panel Wiring',
      description: 'Professional electrical panel installation, wiring, and control system setup',
      image: '/images/panel wiring.jpeg',
    },
    {
      title: 'Cable Wrecking',
      description: 'Safe cable removal and recycling services for renovation and demolition projects',
      image: '/images/Cable_wrecking.jpg',
    },
    {
      title: 'DB Board Inspection',
      description: 'Comprehensive distribution board testing, compliance checks, and certification',
      image: '/images/db_inspection.jpeg',
    },
    {
      title: 'Electrical Maintenance',
      description: 'Preventive and corrective electrical maintenance for optimal system performance',
      image: '/images/An-Electrical-Maintenance.jpg',
    },
    {
      title: 'Industrial Pumps & Motors',
      description: 'Installation, repair, and maintenance of industrial pumps and motor systems',
      image: '/images/industrial_pumps&motors.jpg',
    },
    {
      title: 'Plumbing Services',
      description: 'Polypropylene, PVC, and galvanized plumbing installation and repair',
      image: '/images/plumbing.jpg',
    },
    {
      title: 'Steel Tanks PVC Lining',
      description: 'Professional PVC lining installation for steel tanks and containment systems',
      image: '/images/steel_tanks_PVC_lining.jpg',
    },
    {
      title: 'CO2 & Argon Welding',
      description: 'Expert welding services for industrial fabrication and repair work',
      image: '/images/welding.jpg',
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
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
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
