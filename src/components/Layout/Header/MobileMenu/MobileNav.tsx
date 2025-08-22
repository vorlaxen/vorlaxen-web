import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CgChevronDown } from 'react-icons/cg'
import clsx from 'clsx'
import { navItems, type NavItem } from '@/components/Layout/Header/Nav/HeaderNavItems'

const NavMobile = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleMenu = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <nav className="flex flex-col w-full mt-8 px-2 space-y-3">
      {navItems.map((item, index) => {
        const isOpen = openIndex === index
        const hasChildren = item.children && item.children.length > 0

        return (
          <div key={`${item.path}-${index}`} className="w-full">
            {hasChildren ? (
              <button
                onClick={() => toggleMenu(index)}
                aria-expanded={isOpen}
                className={clsx(
                  'w-full h-12 px-4 flex items-center justify-between rounded-xl',
                  'text-base font-semibold text-black dark:text-white',
                  'bg-white/80 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10',
                  'backdrop-blur-md transition-colors duration-200 ease-in-out'
                )}
              >
                <span>{item.name}</span>
                <CgChevronDown
                  className={clsx(
                    'w-5 h-5 transform transition-transform duration-300',
                    isOpen && 'rotate-180'
                  )}
                />
              </button>
            ) : item.external ? (
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 px-4 flex items-center rounded-xl text-base font-semibold text-black dark:text-white bg-white/80 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 backdrop-blur-md transition-colors duration-200"
              >
                {item.name}
              </a>
            ) : (
              <Link
                to={item.path}
                className="w-full h-12 px-4 flex items-center rounded-xl text-base font-semibold text-black dark:text-white bg-white/80 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 backdrop-blur-md transition-colors duration-200"
              >
                {item.name}
              </Link>
            )}

            {/* Submenu */}
            <AnimatePresence initial={false}>
              {hasChildren && isOpen && (
                <motion.div
                  key="submenu"
                  initial={{ maxHeight: 0, opacity: 0 }}
                  animate={{ maxHeight: 500, opacity: 1 }}
                  exit={{ maxHeight: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden mt-2 pl-6"
                >
                  <div className="flex flex-col gap-1">
                    {item.children!.map((child) =>
                      child.external ? (
                        <a
                          key={child.path}
                          href={child.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                        >
                          {child.name}
                        </a>
                      ) : (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="text-sm px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                        >
                          {child.name}
                        </Link>
                      )
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </nav>
  )
}

export default NavMobile
