import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Layout from '../components/Layout'
import ChollimaSculpture from '../components/ChollimaSculpture'
import Pavilion from '../components/Pavilion'
import Garden from '../components/Garden'
import QuoteBoard from '../components/QuoteBoard'
import InfoPanel from '../components/InfoPanel'
import InteractiveTimeline from '../components/InteractiveTimeline'
import CulturalSymbols from '../components/CulturalSymbols'
import VirtualTour from '../components/VirtualTour'
import TraditionalArtShowcase from '../components/TraditionalArtShowcase'
import LanguageLearning from '../components/LanguageLearning'
import TraditionalMusicPlayer from '../components/TraditionalMusicPlayer'
import DarkModeToggle from '../components/DarkModeToggle'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <Head>
        <title>{t('title')} | DPRK Honoring Project</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-4">
        <header className="flex justify-between items-center my-8">
          <h1 className="text-4xl font-bold text-juche-blue">{t('title')}</h1>
          <DarkModeToggle />
        </header>
        <ChollimaSculpture />
        <Pavilion />
        <Garden />
        <QuoteBoard />
        <InfoPanel />
        <InteractiveTimeline />
        <CulturalSymbols />
        <VirtualTour />
        <TraditionalArtShowcase />
        <LanguageLearning />
        <TraditionalMusicPlayer />
      </main>
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

