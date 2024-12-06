import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

interface WordPair {
  korean: string
  english: string
  romanization: string
}

const LanguageLearning: React.FC = () => {
  const { t } = useTranslation('common')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [showTranslation, setShowTranslation] = useState(false)

  const wordPairs: WordPair[] = [
    { korean: '안녕하세요', english: 'Hello', romanization: 'Annyeonghaseyo' },
    { korean: '감사합니다', english: 'Thank you', romanization: 'Gamsahamnida' },
    { korean: '친구', english: 'Friend', romanization: 'Chingu' },
    { korean: '평화', english: 'Peace', romanization: 'Pyeonghwa' },
    { korean: '통일', english: 'Unification', romanization: 'Tongil' },
  ]

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordPairs.length)
    setShowTranslation(false)
  }

  const handlePrevWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex - 1 + wordPairs.length) % wordPairs.length)
    setShowTranslation(false)
  }

  return (
    <section className="my-16" aria-labelledby="language-learning-title">
      <h2 id="language-learning-title" className="text-3xl font-bold text-center mb-8 text-juche-blue">
        {t('languageLearning.title')}
      </h2>
      <div className="max-w-2xl mx-auto bg-juche-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <motion.h3
            key={currentWordIndex}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-4xl font-bold text-juche-red mb-4"
          >
            {wordPairs[currentWordIndex].korean}
          </motion.h3>
          <p className="text-xl text-juche-dark-gray mb-2">{wordPairs[currentWordIndex].romanization}</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: showTranslation ? 1 : 0 }}
            className="text-2xl font-semibold text-juche-blue"
          >
            {showTranslation ? wordPairs[currentWordIndex].english : ''}
          </motion.p>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handlePrevWord}
            className="bg-juche-blue text-juche-white px-4 py-2 rounded-full hover:bg-juche-gold hover:text-juche-blue transition duration-300"
          >
            {t('languageLearning.prevWord')}
          </button>
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="bg-juche-red text-juche-white px-4 py-2 rounded-full hover:bg-juche-gold hover:text-juche-blue transition duration-300"
          >
            {showTranslation ? t('languageLearning.hideTranslation') : t('languageLearning.showTranslation')}
          </button>
          <button
            onClick={handleNextWord}
            className="bg-juche-blue text-juche-white px-4 py-2 rounded-full hover:bg-juche-gold hover:text-juche-blue transition duration-300"
          >
            {t('languageLearning.nextWord')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default LanguageLearning

