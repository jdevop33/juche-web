import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

interface Symbol {
  name: string
  description: string
  svgPath: string
}

const CulturalSymbols: React.FC = () => {
  const { t } = useTranslation('common')

  const symbols: Symbol[] = [
    {
      name: t('symbols.chollima.name'),
      description: t('symbols.chollima.description'),
      svgPath: 'M10 10 L90 10 L50 90 Z', // Placeholder triangle path
    },
    {
      name: t('symbols.kimIlSung.name'),
      description: t('symbols.kimIlSung.description'),
      svgPath: 'M50 10 A40 40 0 1 1 50 90 A40 40 0 1 1 50 10', // Placeholder circle path
    },
    {
      name: t('symbols.juche.name'),
      description: t('symbols.juche.description'),
      svgPath: 'M10 90 L50 10 L90 90 Z', // Placeholder triangle path
    },
  ]

  return (
    <section className="my-16" aria-labelledby="symbols-title">
      <h2 id="symbols-title" className="text-3xl font-bold text-center mb-8 text-juche-blue">
        {t('symbols.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {symbols.map((symbol, index) => (
          <motion.div
            key={symbol.name}
            className="bg-juche-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <svg
              className="w-24 h-24 mx-auto mb-4"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d={symbol.svgPath} />
            </svg>
            <h3 className="text-xl font-bold text-juche-blue mb-2">{symbol.name}</h3>
            <p className="text-juche-dark-gray">{symbol.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CulturalSymbols

