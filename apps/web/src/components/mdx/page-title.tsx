'use client'

import { motion } from 'framer-motion'

import { Separator } from 'ai-uis'

type PageTitleProps = {
  title: string
  description: string
  animate?: boolean
}

const animation = {
  hide: {
    x: 0,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
}

const PageTitle = (props: PageTitleProps) => {
  const { title, description, animate = true } = props

  return (
    <div className='mb-16 mt-6 sm:mb-24 sm:mt-12 text-center'>
      <motion.h2
        className='my-4 inline-flex items-baseline pb-1 px-6 text-2xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-200 dark:to-slate-600'
          {
            ...(animate && {
              initial: animation.hide,
              animate: animation.show
            })
          }
        >
        {title}
      </motion.h2>
      <motion.p
        className='mb-6 text-sm text-slate-600 dark:text-slate-400'
        {...(animate && {
          initial: animation.hide,
          animate: animation.show,
          transition: {
            delay: 0.05
          }
        })}
      >
        {description}
      </motion.p>
      <Separator className='absolute inset-x-0 translate-y-2 sm:translate-y-6 opacity-25' />
    </div>
  )
}

export default PageTitle
