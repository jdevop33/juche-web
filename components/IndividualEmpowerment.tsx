'use client'

import { motion } from 'framer-motion'
import { FaUserAlt, FaBalanceScale, FaHandsHelping } from 'react-icons/fa'

export default function IndividualEmpowerment() {
  const principles = [
    {
      icon: FaUserAlt,
      title: 'Personal Responsibility',
      description: 'We believe in the power of individuals to shape their own destiny. Each person has the capacity and responsibility to make decisions that affect their life path.'
    },
    {
      icon: FaBalanceScale,
      title: 'Balanced Guidance',
      description: 'While we value independence, we also recognize the importance of mentorship and community wisdom. We encourage seeking guidance while maintaining personal autonomy.'
    },
    {
      icon: FaHandsHelping,
      title: 'Inclusive Empowerment',
      description: 'Our community respects all individuals regardless of gender, religion, or background. We believe in equal opportunity for self-determination and growth for everyone.'
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
          Individual Empowerment and Responsibility
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 text-lg"
        >
          We honor the diversity of human experience and beliefs. Our community supports each individual&apos;s journey towards self-realization, recognizing that personal growth often involves both independence and interconnectedness.
        </motion.p>
      </div>
    </section>
  )
}

