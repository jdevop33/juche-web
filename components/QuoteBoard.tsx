import { useTranslation } from 'next-i18next'

const QuoteBoard: React.FC = () => {
  const { t } = useTranslation('common')

  const quotes = [
    { key: 'quote1', korean: "평화와 화합을 기원합니다.", english: "We Wish for Peace and Harmony." },
    { key: 'quote2', korean: "강인한 정신과 단합된 마음으로 미래를 건설합시다.", english: "Let Us Build the Future with Strong Spirit and United Hearts." },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {quotes.map((quote) => (
        <div key={quote.key} className="bg-juche-gold text-juche-white p-6 rounded-lg shadow-md">
          <p className="text-xl font-korean mb-2">{quote.korean}</p>
          <p className="text-md italic">{quote.english}</p>
        </div>
      ))}
    </div>
  )
}

export default QuoteBoard

