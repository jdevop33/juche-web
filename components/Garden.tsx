import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const Garden: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <section className="my-12" aria-labelledby="garden-title">
      <h2 id="garden-title" className="text-3xl font-bold text-center mb-6 text-juche-blue">
        {t('garden_title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src="/images/cherry_blossom.jpg"
            alt={t('cherry_blossom_alt')}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="relative w-full h-64 md:h-80">
          <Image
            src="/images/koi_pond.jpg"
            alt={t('koi_pond_alt')}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Garden

