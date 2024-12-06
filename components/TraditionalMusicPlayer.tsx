import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { PlayIcon, PauseIcon } from '@heroicons/react/solid'

interface Song {
  title: string
  artist: string
  file: string
}

const TraditionalMusicPlayer: React.FC = () => {
  const { t } = useTranslation('common')
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const songs: Song[] = [
    { title: t('traditionalMusic.song1.title'), artist: t('traditionalMusic.song1.artist'), file: '/audio/arirang.mp3' },
    { title: t('traditionalMusic.song2.title'), artist: t('traditionalMusic.song2.artist'), file: '/audio/doraji-taryeong.mp3' },
    { title: t('traditionalMusic.song3.title'), artist: t('traditionalMusic.song3.artist'), file: '/audio/ganggangsullae.mp3' },
  ]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[currentSongIndex].file
      if (isPlaying) {
        audioRef.current.play()
      }
    }
  }, [currentSongIndex, isPlaying])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length)
  }

  const playPrevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length)
  }

  return (
    <section className="my-16" aria-labelledby="traditional-music-title">
      <h2 id="traditional-music-title" className="text-3xl font-bold text-center mb-8 text-juche-blue">
        {t('traditionalMusic.title')}
      </h2>
      <div className="max-w-md mx-auto bg-juche-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <motion.h3
            key={currentSongIndex}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-2xl font-bold text-juche-red mb-2"
          >
            {songs[currentSongIndex].title}
          </motion.h3>
          <p className="text-lg text-juche-dark-gray">{songs[currentSongIndex].artist}</p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={playPrevSong}
            className="bg-juche-blue text-juche-white p-2 rounded-full hover:bg-juche-gold hover:text-juche-blue transition duration-300"
          >
            {t('traditionalMusic.prevSong')}
          </button>
          <button
            onClick={togglePlayPause}
            className="bg-juche-red text-juche-white p-4 rounded-full hover:bg-juche-gold hover:text-juche-blue transition duration-300"
          >
            {isPlaying ? (
              <PauseIcon className="h-8 w-8" />
            ) : (
              <PlayIcon className="h-8 w-8" />
            )}
          </button>
          <button
            onClick={playNextSong}
            className="bg-juche-blue text-juche-white p-2 rounded-full hover:bg-juche-gold hover:text-juche-blue transition duration-300"
          >
            {t('traditionalMusic.nextSong')}
          </button>
        </div>
        <audio
          ref={audioRef}
          onEnded={playNextSong}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </section>
  )
}

export default TraditionalMusicPlayer

