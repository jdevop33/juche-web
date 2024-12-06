'use client'

import { useState, useEffect } from 'react'

export function useLanguage() {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en'
    setLanguage(storedLanguage)

    const handleStorageChange = () => {
      const updatedLanguage = localStorage.getItem('language') || 'en'
      setLanguage(updatedLanguage)
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return language
}

