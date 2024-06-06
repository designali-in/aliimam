import { cn } from 'ai-utilities'
import { Icons } from 'ai-uis'
import { Button, ButtonProps } from 'ai-uis'
import Image from './image'
import { useCopyToClipboard } from '@/hooks/use-copy-clipboard'

export type Items = Array<{
  image: string
  name: string
  description: string
  url: string
  size: string
}>

type ItemGridProps = {
  items: Items
} 

type CopyButtonProps = {
  text: string
} & ButtonProps

export const FlexGrid = (props: ItemGridProps) => {
  const { items } = props

  return (
    <div className='mb-9 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target=''
          rel='noopener noreferrer'
          className='grid rounded-2xl border border-slate-200 dark:border-slate-800 p-2 no-underline transition-colors duration-150 hover:bg-black/5 hover:dark:bg-white/5 '
        >
          <Image
            src={item.image}
            width={256}
            height={256}
            alt={item.name}
            className='shrink-0'
            imageClassName='m-0 rounded-lg h-full w-full'
          />
          <div className='flex mt-2 p-2 flex-col justify-center gap-2'>
            <div className='flex justify-between items-center'>
              <div className='text-lg font-extrabold'>{item.name}</div>
              <span className='flex text-sm text-slate-600 dark:text-slate-400'>
                Download Now
                <Icons.download className='h-4 w-4 mx-1' />
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export const FlexGridTWO = (props: ItemGridProps) => {
  const { items } = props

  return (
    <div className='mb-9 grid md:grid-cols-2 gap-4'>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target=''
          rel='noopener noreferrer'
          className='grid rounded-2xl border border-slate-200 dark:border-slate-800 p-2 no-underline transition-colors duration-150 hover:bg-black/5 hover:dark:bg-white/5 '
        >
          <Image
            src={item.image}
            width={256}
            height={256}
            alt={item.name}
            className='shrink-0'
            imageClassName='m-0 rounded-lg h-full w-full'
          />
          <div className='flex mt-2 p-2 flex-col justify-center gap-2'>
            <div className='flex justify-between items-center'>
              <div className='text-lg font-extrabold'>{item.name}</div>
              <span className='flex text-sm text-slate-600 dark:text-slate-400'>
                Download Now
                <Icons.download className='h-4 w-4 mx-1' />
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}


export const TabGrid = (props: ItemGridProps) => {
  
  const { items } = props

  return (
    <div className='mb-8 mt-4 md:flex grid gap-2 '>
      {items.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <div className='p-2 rounded-2xl border border-slate-200 dark:border-slate-800'>
         <Image
            src={item.image}
            width={300}
            height={300}
            alt={item.name}
            className='shrink-0'
            imageClassName='m-0 mb-4 rounded-lg h-full w-full'
          />
          <div className='flex px-2 flex-col justify-center gap-2'>
            <div className='flex justify-between gap-4 items-center'>
              <div className='text-lg font-extrabold'>{item.name}</div>
              <div className='text-sm  text-slate-600 dark:text-slate-400'>{item.description}</div>
              <div className='text-sm text-slate-600 dark:text-slate-400'>{item.size}</div>
              <span className='flex text-sm items-center text-slate-600 dark:text-slate-400'>
                <CopyButton text={item.name} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const CopyButton = (props: CopyButtonProps) => {
  const { text, className, ...rest } = props
  const [copy, isCopied] = useCopyToClipboard()

  return (
    <Button
      className={cn(
        'size-8 p-0 bg-aired text-white',
        className
      )}
      variant='outline'
      onClick={() => copy({ text })}
      type='button'
      aria-label='Copy code to clipboard'
      {...rest}
    >
      {isCopied ? (
        <Icons.copy className='size-4 m-2' />
      ) : (
        <Icons.copy className='size-4 m-2' />
      )}
    </Button>
  )
}
