'use client'

import { motion } from 'framer-motion'
import { FaFistRaised } from 'react-icons/fa'
import { useLanguage } from '../app/hooks/useLanguage'


type LanguageKey = 'en' | 'ko'

export default function Hero() {
  const language = useLanguage() as LanguageKey

  const content = {
    en: {
      title: "Karate: Empowering Individual Destiny",
      subtitle: "Embracing Self-Reliance, Global Respect, and Personal Responsibility",
      cta: "Shape Your Own Path"
    },
    ko: {
      title: "가라테: 개인의 운명을 강화하다",
      subtitle: "자립, 세계적 존중, 개인적 책임을 받아들이기",
      cta: "당신만의 길을 만드세요"
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{content[language].title}</h1>
        <p className="text-xl md:text-2xl mb-8">{content[language].subtitle}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-dancheong-red text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-dancheong-blue transition duration-300"
        >
          {content[language].cta}
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <FaFistRaised className="text-dancheong-red opacity-10" size={400} />
      </motion.div>
    </section>
  )
}

