import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type ScrollOptions = {
  to?: number
  duration?: number
  behavior?: ScrollBehavior
}

const smartScrollTo = ({
  to = 0,
  duration = 500,
  behavior = 'smooth',
}: ScrollOptions = {}) => {
  const start = window.scrollY || window.pageYOffset
  const change = to - start

  if (behavior === 'auto' || duration === 0) {
    window.scrollTo({ top: to, behavior })
    return
  }

  const startTime = performance.now()

  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeInOutQuad(progress)
    const newY = start + change * easedProgress

    window.scrollTo({ top: newY, behavior: 'auto' })

    if (elapsed < duration) {
      requestAnimationFrame(animateScroll)
    }
  }

  requestAnimationFrame(animateScroll)
}

export default smartScrollTo;