import { cn } from "ai-utilities"
import { Separator } from "ai-uis"

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
}

export function DocsPageHeader({
  heading,
  text,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <>
      <div className={cn("space-y-4", className)} {...props}>
        <h1 className="inline-block font-bold text-4xl lg:text-5xl">
          {heading}
        </h1>
        {text && <p className="text-xl text-slate-600 dark:text-slate-400">{text}</p>}
      </div>
      <Separator className="my-8"/>
    </>
  )
}
