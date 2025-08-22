import PageMeta from '@/components/Common/PageMeta'
import { AppConfig } from '@/config/environment.config';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import clsx from 'clsx';
import React from 'react'
import { useTranslation } from 'react-i18next';

const Test = () => {
    const { theme, toggleTheme } = useTheme();
    const { currentLanguage, toggleLanguage } = useLanguage();
    const { t: commonTranslate } = useTranslation('common')
    const { t: tPages } = useTranslation('pages')

    return (
        <div className='w-full min-h-screen flex flex-col items-center gap-4'>
            <PageMeta title={`${AppConfig.siteName} ${tPages('test.title')}`} description={tPages('home.description')} />
            <p className='text-4xl text-black dark:text-white font-semibold'>{commonTranslate('hello')}</p>
            <span className='text-lg text-black dark:text-white'>Language: {currentLanguage || "null"}</span>
            <span className='text-lg text-black dark:text-white'>Current Theme: {theme}</span>
            <div className='flex gap-2 items-center justify-center'>
                <button
                    onClick={toggleTheme}
                    className={clsx(
                        'py-4 px-4',
                        'bg-black text-white dark:bg-white dark:text-black',
                        'rounded-full hover:ring-2 transition-shadow duration-300'
                    )}>
                    Toggle Theme
                </button>
                <button
                    onClick={toggleLanguage}
                    className={clsx(
                        'py-4 px-4',
                        'bg-black text-white dark:bg-white dark:text-black',
                        'rounded-full hover:ring-2 transition-shadow duration-300'
                    )}>
                    Toggle Language
                </button>
            </div>
        </div>
    )
}

export default Test