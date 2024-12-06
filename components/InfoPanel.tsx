import React from 'react'
import { useTranslation } from 'next-i18next'

const InfoPanel: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <section className="bg-juche-light-gray p-6 rounded-lg shadow-lg my-12">
      <h3 className="text-2xl font-bold mb-4 text-juche-blue">{t('info_panel_title')}</h3>
      <p className="text-juche-dark-gray">{t('info_panel_content')}</p>
    </section>
  )
}

export default InfoPanel

