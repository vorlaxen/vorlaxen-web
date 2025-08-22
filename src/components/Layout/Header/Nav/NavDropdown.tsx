import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { type NavItem } from './HeaderNavItems'
import React, { useRef, useEffect, useState } from 'react'

type Props = {
  active: NavItem | null
  allItems: NavItem[]
  direction: -1 | 0 | 1
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
}

const NavDropdown: React.FC<Props> = React.memo(({ active, direction }) => {
  const [height, setHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.scrollHeight)
    }
  }, [active])

  if (!active?.children) return null

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        style={{ height }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full overflow-hidden"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            ref={containerRef}
            key={active.path}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="w-full absolute top-0 left-0"
          >
            <div className="flex flex-col gap-3 w-full">
              {active.children.map((child) =>
                child.external ? (
                  <a
                    key={child.path}
                    href={child.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-white dark:text-neutral-300 hover:text-neutral-200 dark:hover:text-white transition-colors"
                  >
                    {child.name}
                  </a>
                ) : (
                  <NavLink
                    key={child.path}
                    to={child.path}
                    className="text-base text-white dark:text-neutral-300 hover:text-neutral-200 dark:hover:text-white transition-colors"
                  >
                    {child.name}
                  </NavLink>
                )
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  )
})

export default NavDropdown
