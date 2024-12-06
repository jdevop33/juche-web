import React from 'react'
import { useTheme } from 'next-themes'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-dark text-dark' : 'bg-juche-white'}`}>
      {children}
    </div>
  )
}

export default Layout

