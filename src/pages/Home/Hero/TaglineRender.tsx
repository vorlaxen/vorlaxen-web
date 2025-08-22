import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

type ParsedSegment = {
  text: string
  gradient: boolean
}

const parseTagline = (str: string): ParsedSegment[] => {
  const regex = /<1>(.*?)<\/1>/g
  let lastIndex = 0
  const segments: ParsedSegment[] = []
  let match: RegExpExecArray | null

  while ((match = regex.exec(str)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ text: str.slice(lastIndex, match.index), gradient: false })
    }
    segments.push({ text: match[1], gradient: true })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < str.length) {
    segments.push({ text: str.slice(lastIndex), gradient: false })
  }

  return segments
}

const TYPING_SPEED = 50
const DELETING_SPEED = 30
const PAUSE_DURATION = 1000

const AnimatedTagline = () => {
  const { t } = useTranslation('pages')
  const taglines: string[] = t('home.hero.taglines', { returnObjects: true }) as string[];

  const [taglineIndex, setTaglineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const currentTagline = taglines[taglineIndex]

  const segments = useMemo(() => parseTagline(currentTagline), [currentTagline])
  const fullText = useMemo(() => segments.map(s => s.text).join(''), [segments])

  // Gradient class memoized
  const gradientClass = useMemo(
    () =>
      'bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 dark:from-cyan-300 dark:via-violet-300 dark:to-fuchsia-400',
    []
  )

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isTyping) {
      if (charIndex < fullText.length) {
        timer = setTimeout(() => setCharIndex(c => c + 1), TYPING_SPEED)
      } else {
        timer = setTimeout(() => setIsTyping(false), PAUSE_DURATION)
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => setCharIndex(c => c - 1), DELETING_SPEED)
      } else {
        setIsTyping(true)
        setTaglineIndex(i => (i + 1) % taglines.length)
      }
    }

    return () => clearTimeout(timer)
  }, [charIndex, isTyping, fullText, taglines.length])

  let remainingChars = charIndex

  return (
    <span className="relative block text-3xl sm:text-3xl dark:text-neutral-200 h-[8rem] max-w-2xl mt-4">
      {segments.map((segment, i) => {
        if (remainingChars <= 0) return null

        const take = Math.min(segment.text.length, remainingChars)
        const textToRender = segment.text.slice(0, take)
        remainingChars -= take

        return (
          <span key={i} className={segment.gradient ? gradientClass : undefined}>
            {textToRender}
          </span>
        )
      })}
    </span>
  )
}

export default AnimatedTagline
