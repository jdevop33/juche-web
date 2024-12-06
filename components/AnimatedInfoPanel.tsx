import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

const AnimatedInfoPanel: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-juche-light-gray p-6 rounded-lg shadow-lg my-12"
    >
      <h3 className="text-2xl font-bold mb-4 text-juche-blue">{t('info_panel_title')}</h3>
      <p className="text-juche-dark-gray">{t('info_panel_content')}</p>
    </motion.section>
  )
}

export default AnimatedInfoPanel

