import React, { useEffect } from 'react'
import { bookItems, type BookItem } from './BookItems'
import BookCard from './BookCard'
import { motion, useAnimation, useScroll, useTransform, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Books = () => {
    const { t: tPages } = useTranslation('pages')
    const items = bookItems.concat(bookItems)
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            x: ['0%', '-50%'],
            transition: { repeat: Infinity, ease: 'linear', duration: 20 }
        });
    }, [controls]);
    const { scrollY } = useScroll();

    const scale = useTransform(scrollY, [0, 300], [1, 0.92]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const initialAnimation: Variants = {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    return (
        <motion.section
            variants={initialAnimation}
            initial="hidden"
            animate="visible"
            style={{ scale, opacity }}
            className="w-full relative min-h-screen flex flex-col overflow-hidden mt-24 will-change-transform"
        >
            <h2 className="text-2xl sm:text-4xl font-semibold leading-tight">
                {tPages('resources.books.mfr')}
            </h2>

            <div className="overflow-hidden mt-12 h-full w-full min-h-screen">
                <motion.div
                    className="flex gap-6 h-full w-full"
                    animate={controls}
                >
                    {items.map(item => <BookCard {...item} />)}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Books
