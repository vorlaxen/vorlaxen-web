import React, { forwardRef } from 'react';
import ProfileCard from './ProfileCard';
import BadgeSection from './Badge';
import { useTranslation } from 'react-i18next';

const AboutSection = forwardRef<HTMLDivElement>((props, ref) => {
  const { t: tPages } = useTranslation('pages')
  return (
    <section
      ref={ref}
      className="w-full relative min-h-screen flex flex-col items-center text-center overflow-hidden"
    >

      <div className="mx-auto px-6 pb-24 max-w-5xl md:max-w-7xl w-full relative flex flex-col items-center">
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              {tPages("about.title")}
            </h2>
            <p className="text-gray-700 dark:text-neutral-400 max-w-2xl mx-auto">
              {tPages("about.subtitle")}
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-full scale-95 origin-center'>
            <ProfileCard />
            <BadgeSection />
          </div>
        </div>
      </div>
    </section>
  )
});

export default AboutSection;
