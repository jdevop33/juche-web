'use client';

import React, { useState, FormEvent } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/app/hooks/useLanguage';
import { toast } from 'sonner';

type FooterLink = {
  name: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type FooterContent = {
  about: FooterSection;
  community: FooterSection;
  resources: FooterSection;
  contact: FooterSection;
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    button: string;
    success: string;
    error: string;
  };
  copyright: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
};

type ContentType = {
  en: FooterContent;
  ko: FooterContent;
};

export default function Footer() {
  const language = useLanguage() as 'en' | 'ko';
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content: ContentType = {
    en: {
      about: {
        title: "About",
        links: [
          { name: "Our Philosophy", href: "/philosophy" },
          { name: "Instructors", href: "/instructors" },
          { name: "Classes", href: "/classes" }
        ]
      },
      community: {
        title: "Community",
        links: [
          { name: "Events", href: "/events" },
          { name: "Blog", href: "/blog" },
          { name: "Forum", href: "/forum" }
        ]
      },
      resources: {
        title: "Resources",
        links: [
          { name: "FAQs", href: "/faqs" },
          { name: "Training Videos", href: "/videos" },
          { name: "Recommended Reading", href: "/reading" }
        ]
      },
      contact: {
        title: "Contact",
        links: [
          { name: "Get in Touch", href: "/contact" },
          { name: "Locations", href: "/locations" },
          { name: "Support", href: "/support" }
        ]
      },
      newsletter: {
        title: "Subscribe to our newsletter",
        description: "Get the latest news and updates delivered straight to your inbox.",
        placeholder: "Enter your email",
        button: "Subscribe",
        success: "Thank you for subscribing!",
        error: "Subscription failed. Please try again."
      },
      copyright: "© 2024 Karate Empowerment. All rights reserved.",
      socialLinks: {
        facebook: "Facebook",
        twitter: "Twitter",
        instagram: "Instagram",
        youtube: "YouTube"
      }
    },
    ko: {
      about: {
        title: "소개",
        links: [
          { name: "우리의 철학", href: "/philosophy" },
          { name: "강사진", href: "/instructors" },
          { name: "수업", href: "/classes" }
        ]
      },
      community: {
        title: "커뮤니티",
        links: [
          { name: "이벤트", href: "/events" },
          { name: "블로그", href: "/blog" },
          { name: "포럼", href: "/forum" }
        ]
      },
      resources: {
        title: "자료",
        links: [
          { name: "자주 묻는 질문", href: "/faqs" },
          { name: "트레이닝 비디오", href: "/videos" },
          { name: "추천 도서", href: "/reading" }
        ]
      },
      contact: {
        title: "연락처",
        links: [
          { name: "문의하기", href: "/contact" },
          { name: "위치", href: "/locations" },
          { name: "지원", href: "/support" }
        ]
      },
      newsletter: {
        title: "뉴스레터 구독",
        description: "최신 소식과 업데이트를 이메일로 받아보세요.",
        placeholder: "이메일 주소 입력",
        button: "구독하기",
        success: "구독해 주셔서 감사합니다!",
        error: "구독에 실패했습니다. 다시 시도해 주세요."
      },
      copyright: "© 2024 가라테 엠파워먼트. 모든 권리 보유.",
      socialLinks: {
        facebook: "Facebook",
        twitter: "Twitter",
        instagram: "Instagram",
        youtube: "YouTube"
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success(content[language].newsletter.success)
      setEmail('');
    } catch (error: unknown) {
      console.error(error);
      toast.error(content[language].newsletter.error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form className="mt-4 sm:flex sm:max-w-md" onSubmit={handleSubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-dancheong-red border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-dancheong-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-dancheong-red"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : content[language].newsletter.button}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{content[language].socialLinks.facebook}</span>
              <FaFacebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{content[language].socialLinks.twitter}</span>
              <FaTwitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{content[language].socialLinks.instagram}</span>
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{content[language].socialLinks.youtube}</span>
              <FaYoutube className="h-6 w-6" />
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            {content[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

