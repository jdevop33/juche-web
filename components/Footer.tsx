import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { useLanguage } from '../hooks/useLanguage'

export default function Footer() {
  const language = useLanguage()

  const content = {
    en: {
      about: {
        title: "About",
        links: [
          { name: "Our Philosophy", href: "#" },
          { name: "Instructors", href: "#" },
          { name: "Classes", href: "#" }
        ]
      },
      community: {
        title: "Community",
        links: [
          { name: "Events", href: "#" },
          { name: "Blog", href: "#" },
          { name: "Forum", href: "#" }
        ]
      },
      resources: {
        title: "Resources",
        links: [
          { name: "FAQs", href: "#" },
          { name: "Training Videos", href: "#" },
          { name: "Recommended Reading", href: "#" }
        ]
      },
      contact: {
        title: "Contact",
        links: [
          { name: "Get in Touch", href: "#" },
          { name: "Locations", href: "#" },
          { name: "Support", href: "#" }
        ]
      },
      newsletter: {
        title: "Subscribe to our newsletter",
        description: "Get the latest news and updates delivered straight to your inbox.",
        placeholder: "Enter your email",
        button: "Subscribe"
      },
      copyright: "© 2023 Karate Empowerment. All rights reserved."
    },
    ko: {
      about: {
        title: "소개",
        links: [
          { name: "우리의 철학", href: "#" },
          { name: "강사진", href: "#" },
          { name: "수업", href: "#" }
        ]
      },
      community: {
        title: "커뮤니티",
        links: [
          { name: "이벤트", href: "#" },
          { name: "블로그", href: "#" },
          { name: "포럼", href: "#" }
        ]
      },
      resources: {
        title: "자료",
        links: [
          { name: "자주 묻는 질문", href: "#" },
          { name: "트레이닝 비디오", href: "#" },
          { name: "추천 도서", href: "#" }
        ]
      },
      contact: {
        title: "연락처",
        links: [
          { name: "문의하기", href: "#" },
          { name: "위치", href: "#" },
          { name: "지원", href: "#" }
        ]
      },
      newsletter: {
        title: "뉴스레터 구독",
        description: "최신 소식과 업데이트를 이메일로 받아보세요.",
        placeholder: "이메일 주소 입력",
        button: "구독하기"
      },
      copyright: "© 2023 가라테 엠파워먼트. 모든 권리 보유."
    }
  }

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{content[language].about.title}</h3>
                <ul className="mt-4 space-y-4">
                  {content[language].about.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-base text-gray-300 hover:text-white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{content[language].community.title}</h3>
                <ul className="mt-4 space-y-4">
                  {content[language].community.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-base text-gray-300 hover:text-white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{content[language].resources.title}</h3>
                <ul className="mt-4 space-y-4">
                  {content[language].resources.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-base text-gray-300 hover:text-white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{content[language].contact.title}</h3>
                <ul className="mt-4 space-y-4">
                  {content[language].contact.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-base text-gray-300 hover:text-white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {content[language].newsletter.title}
            </h3>
            <p className="mt-4 text-base text-gray-300">
              {content[language].newsletter.description}
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                {content[language].newsletter.placeholder}
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder={content[language].newsletter.placeholder}
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-dancheong-red border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-dancheong-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-dancheong-red"
                >
                  {content[language].newsletter.button}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">YouTube</span>
              <FaYoutube className="h-6 w-6" />
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            {content[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

