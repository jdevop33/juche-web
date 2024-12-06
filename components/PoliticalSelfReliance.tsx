'use client'

import { motion } from 'framer-motion'
import { FaGlobeAmericas, FaHandshake, FaBalanceScale } from 'react-icons/fa'

export default function PoliticalSelfReliance() {
  const principles = [
    {
      icon: FaGlobeAmericas,
      title: 'Respect for Diversity',
      description: "We honor the diversity of political beliefs, national identities, and cultural backgrounds. Every individual's heritage and citizenship are respected."
    },
    {
      icon: FaHandshake,
      title: 'Mutual Respect',
      description: 'We extend the same respect to others that we expect for ourselves, regardless of national boundaries or political affiliations.'
    },
    {
      icon: FaBalanceScale,
      title: 'Equality of Human Value',
      description: 'We believe in the fundamental equality of all humans, regardless of their group size or origin. No nation or group is inherently superior to another.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Political Self-Reliance
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
            >
              <principle.icon className="text-5xl text-red-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">{principle.title}</h3>
              <p className="text-gray-600">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

