import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

interface TimelineEvent {
  year: number
  title: string
  description: string
}

const InteractiveTimeline: React.FC = () => {
  const { t } = useTranslation('common')
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

  const events: TimelineEvent[] = [
    {
      year: 1945,
      title: t('timeline.1945.title'),
      description: t('timeline.1945.description'),
    },
    {
      year: 1948,
      title: t('timeline.1948.title'),
      description: t('timeline.1948.description'),
    },
    {
      year: 1972,
      title: t('timeline.1972.title'),
      description: t('timeline.1972.description'),
    },
    {
      year: 2011,
      title: t('timeline.2011.title'),
      description: t('timeline.2011.description'),
    },
    {
      year: 2018,
      title: t('timeline.2018.title'),
      description: t('timeline.2018.description'),
    },
  ]

  return (
    <section className="my-16" aria-labelledby="timeline-title">
      <h2 id="timeline-title" className="text-3xl font-bold text-center mb-8 text-juche-blue">
        {t('timeline.title')}
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-juche-red"></div>
        {events.map((event, index) => (
          <motion.div
            key={event.year}
            className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className={`w-5 h-5 rounded-full bg-juche-gold border-4 border-juche-red absolute left-1/2 transform -translate-x-1/2 cursor-pointer`}
              onClick={() => setSelectedEvent(event)}
            ></div>
            <div
              className={`w-5/12 p-4 rounded-lg shadow-md bg-juche-light-gray ${
                index % 2 === 0 ? 'mr-8' : 'ml-8'
              }`}
            >
              <h3 className="text-xl font-bold text-juche-blue">{event.year}</h3>
              <p className="text-juche-dark-gray">{event.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 p-6 bg-juche-white rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-juche-blue mb-2">{selectedEvent.title}</h3>
          <p className="text-juche-dark-gray">{selectedEvent.description}</p>
        </motion.div>
      )}
    </section>
  )
}

export default InteractiveTimeline

