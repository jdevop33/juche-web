'use client'

import { motion } from 'framer-motion'
import { FaUserFriends, FaShieldAlt, FaHandshake } from 'react-icons/fa'

export default function Features() {
  const features = [
    { icon: FaUserFriends, title: 'Supportive Community', description: 'Build lasting friendships with like-minded individuals' },
    { icon: FaShieldAlt, title: 'Self-Defense Skills', description: 'Learn effective techniques to protect yourself and others' },
    { icon: FaHandshake, title: 'Honor & Integrity', description: 'Develop a strong moral compass and unwavering principles' },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          What We Offer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <feature.icon className="text-5xl text-red-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

