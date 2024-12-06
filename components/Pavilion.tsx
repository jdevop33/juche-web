import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const Pavilion: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <section className="my-12" aria-labelledby="pavilion-title">
      <h2 id="pavilion-title" className="text-3xl font-bold text-center mb-6 text-juche-blue">
        {t('pavilion_title')}
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-4">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/images/pavilion.jpg"
              alt={t('pavilion_image_alt')}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <p className="text-lg text-juche-dark-gray">
            {t('pavilion_description')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pavilion

