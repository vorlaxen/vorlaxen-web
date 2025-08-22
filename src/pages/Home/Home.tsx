import PageMeta from '@/components/Common/PageMeta'
import { AppConfig } from '@/config/environment.config'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import About from './About/About'
import Hero from './Hero/Hero'

const Home = () => {
  const { t: tPages } = useTranslation('pages')
  const aboutRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <PageMeta
        title={`${AppConfig.siteName} ${tPages('home.title')}`}
        description={tPages('home.description')}
      />

      <Hero scrollToRef={aboutRef} />
      <div ref={aboutRef}>
        <About />
      </div>
    </div>
  )
}

export default Home
