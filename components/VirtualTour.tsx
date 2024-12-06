import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

interface Landmark {
  id: string
  name: string
  description: string
  imageSrc: string
}

const VirtualTour: React.FC = () => {
  const { t } = useTranslation('common')
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(null)

  const landmarks: Landmark[] = [
    {
      id: 'juche-tower',
      name: t('virtualTour.jucheTower.name'),
      description: t('virtualTour.jucheTower.description'),
      imageSrc: '/images/juche-tower.jpg',
    },
    {
      id: 'kim-il-sung-square',
      name: t('virtualTour.kimIlSungSquare.name'),
      description: t('virtualTour.kimIlSungSquare.description'),
      imageSrc: '/images/kim-il-sung-square.jpg',
    },
    {
      id: 'ryugyong-hotel',
      name: t('virtualTour.ryugyongHotel.name'),
      description: t('virtualTour.ryugyongHotel.description'),
      imageSrc: '/images/ryugyong-hotel.jpg',
    },
    {
      id: 'mansu-hill',
      name: t('virtualTour.mansuHill.name'),
      description: t('virtualTour.mansuHill.description'),
      imageSrc: '/images/mansu-hill.jpg',
    },
  ]

  return (
    <section className="my-16" aria-labelledby="virtual-tour-title">
      <h2 id="virtual-tour-title" className="text-3xl font-bold text-center mb-8 text-juche-blue">
        {t('virtualTour.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {landmarks.map((landmark) => (
          <motion.div
            key={landmark.id}
            className="bg-juche-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedLandmark(landmark)}
          >
            <div className="relative h-48">
              <Image
                src={landmark.imageSrc}
                alt={landmark.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-juche-blue mb-2">{landmark.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedLandmark && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedLandmark(null)}
        >
          <motion.div
            className="bg-juche-white rounded-lg shadow-xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <div className="relative h-64">
              <Image
                src={selectedLandmark.imageSrc}
                alt={selectedLandmark.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-juche-blue mb-4">{selectedLandmark.name}</h3>
              <p className="text-juche-dark-gray">{selectedLandmark.description}</p>
              <button
                className="mt-4 bg-juche-red text-juche-white px-4 py-2 rounded-full hover:bg-juche-gold hover:text-juche-blue transition duration-300"
                onClick={() => setSelectedLandmark(null)}
              >
                {t('virtualTour.close')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default VirtualTour

