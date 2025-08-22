import React from 'react'
import { motion } from 'framer-motion'
import type { BookItem } from './BookItems'

const BookCard = ({ id, title, writer, bookImage }: BookItem) => {
    return (
        <motion.div
            className="relative backdrop-blur-2xl rounded-3xl flex flex-col justify-between items-center min-w-64 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            key={id}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
            <div className="absolute inset-0 opacity-10 dark:bg-[length:20px_20px] dark:bg-[image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"></div>
            <div className="h-80 w-4/5 py-3 flex justify-center items-center">
                <img
                    src={bookImage}
                    alt={title}
                    className="h-full w-full object-fill rounded-xl select-none cursor-not-allowed transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div className="p-4 w-full text-start">
                <h2 className="text-lg font-semibold text-black dark:text-white/90 leading-snug line-clamp-2">
                    {title}
                </h2>
                <p className="text-sm text-neutral-800 dark:text-white/50 leading-tight mt-1 line-clamp-1">
                    {writer}
                </p>
            </div>
        </motion.div>
    )
}

export default BookCard
