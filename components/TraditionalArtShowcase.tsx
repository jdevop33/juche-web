import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

interface ArtPiece {
  id: string
  title: string
  artist: string
  description: string
  imageSrc: string
}

const TraditionalArtShowcase: React.FC = () => {
  const { t } = useTranslation('common')
  const [selectedArtPiece, setSelectedArtPiece] = useState<ArtPiece | null>(null)

  const artPieces: ArtPiece[] = [
    {
      id: 'chosonghwa',
      title: t('traditionalArt.chosonghwa.title'),
      artist: t('traditionalArt.chosonghwa.artist'),
      description: t('traditionalArt.chosonghwa.description'),
      imageSrc: '/images/chosonghwa.jpg',
    },
    {
      id: 'minhwa',
      title: t('traditionalArt.minhwa.title'),
      artist: t('traditionalArt.minhwa.artist'),
      description: t('traditionalArt.minhwa.description'),
      imageSrc: '/images/minhwa.jpg',
    },
    {
      id: 'ceramics',
      title: t('traditionalArt.ceramics.title'),
      artist: t('traditionalArt.ceramics.artist'),
      description: t('traditionalArt.ceramics.description'),
      imageSrc: '/images/ceramics.jpg',
    },
  ]

  return (
    <section className="my-16" aria-labelledby="traditional-art-title">
      <h2 id="traditional-art-title" className="text-3xl font-bold text-center mb-8 text-juche-blue">
        {t('traditionalArt.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {artPieces.map((artPiece) => (
          <motion.div
            key={artPiece.id}
            className="bg-juche-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedArtPiece(artPiece)}
          >
            <div className="relative h-64">
              <Image
                src={artPiece.imageSrc}
                alt={artPiece.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-juche-blue mb-2">{artPiece.title}</h3>
              <p className="text-juche-dark-gray">{artPiece.artist}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedArtPiece && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedArtPiece(null)}
        >
          <motion.div
            className="bg-juche-white rounded-lg shadow-xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <div className="relative h-64">
              <Image
                src={selectedArtPiece.imageSrc}
                alt={selectedArtPiece.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-juche-blue mb-2">{selectedArtPiece.title}</h3>
              <p className="text-juche-dark-gray mb-4">{selectedArtPiece.artist}</p>
              <p className="text-juche-dark-gray">{selectedArtPiece.description}</p>
              <button
                className="mt-4 bg-juche-red text-juche-white px-4 py-2 rounded-full hover:bg-juche-gold hover:text-juche-blue transition duration-300"
                onClick={() => setSelectedArtPiece(null)}
              >
                {t('traditionalArt.close')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default TraditionalArtShowcase

