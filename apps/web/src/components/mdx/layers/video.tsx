import React from 'react'

import { cn } from 'ai-utilities'


type VideoProps = {
  src: string
  width: number
  height: number
} & React.ComponentPropsWithoutRef<'video'>

const Video = (props: VideoProps) => {
  const { src, width, height, controls = true, className, ...rest } = props

  return (
    <>
      <video
        className={cn('object-fit my-4 w-full h-full md:w-[360px] lg:w-[630px]  object-cover rounded-2xl shadow-lg ', className)}
        loop
        muted
        autoPlay
        src={src}
        controls={controls}
        width={width}
        height={height}
        {...rest}
      />
    </>
  )
}

export default Video
