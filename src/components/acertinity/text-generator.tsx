'use client'
import {cn} from '@/lib/utils'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export const TextGenerateEffect = ({
  words,
  className,
  width,
}: {
  words: string
  className?: string
  width?: string
}) => {
  const [scope, animate] = useAnimate()
  let wordsArray = words.split(' ')
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    )
  }, [animate])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`text-6xl font-extrabold leading-snug opacity-0 dark:text-foreground ${className}`}
            >
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-4">
        <div
          className={`flex flex-col w-full text-2xl tracking-wide text-black dark:text-white ${width}`}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
