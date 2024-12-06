'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'

export default function About() {
  const language = useLanguage()

  const content = {
    en: {
      title: "Our Core Values",
      values: [
        {
          title: "Ideological Self-Reliance",
          description: "We believe in fostering ideological self-reliance through the practice of karate, building a supportive, self-reliant community that respects all nations and cultures while being prepared to protect ourselves and others."
        },
        {
          title: "Economic Independence",
          description: "We strive for economic self-sufficiency while being open to mutually beneficial collaborations. Our independence ensures all partnerships are choices, not necessities."
        },
        {
          title: "Political Respect",
          description: "We honor the diversity of political beliefs, national identities, and cultural backgrounds. Every individual's heritage and citizenship are respected."
        },
        {
          title: "Responsible Self-Defense",
          description: "We prioritize self-defense as a means of protection, not aggression. Our skills are for safeguarding ourselves and others, never for initiating conflict."
        },
        {
          title: "Global Unity",
          description: "We stand ready to support our friends and the global community against any threats, always within the bounds of mutual respect and understanding."
        }
      ]
    },
    ko: {
      title: "우리의 핵심 가치",
      values: [
        {
          title: "이념적 자립",
          description: "우리는 가라테 수련을 통해 이념적 자립을 육성하며, 모든 국가와 문화를 존중하면서도 자신과 타인을 보호할 준비가 된 지지적이고 자립적인 커뮤니티를 구축합니다."
        },
        {
          title: "경제적 독립",
          description: "우리는 상호 이익이 되는 협력에 열려 있으면서도 경제적 자립을 추구합니다. 우리의 독립성은 모든 파트너십이 필요가 아닌 선택임을 보장합니다."
        },
        {
          title: "정치적 존중",
          description: "우리는 정치적 신념, 국가 정체성, 문화적 배경의 다양성을 존중합니다. 모든 개인의 유산과 시민권이 존중받습니다."
        },
        {
          title: "책임 있는 자기 방어",
          description: "우리는 자기 방어를 공격이 아닌 보호의 수단으로 우선시합니다. 우리의 기술은 자신과 타인을 보호하기 위한 것이며, 결코 갈등을 시작하기 위한 것이 아닙니다."
        },
        {
          title: "글로벌 단결",
          description: "우리는 상호 존중과 이해의 범위 내에서 언제나 우리의 친구들과 글로벌 커뮤니티를 위협으로부터 지원할 준비가 되어 있습니다."
        }
      ]
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          {content[language].title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {content[language].values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-light-beige p-6 rounded-lg text-center"
            >
              <h3 className="text-2xl font-semibold mb-4 text-dancheong-red">{value.title}</h3>
              <p className="text-dark-grey font-korean">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

