'use client'

import { motion } from 'framer-motion'
import { FaHandshake, FaUserShield, FaBalanceScale, FaChartLine } from 'react-icons/fa'
import { useLanguage } from '../hooks/useLanguage'

export default function OurApproach() {
  const language = useLanguage()

  const content = {
    en: {
      title: "Our Approach to Independence and Collaboration",
      approaches: [
        {
          icon: FaUserShield,
          title: 'Ideological Self-Reliance',
          description: 'We respect diverse beliefs while maintaining our united mission. Your beliefs are yours, and we're united in our goal to support and strengthen each other.'
        },
        {
          icon: FaChartLine,
          title: 'Economic Self-Reliance',
          description: 'We strive for economic self-sufficiency while being open to mutually beneficial collaborations. Our independence ensures all partnerships are choices, not necessities.'
        },
        {
          icon: FaHandshake,
          title: 'Collaborative Growth',
          description: 'We're eager to work together to maximize value for humanity. Our partnerships are founded on equity, mutual benefit, and shared goals for societal improvement.'
        },
        {
          icon: FaBalanceScale,
          title: 'Balanced Relationships',
          description: 'Our economic independence allows us to form more equitable and satisfying relationships with all stakeholders, leading to better outcomes for everyone involved.'
        }
      ]
    },
    ko: {
      title: "독립과 협력에 대한 우리의 접근 방식",
      approaches: [
        {
          icon: FaUserShield,
          title: '이념적 자립',
          description: '우리는 다양한 신념을 존중하면서도 우리의 통일된 사명을 유지합니다. 당신의 신념은 당신의 것이며, 우리는 서로를 지지하고 강화하는 목표로 하나가 됩니다.'
        },
        {
          icon: FaChartLine,
          title: '경제적 자립',
          description: '우리는 상호 이익이 되는 협력에 열려 있으면서도 경제적 자립을 추구합니다. 우리의 독립성은 모든 파트너십이 필요가 아닌 선택임을 보장합니다.'
        },
        {
          icon: FaHandshake,
          title: '협력적 성장',
          description: '우리는 인류를 위한 가치를 극대화하기 위해 함께 일하기를 열망합니다. 우리의 파트너십은 공정성, 상호 이익, 사회 개선을 위한 공동 목표에 기반을 두고 있습니다.'
        },
        {
          icon: FaBalanceScale,
          title: '균형 잡힌 관계',
          description: '우리의 경제적 독립성은 모든 이해관계자와 더 공정하고 만족스러운 관계를 형성할 수 있게 해주며, 이는 모든 관련자에게 더 나은 결과를 가져다 줍니다.'
        }
      ]
    }
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-dancheong-blue"
        >
          {content[language].title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content[language].approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              {approach.icon && <approach.icon className="text-5xl text-dancheong-red mb-4 mx-auto" />}
              <h3 className="text-2xl font-semibold mb-4 text-forest-green">{approach.title}</h3>
              <p className="text-dark-grey font-korean">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

