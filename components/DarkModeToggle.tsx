import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

const DarkModeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="p-3 rounded-md hover:ring-2 hover:ring-gray-300"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-juche-gold" />
      ) : (
        <MoonIcon className="h-5 w-5 text-juche-blue" />
      )}
    </button>
  )
}

export default DarkModeToggle

