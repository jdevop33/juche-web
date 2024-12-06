'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en'
    setLanguage(storedLanguage)
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ko' : 'en'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    router.push(pathname, { locale: newLanguage })
  }

  return (
    <Button onClick={toggleLanguage} variant="outline" className="text-sm">
      {language === 'en' ? '한국어' : 'English'}
    </Button>
  )
}

