'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt, FaHandsHelping, FaExclamationTriangle } from 'react-icons/fa'

export default function SelfDefense() {
  const principles = [
    {
      icon: FaShieldAlt,
      title: 'Protective Self-Defense',
      description: 'We prioritize self-defense as a means of protection, not aggression. Our skills are for safeguarding ourselves and others, never for initiating conflict.'
    },
    {
      icon: FaHandsHelping,
      title: 'Global Community Support',
      description: 'We stand ready to support our friends and the global community against any threats, be they from rogue states or terrorist groups, always within the bounds of mutual respect.'
    },
    {
      icon: FaExclamationTriangle,
      title: 'Conflict Avoidance',
      description: 'While we're prepared to protect ourselves, our primary goal is to avoid conflict. We believe in diplomacy and mutual understanding as the first line of defense.'
    }
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Approach to Self-Defense and Global Security
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
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

