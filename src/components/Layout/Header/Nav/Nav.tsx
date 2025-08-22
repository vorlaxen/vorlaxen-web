import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems, type NavItem } from './HeaderNavItems'
import { IoIosArrowDown } from 'react-icons/io'
import clsx from 'clsx'
import NavDropdown from './NavDropdown'
import { usePrevious } from '@/hooks/usePrevious'
import { useLayoutNav } from './useLayoutNav'
import { motion, AnimatePresence } from 'framer-motion'

function getDirection(
  current: NavItem | null,
  previous: NavItem | null,
  items: NavItem[]
): -1 | 0 | 1 {
  if (!current || !previous || current.path === previous.path) return 0
  const currentIndex = items.findIndex(i => i.path === current.path)
  const previousIndex = items.findIndex(i => i.path === previous.path)
  return currentIndex > previousIndex ? 1 : currentIndex < previousIndex ? -1 : 0
}

const Nav: React.FC = () => {
  const translatedNav = useLayoutNav(navItems)
  const [hovered, setHovered] = useState<NavItem | null>(null)
  const previous = usePrevious(hovered)
  const direction = getDirection(hovered, previous, translatedNav)

  return (
    <nav
      className="relative hidden md:flex flex-col items-center justify-center h-14"
      onMouseLeave={() => setHovered(null)}
    >
      <div className="flex items-center gap-12 px-4 w-full justify-center relative z-[1100]">
        {translatedNav.map(item => (
          <div
            key={item.path}
            className="relative h-full"
            onMouseEnter={() => setHovered(item)}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  'relative text-sm font-normal transition-colors duration-200 h-48 mt-2 cursor-pointer',
                  'text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white',
                  isActive && 'text-black dark:text-white',
                  hovered?.children && 'text-neutral-300 hover:text-white'
                )
              }
            >
              <span className="flex items-center gap-2 cursor-pointer">
                {item.name}
                {item.children && (
                  <IoIosArrowDown
                    className={clsx(
                      'transition-transform duration-300',
                      hovered?.path === item.path && 'translate-y-[4px]'
                    )}
                  />
                )}
              </span>
            </NavLink>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {hovered?.children && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-2xl min-h-screen z-[1000]"
          />
        )}
      </AnimatePresence>

      <div
        className={clsx(
          'absolute top-full z-[1100] w-full min-h-[240px] rounded-2xl transition-all duration-200 ease-in-out transform',
          'bg-white bg-opacity-20 dark:bg-black dark:border dark:border-neutral-900 shadow-xl backdrop-blur-2xl px-6 py-6 overflow-hidden',
          hovered?.children
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        )}
        onMouseEnter={() => hovered && setHovered(hovered)}
        onMouseLeave={() => setHovered(null)}
      >
        <NavDropdown
          active={hovered}
          allItems={translatedNav}
          direction={direction}
        />
      </div>
    </nav>
  )
}

export default Nav
